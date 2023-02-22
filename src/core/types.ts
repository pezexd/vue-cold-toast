export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface Toast {
    message: string,
    type: ToastType,
    visible?: boolean,
    position?: ToastPosition,
    // style?: CSSProperties,
    // classes?: string
    
    // Customs
    id: string,
    icon?: string,
    duration: number,
    parseHTML?: boolean,
}

export interface ToastOptions {
    id?: string,
    icon?: string,
    duration?: number,
    parseHTML?: boolean,
    // position?: ToastPosition,
    // style?: CSSProperties,
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