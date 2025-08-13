'use client';

// import Link from 'next/link';

import AppButton from '@components/app-button';
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';

import { useLogin } from '@features/auth/hooks';

export default function ForgotPassword() {
    const { form, onLogin } = useLogin();

    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitting },
    } = form;

    return (
        <div className='flex w-full flex-col items-center justify-center space-y-8 p-5 sm:space-y-14 sm:px-16'>
            <div
                aria-label='Forgot password page title and description block'
                className='space-y-3'
            >
                <h1 className='text-center font-[poppins] text-xl font-bold leading-26 sm:text-2xl sm:font-semibold sm:text-chit-woodsmoke'>
                    Forgot Password?
                </h1>
                <p className='font-[poppins] text-sm font-normal sm:text-base'>
                    Don't worry, we’ll send you a link to reset it.
                </p>
            </div>

            <div className='w-full' aria-label='Forgot password form container'>
                <Form {...form}>
                    <form
                        onSubmit={handleSubmit(onLogin)}
                        className='mt-6 w-full'
                        aria-label='Forgot password form'
                    >
                        <div className='space-y-4'>
                            <FormField
                                control={control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1 font-[poppins]'>
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='Enter email'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='text-xs sm:text-sm' />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='flex flex-col items-center space-y-4 pt-16'>
                            <AppButton
                                type='submit'
                                className='w-full font-[poppins] sm:text-lg'
                                isLoading={isSubmitting}
                                isDisabled={!isValid || isSubmitting}
                                aria-label='Submit forgot password form'
                            >
                                Send
                            </AppButton>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
