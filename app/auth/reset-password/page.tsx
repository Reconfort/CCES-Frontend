'use client'
import React from 'react';
import {Form, FormikValues} from 'formik';
import * as Yup from 'yup';
import AppForm from "@/component/forms/AppForm";
import SubmitButton from "@/component/forms/SubmitButton";
import AppInput from "@/component/forms/AppInput";
import { useResetPassword } from "@/hooks/useResetPassword";

// Validation Schema
const validationSchema = Yup.object({
    newPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('New Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required('Confirm Password is required'),
});

const Page = () => {
    const initialValues = {
        newPassword: '',
        confirmPassword: '',
    };

    const { handleSubmit } = useResetPassword();
    const onSubmit = async (values: FormikValues) => {
        await handleSubmit({
            newPassword: values.newPassword as string,
            confirmPassword: values.confirmPassword as string
        });
    };

    return (
        <AppForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
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

                <div className="flex items-center justify-between w-full text-sm">
                    <SubmitButton title="Reset Password" loadingText="Resetting..." />
                </div>
            </Form>
        </AppForm>
    );
};

export default Page;