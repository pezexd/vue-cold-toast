import { actionTypes, Toast, ToastOptions, ToastType } from './types';
import { dispatch } from './state';
import { useCounter } from '@vueuse/core'

export type ToastHandler = (message: string, opts?: ToastOptions) => string;

const genToastId = (() => {
    const { inc } = useCounter(0)

    return () => {
        return (inc()).toString()
    }
})()

const createToast = (message: string, type: ToastType = 'blank', opts?: ToastOptions): Toast => ({
    id: opts?.id || genToastId(),
    type,
    message,
    visible: true,
    duration: 3000,
    ...opts
})

const createHandler = (type: ToastType): ToastHandler => (message, opts) => {
    const toast = createToast(message, type, opts)
    dispatch({ type: actionTypes.addToast, toast })
    return toast.id
}

const dismissHandler = (toastId?: string) => {
    dispatch({ type: actionTypes.dismissToast, toastId })
}

function useToaster() {
    const toast = (message: string, opts?: ToastOptions) => createHandler('blank')(message, opts)
    toast.success = createHandler('success')
    toast.error = createHandler('error')
    toast.loading = createHandler('loading')
    toast.custom = createHandler('custom')
    toast.dismiss = dismissHandler

    toast.promise = <T>(promise: Promise<T>, msgs: { loading: string, success: string, error: string },) => {
        toast.loading(msgs.loading)

        promise
            .then((p) => {
                toast.success(msgs.success)
                return p
            })
            .catch((e) => {
                toast.error(msgs.error)
            })

        return promise
    }

    return {
        toast
    }
}

export default useToaster