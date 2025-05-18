'use client';
import React, { useEffect, useState, Fragment } from 'react';
import * as Yup from 'yup';
import { useFormikContext } from 'formik';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon } from 'lucide-react';
import AppForm from "@/component/forms/AppForm";
import SubmitButton from "@/component/forms/SubmitButton";
import AppInput from "@/component/forms/AppInput";
import {LuChevronsUpDown} from "react-icons/lu";

const categories = ['Roads', 'Electricity', 'Water', 'Healthcare'];
const institutions = ['City Council', 'Energy Department', 'Water Department', 'Health Ministry'];

const existingComplaints = [
    { id: 1, title: 'No street lights on Main St', category: 'Electricity' },
    { id: 2, title: 'Potholes near Riverside', category: 'Roads' },
];

interface ComboboxFieldProps {
    label: string;
    items: string[];
    name: string;
}

const ComboboxField: React.FC<ComboboxFieldProps> = ({ label, items, name }) => {
    const { values, setFieldValue } = useFormikContext<any>();
    const [query, setQuery] = useState('');

    const filtered =
        query === ''
            ? items
            : items.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );

    return (
        <div className="w-full group">
            <label className="text-sm font-normal">{label}</label>
            <div className="relative mt-1">
                <Combobox
                    value={values[name]}
                    onChange={(val) => setFieldValue(name, val)}
                >
                    <div className="relative">
                        <div className="flex items-center">
                            <Combobox.Input
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                displayValue={(val: string) => val}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={`Select ${label.toLowerCase()}...`}
                            />
                            <Combobox.Button className="absolute right-2">
                                <LuChevronsUpDown className="h-5 w-5 text-gray-400" />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <Combobox.Options static>
                                {filtered.length === 0 ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        No results found.
                                    </div>
                                ) : (
                                    filtered.map((item) => (
                                        <Combobox.Option
                                            key={item}
                                            value={item}
                                            className={({ active }: { active: boolean }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                                }`
                                            }
                                        >
                                            {({ selected, active }) => (
                                                <>
                          <span
                              className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {item}
                          </span>
                                                    {selected && (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                active ? 'text-blue-600' : 'text-blue-600'
                                                            }`}
                                                        >
                              <CheckIcon className="h-5 w-5" />
                            </span>
                                                    )}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
        </div>
    );
};

const ComplaintForm = () => {
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

    const handleSubmit = (values: typeof initialValues) => {
        const id = 'CMP-' + Math.floor(Math.random() * 100000);
        setTrackingId(id);
        setSubmitted(true);
    };

    const handleTitleFilter = (title: string) => {
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
            <div className="bg-green-100 p-6 rounded-xl mt-6">
                <h2 className="text-xl font-bold text-green-800">✅ Submission Successful!</h2>
                <p className="mt-2">
                    Tracking ID: <span className="font-mono text-blue-700">{trackingId}</span>
                </p>
                <p className="mt-4">You can use this ID to check status later.</p>
            </div>
        );
    }

    return (
        <section className="w-full mt-12">
            <h1 className="text-2xl font-bold mb-6 text-slate-600">
                Send <span className="text-blue-500">Feedback</span> or Submit a{' '}
                <span className="text-red-400">Complaint</span>
            </h1>

            <div className="w-full border-2 bg-slate-100 border-white/80 shadow-xl p-8 rounded-3xl flex flex-col items-start gap-4">
                <div className="flex mb-6 border border-slate-300 p-[1px] rounded-full">
                    {(['feedback', 'complaint'] as const).map((opt) => (
                        <button
                            key={opt}
                            className={`px-6 py-3 rounded-full text-sm font-semibold ${
                                type === opt ? (opt === 'feedback' ? 'bg-blue-500 text-white' : 'bg-red-400 text-white') : ''
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
                        {({ values }: { values: typeof initialValues }) => {
                            useEffect(() => handleTitleFilter(values.title), [values.title]);

                            return (
                                <div className="flex flex-col w-full gap-4">
                                    <AppInput name="title" label="Title" className={'col-span-2'}/>
                                    <AppInput name="message" label="Details" type="textarea" className="col-span- h-28" />
                                    <div className={'grid grid-cols-2 gap-4'}>
                                    <ComboboxField label="Category" items={categories} name="category" />
                                    <ComboboxField label="Institution" items={institutions} name="institution" />
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
                                        <SubmitButton title={`Submit ${type}`} className={'!rounded-full'}/>
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