export type ToastTypes = 'success' | 'error' | 'loading' | 'blank' | 'custom';

export type Toast = {
    id: string,
    icon?: string,
    type: ToastTypes,
    visible?: boolean,
    duration: number,
    message: string
}

export enum actionTypes {
    addToast,
    dismissToast,
    removeToast,
}

export type action =
    | {
        type: actionTypes.addToast;
        toast: Toast;
    }
    | {
        type: actionTypes.dismissToast;
        toastId?: string;
    }
    | {
        type: actionTypes.removeToast;
        toastId?: string;
    };