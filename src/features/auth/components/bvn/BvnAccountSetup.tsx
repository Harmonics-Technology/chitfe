'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import AppButton from '@components/app-button';
import { Button } from '@components/ui/button';
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import InputPassword from '@components/input-password';
import BackButton from './BackButton';

import { useCompleteBvnRegistration } from '@features/auth/hooks';

const steps = [
    {
        id: 'confirm-details',
        description:
            'Please confirm your details and proceed to create a password',
    },
    {
        id: 'set-password',
        description:
            'Please set a password to create an account and get started.',
    },
];

export default function BvnAccountSetup() {
    const [step, setStep] = useState<number>(0);
    const router = useRouter();

    const { form, onSubmit, isSubmitting } = useCompleteBvnRegistration();

    const goForward = (): void => {
        if (step <= 1) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const goBack = (): void => {
        if (step === 0) return router.replace('/signup/bvn/verify-otp');
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className='space-y-8 p-5 sm:space-y-16 sm:px-16'>
            <BackButton onGoBack={goBack} />

            <div
                aria-label='Input fields to confirm details and setup password'
                className='space-y-3'
            >
                <h1 className='text-xl font-bold leading-26'>
                    You're almost there
                </h1>
                <p className='text-sm font-normal leading-[20.72px]'>
                    {steps[step].description}
                </p>
            </div>

            <div className='w-full'>
                <Form {...form}>
                    <form onSubmit={onSubmit} className='mt-6 w-full space-y-4'>
                        {step === 0 && (
                            <div className='space-y-4'>
                                <FormField
                                    control={form.control}
                                    name='lastName'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>Surname</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter surname'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='firstName'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter first name'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='otherNames'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>Other Names</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter other name'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='phoneNumber'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter phone number'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter email'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='dateOfBirth'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>Date of Birth</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='date'
                                                    placeholder='Enter date of birth'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        )}

                        {step === 1 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <InputPassword
                                                    placeholder='Create password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='text-xs sm:text-sm' />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='confirmPassword'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>
                                                Confirm Password
                                            </FormLabel>
                                            <FormControl>
                                                <InputPassword
                                                    placeholder='Confirm password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='text-xs sm:text-sm' />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='referralId'
                                    render={({ field }) => (
                                        <FormItem className='w-full space-y-1'>
                                            <FormLabel>
                                                Referral ID (optional)
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder='Enter referral ID'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        <div className='flex flex-col-reverse pt-16 sm:flex-row sm:justify-end sm:space-x-2'>
                            {step === 1 ? (
                                <AppButton
                                    type='submit'
                                    className='w-full sm:text-lg'
                                    isLoading={isSubmitting}
                                    isDisabled={isSubmitting}
                                >
                                    Create an account
                                </AppButton>
                            ) : (
                                <Button
                                    type='button'
                                    className='w-full sm:text-lg'
                                    onClick={goForward}
                                >
                                    Set Password
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
