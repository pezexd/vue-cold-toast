import { actionTypes, Toast, ToastTypes } from './types';
import { useCounter } from '@vueuse/core'
import { dispatch } from './state';

type ToastHandler = (message: string) => string;

const genToastId = (() => {
    const { inc } = useCounter(0)

    return () => {
        return (inc()).toString()
    }
})()

const createToast = (message: string, type: ToastTypes = 'blank'): Toast => ({
    id: genToastId(),
    visible: true,
    type,
    message,
    duration: 3000,
})

const createHandler = (type: ToastTypes): ToastHandler => (message: string) => {
    const toast = createToast(message, type)
    dispatch({ type: actionTypes.addToast, toast })
    return toast.id
}

const dismissHandler = (toastId?: string) => {
    dispatch({ type: actionTypes.dismissToast, toastId })
}

function useToaster() {
    const toast = (message: string) => createHandler('blank')(message)
    toast.success = createHandler('success')
    toast.error = createHandler('error')
    toast.loading = createHandler('loading')
    toast.custom = createHandler('custom')
    toast.dismiss = dismissHandler

    toast.promise = <T>(promise: Promise<T>, msgs: { loading: string, success: string, error: string },) => {
        const id = toast.loading(msgs.loading)

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