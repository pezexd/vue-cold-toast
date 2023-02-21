import type { CSSProperties } from "vue";

export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface Toast {
    id: string,
    icon?: string,
    message: string,
    duration: number,
    type: ToastType,
    visible?: boolean,
    
    position?: ToastPosition,
    style?: CSSProperties,
    classes?: string
}

export interface ToastOptions {
    id?: string,
    position?: ToastPosition,
    icon?: string,
    duration?: number,
    style?: CSSProperties,
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