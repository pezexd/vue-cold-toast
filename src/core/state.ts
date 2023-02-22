import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'
import { Toast, action, actionTypes } from './types'
import type { CreateGlobalStateReturn } from '@vueuse/core'

const toastLimit = 6

export const useState = createGlobalState(() => {
    const toasts = ref<Toast[]>([])

    return {
        toasts
    }
})

export const reducer = (toasts: Toast[], action: action): { toasts: Toast[] } => {
    switch (action.type) {
        case actionTypes.addToast:
            return {
                toasts: [action.toast, ...toasts].slice(0, toastLimit)
            };

        case actionTypes.dismissToast:
            const { toastId } = action
            return {
                toasts: toasts.map((t) => {
                    if (t.id === toastId || toastId === undefined) {
                        return { ...t, visible: false }
                    }
                    else {
                        return t
                    }
                })
            };

        case actionTypes.removeToast:
            if (action.toastId === undefined) {
                return {
                    toasts: []
                }
            }
            return {
                toasts: toasts.filter((t) => t.id !== action.toastId)
            };
    }
}

export const dispatch = (action: action) => {
    const { toasts } = useState()
    const { toasts: after } = reducer(toasts.value, action)

    toasts.value = after
}