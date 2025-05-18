import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useResetPassword = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = useCallback(async (values: { newPassword: string; confirmPassword: string }) => {
        const token = searchParams.get('token');

        if (!token) {
            toast.error('Invalid or missing reset token.');
            return;
        }

        try {
            const payload = {
                password: values.newPassword,
                token,
            };

            await axios.post('/api/reset-password', payload);

            toast.success('Password reset successful. Please sign in.');
            router.push('/auth/signin');

        } catch (error: any) {
            const message = error?.response?.data?.message || 'Something went wrong. Try again.';
            toast.error(message);
        }
    }, [router, searchParams]);

    return { handleSubmit };
};