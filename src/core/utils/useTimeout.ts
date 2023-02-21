import type { ComputedRef, Ref } from 'vue'
import { readonly, ref, computed, unref } from 'vue'
import { getCurrentScope, onScopeDispose } from 'vue'

/**
 * Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
 *
 * @param fn
 */
function tryOnScopeDispose(fn: Fn) {
    if (getCurrentScope()) {
        onScopeDispose(fn)
        return true
    }
    return false
}

/**
 * Get the value of value/ref/getter.
 */
function resolveUnref<T>(r: MaybeComputedRef<T>): T {
    return typeof r === 'function'
        ? (r as any)()
        : unref(r)
}

/**
 * Maybe it's a ref, or a plain value
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
type MaybeRef<T> = T | Ref<T>


/**
 * Maybe it's a computed ref, or a getter function
 *
 * ```ts
 * type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>
 * ```
 */
type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>


/**
 * Maybe it's a ref, or a plain value, or a getter function
 *
 * ```ts
 * type MaybeComputedRef<T> = (() => T) | T | Ref<T> | ComputedRef<T>
 * ```
 */
type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>


interface Stoppable<StartFnArgs extends any[] = any[]> {
    /**
     * A ref indicate whether a stoppable instance is executing
     */
    isPending: Readonly<Ref<boolean>>

    /**
     * Stop the effect from executing
     */
    stop: Fn

    /**
     * Start the effects
     */
    start: (...args: StartFnArgs) => void
}

/**
 * Void function
 */
type Fn = () => void

const isClient = typeof window !== 'undefined'
const noop = () => { }

export interface UseTimeoutFnOptions {
    /**
     * Start the timer immediate after calling this function
     *
     * @default true
     */
    immediate?: boolean
}

/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param options
 */
function useTimeoutFn<CallbackFn extends (...args: any[]) => any>(
    cb: CallbackFn,
    interval: MaybeComputedRef<number>,
    options: UseTimeoutFnOptions = {},
): Stoppable<Parameters<CallbackFn> | []> {
    const {
        immediate = true,
    } = options

    const isPending = ref(false)

    let timer: ReturnType<typeof setTimeout> | null = null

    function clear() {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }

    function stop() {
        isPending.value = false
        clear()
    }

    function start(...args: Parameters<CallbackFn> | []) {
        clear()
        isPending.value = true
        timer = setTimeout(() => {
            isPending.value = false
            timer = null

            cb(...args)
        }, resolveUnref(interval))
    }

    if (immediate) {
        isPending.value = true
        if (isClient)
            start()
    }

    tryOnScopeDispose(stop)

    return {
        isPending: readonly(isPending),
        start,
        stop,
    }
}

export interface UseTimeoutOptions<Controls extends boolean> extends UseTimeoutFnOptions {
    /**
     * Expose more controls
     *
     * @default false
     */
    controls?: Controls
    /**
     * Callback on timeout
     */
    callback?: Fn
}

/**
 * Update value after a given time with controls.
 *
 * @see   {@link https://vueuse.org/useTimeout}
 * @param interval
 * @param options
 */
export function useTimeout(interval?: number, options?: UseTimeoutOptions<false>): ComputedRef<boolean>
export function useTimeout(interval: number, options: UseTimeoutOptions<true>): { ready: ComputedRef<boolean> } & Stoppable
export function useTimeout(interval = 1000, options: UseTimeoutOptions<boolean> = {}) {
    const {
        controls: exposeControls = false,
        callback,
    } = options

    const controls = useTimeoutFn(
        callback ?? noop,
        interval,
        options,
    )

    const ready = computed(() => !controls.isPending.value)

    if (exposeControls) {
        return {
            ready,
            ...controls,
        }
    }
    else {
        return ready
    }
}