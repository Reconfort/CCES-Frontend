'use client';
import React, {useEffect, useState, Fragment, JSX} from 'react';
import * as Yup from 'yup';
import {FormikHelpers, FormikValues, useFormikContext} from 'formik';
import AppForm from '@/components/forms/AppForm';
import AppInput from '@/components/forms/AppInput';
import SubmitButton from '@/components/forms/SubmitButton';
import ComboboxField from '@/components/forms/ComboBoxField';
import {FiCopy} from "react-icons/fi";
import {PiShieldWarningThin} from "react-icons/pi";

const categories = ['Roads', 'Electricity', 'Water', 'Healthcare'];
const institutions = ['City Council', 'Energy Department', 'Water Department', 'Health Ministry'];

const existingComplaints = [
    {id: 1, title: 'No street lights on Main St', category: 'Electricity'},
    {id: 2, title: 'Potholes near Riverside', category: 'Roads'},
];

const ComplaintForm = (): JSX.Element => {
    const [type, setType] = useState<'complaint' | 'feedback' | ''>('');
    const [submitted, setSubmitted] = useState(false);
    const [trackingId, setTrackingId] = useState('');
    const [relatedIssues, setRelatedIssues] = useState<typeof existingComplaints>([]);

    const initialValues = {
        title: '',
        message: '',
        category: '',
        institution: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(4, 'Too short').required('Title is required'),
        message: Yup.string().min(10, 'Too short').required('Message is required'),
        category: Yup.string().required('Category is required'),
        institution: Yup.string().required('Institution is required'),
    });

    const handleSubmit = (values: FormikValues, helpers: FormikHelpers<FormikValues>) => {
        const id = 'CMP-' + Math.floor(Math.random() * 100000);
        setTrackingId(id);
        setSubmitted(true);
        helpers.setSubmitting(false);
    };

    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(trackingId);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    const filterRelated = (title: string) => {
        if (title.length > 3 && type === 'complaint') {
            const matches = existingComplaints.filter((c) =>
                c.title.toLowerCase().includes(title.toLowerCase())
            );
            setRelatedIssues(matches);
        } else {
            setRelatedIssues([]);
        }
    };

    if (submitted) {
        return (
            <div className="bg-black text-white p-6 lg:p-12 rounded-3xl mt-24 w-full">
                <h2 className="text-xl font-bold text-blue-500">✅ Submission Successful!</h2>

                <div className={'flex items-center gap-4 mt-12'}>
                    <p className="font-medium">
                        Tracking ID: <span className="font-semibold text-blue-500">{trackingId}</span>
                    </p>
                    <button
                        onClick={handleCopy}
                        className="bg-white/10 p-4 rounded-xl cursor-pointer duration-75 hover:scale-110 active:scale-95 active:rounded-full flex items-center gap-2"
                    >
                        <FiCopy />
                        {copied && <span className="text-sm">Copied!</span>}
                    </button>
                </div>
                <div className={'border border-white p-4 lg:p-8 mt-4 rounded-xl flex items-center gap-4'}>
                    <PiShieldWarningThin size={32}/>
                    <p className="font-medium">You can use this ID to check status later.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="w-full mt-12">
            <h1 className="text-2xl font-bold mb-6 text-slate-600">
                Send <span className="text-blue-500">Feedback</span> or Submit a{' '}
                <span className="text-red-400">Complaint</span>
            </h1>
            <div
                className={`w-full border-2 bg-slate-100 border-white/80 p-4 md:p-8 rounded-[32px] md:rounded-[46px] flex flex-col justify-start items-start gap-4 shadow-xl ${type === 'complaint' ? 'shadow-red-200' : 'shadow-blue-200' }`}>
                <div className="flex mb-6 border border-slate-300 p-[1px] rounded-full">
                    {(['feedback', 'complaint'] as const).map((opt) => (
                        <button
                            key={opt}
                            className={`px-6 py-2 md:py-3 rounded-full text-sm font-semibold ${
                                type === opt
                                    ? opt === 'feedback'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-red-400 text-white'
                                    : ''
                            }`}
                            onClick={() => setType(opt)}
                        >
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </button>
                    ))}
                </div>

                {type && (
                    <AppForm
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps: FormikValues & { isSubmitting: boolean }) => {
                            const {values, isSubmitting} = formikProps;
                            useEffect(() => filterRelated(values.title), [values.title]);

                            return (
                                <div className="w-full flex flex-col justify-start items-start gap-4">
                                    <AppInput name="title" label="Title"/>
                                    <AppInput
                                        name="message"
                                        label="Details"
                                        type="textarea"
                                        className="col-span-2 h-28"
                                    />
                                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 w-full'}>
                                        <ComboboxField label="Category" items={categories} name="category"/>
                                        <ComboboxField label="Institution" items={institutions} name="institution"/>
                                    </div>

                                    {type === 'complaint' && relatedIssues.length > 0 && (
                                        <div className="col-span-2 bg-yellow-100 p-4 rounded mt-4">
                                            <p className="font-semibold">⚠️ Similar complaints found:</p>
                                            <ul className="list-disc pl-5 mt-2 text-sm">
                                                {relatedIssues.map((issue) => (
                                                    <li key={issue.id}>{issue.title} ({issue.category})</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="col-span-2">
                                        <SubmitButton title={`Submit ${type}`} className={'!rounded-full !font-medium'}/>
                                    </div>
                                </div>
                            );
                        }}
                    </AppForm>
                )}
            </div>
        </section>
    );
};

export default ComplaintForm;
