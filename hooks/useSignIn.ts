import { FormikHelpers } from 'formik';

export const useSignIn = () => {
    const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return { handleSubmit };
};