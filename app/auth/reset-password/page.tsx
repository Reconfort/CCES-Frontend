'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Form, FormikValues } from 'formik';
import * as Yup from 'yup';
import AppForm from '@/components/forms/AppForm';
import SubmitButton from '@/components/forms/SubmitButton';
import AppInput from '@/components/forms/AppInput';
import { useResetPassword } from '@/hooks/useResetPassword';
import Link from "next/link";

// Validation schema
const validationSchema = Yup.object({
    newPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required('Confirm Password is required'),
});

function ResetPasswordFormInner() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const { handleSubmit } = useResetPassword(token);

    const initialValues = {
        newPassword: '',
        confirmPassword: '',
    };

    const onSubmit = async (values: FormikValues) => {
        await handleSubmit({
            newPassword: values.newPassword as string,
            confirmPassword: values.confirmPassword as string,
        });
    };

    return (
        <AppForm initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="w-full flex flex-col justify-start items-start gap-4">
                <div>
                    <h2 className="text-2xl font-semibold">Reset Password</h2>
                    <p className="font-light text-sm mt-4">
                        Please enter a new password and confirm it to continue.
                    </p>
                </div>

                <div className="w-full mt-6">
                    <AppInput label="New Password" name="newPassword" type="password" />
                </div>

                <div className="w-full">
                    <AppInput label="Confirm Password" name="confirmPassword" type="password" />
                </div>

                <div className={'flex items-center justify-between w-full text-sm'}>
                    <SubmitButton title="Reset Password" loadingText="Resetting..." />
                    <Link href={'/auth/signin'} className={'text-black cursor-pointer'}>Back to Sign in</Link>
                </div>
            </Form>
        </AppForm>
    );
}

export default function ResetPasswordForm() {
    return (
        <Suspense fallback={<div className={'w-screen h-screen flex justify-center items-center'}>
            <span className={'loader'}></span>
        </div>}>
            <ResetPasswordFormInner />
        </Suspense>
    );
}
