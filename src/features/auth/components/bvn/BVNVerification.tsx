'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import AppButton from '@components/app-button';
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';

import VerifyOTP from './VerifyOTP';
import BackButton from './BackButton';

import { cn } from '@lib/utils';
import { useBvnMethodSelect } from '@features/auth/hooks';

export default function BVNVerification() {
    const [hasCode, setHasCode] = useState<boolean>(false);
    const router = useRouter();

    const {
        form,
        submit,
        isSubmitting,
        selectedMethod,
        setSelectedMethod,
        showAlternativePhoneInput,
        methods,
    } = useBvnMethodSelect();

    // const toggleOtpInput = () => {
    //     setHasCode(!hasCode);
    // };

    const goBack = (hasOtp: boolean) => {
        if (hasOtp) return setHasCode(false);

        return router.push('/signup');
    };

    return (
        <div className='w-full space-y-8 p-5 sm:space-y-14 sm:px-16'>
            <BackButton onGoBack={() => goBack(hasCode)} />

            {hasCode ? (
                <VerifyOTP />
            ) : (
                <>
                    <div
                        aria-label='Sign up form for new users using BVN'
                        className='space-y-3'
                    >
                        <h1 className='text-xl font-bold leading-26 sm:text-2xl sm:font-semibold sm:text-chit-woodsmoke'>
                            Verify your BVN
                        </h1>
                        <p className='text-sm font-normal leading-[20.72px] sm:text-base'>
                            Please select how you want to receive otp for bvn
                            verification
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={submit} className='w-full space-y-8'>
                            <RadioGroup>
                                {methods.map((method) => (
                                    <VerificationItem
                                        key={method.method}
                                        id={method.method || ''}
                                        label={
                                            method.method
                                                ?.replace('_', ' ')
                                                .toUpperCase() || ''
                                        }
                                        description={method.hint || ''}
                                        isChecked={
                                            method.method === selectedMethod
                                        }
                                        selected={selectedMethod}
                                        onChange={setSelectedMethod}
                                    />
                                ))}
                            </RadioGroup>

                            {showAlternativePhoneInput && (
                                <FormField
                                    control={form.control}
                                    name='alternativePhoneNumber'
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>
                                                Alternative Phone Number
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter alternative phone number'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            <div className='pt-14 sm:pt-16'>
                                <AppButton
                                    type='submit'
                                    className='font-semibold text-chit-white-smoke sm:text-lg'
                                    isLoading={isSubmitting}
                                    isDisabled={!selectedMethod || isSubmitting}
                                >
                                    Send OTP
                                </AppButton>
                            </div>
                        </form>
                    </Form>
                </>
            )}
        </div>
    );
}

type OptionsProps = {
    id: string;
    label: string;
    description: string;
    selected: string;
    isChecked: boolean;
    onChange: (value: string) => void;
};

function VerificationItem({
    id,
    label,
    description,
    selected,
    isChecked,
    onChange,
}: OptionsProps) {
    return (
        <div
            key={id}
            className='mb-3 flex items-start gap-4 focus-within:rounded-xl focus-within:ring-1 focus-within:ring-gray-100 hover:shadow-none sm:items-center'
            onClick={() => onChange(id)}
        >
            <RadioGroupItem
                id={id}
                value={selected}
                checked={isChecked}
                onChange={() => onChange(id)}
                className={cn(
                    'mt-1 size-6 border-chit-gainsboro checked:border-chit-primary',
                    isChecked && 'border-chit-primary'
                )}
            />
            <label
                htmlFor={id}
                className='flex-1 cursor-pointer space-y-2 sm:rounded-xl sm:bg-chit-milk-white sm:p-2.5'
            >
                <h2 className='text-base font-semibold leading-[21.12px] text-chit-woodsmoke sm:text-lg sm:font-medium'>
                    {label}
                </h2>
                <p className='text-xs leading-[14.64px] text-chit-ship-gray'>
                    {description}
                </p>
            </label>
        </div>
    );
}
