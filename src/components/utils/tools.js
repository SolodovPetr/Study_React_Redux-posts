import { toast } from 'react-toastify';

/**
 * Wrapper for toast
 *
 * @param type string
 * @param message string
 * @param position string
 * @returns {React.ReactText}
 */
export const showToast = (type = 'success', message = 'Success!', position = 'BOTTOM_RIGHT' ) => {

    switch ( type ) {
        case 'success':
            return toast.success( message, {
                position: toast.POSITION[position]
            });

        case 'warning':
            return toast.warn( message, {
                position: toast.POSITION[position]
            });

        case 'error':
            return toast.error( message, {
                position: toast.POSITION[position]
            });

        case 'info':
            return toast.error( message, {
                position: toast.POSITION[position]
            });

        default:
            toast("Custom Style Notification with css class!", {
                position: toast.POSITION[position],
                className: 'foo-bar'
            });
    }
}