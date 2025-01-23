'use client';

// import { useState } from 'react';

import AppButton from '@components/app-button';
import {
    Form,
    FormControl,
    FormLabel,
    FormField,
    FormItem,
    FormMessage,
    FormDescription,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import InputPassword from '@components/input-password';

import useAuth, {
    type SignUpEmailSchemaType,
} from '@features/auth/hooks/useAuth';

export default function SignUpWithEmail() {
    const { signUpForm } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = signUpForm;

    async function onSubmit(values: SignUpEmailSchemaType) {
        console.log(values);
    }

    return (
        <div className='space-y-8 pt-9 md:p-16'>
            <div
                aria-label='Input fields to confirm details and setup password'
                className='space-y-3'
            >
                <h1 className='text-xl font-bold leading-[26.4px]'>
                    Hi! Welcome to CHIT
                </h1>
                <p className='text-sm font-normal leading-[20.72px]'>
                    Please fill out the form to create an account and get
                    started.
                </p>
            </div>

            <div className='w-full'>
                <Form {...signUpForm}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='mt-6 w-full'
                    >
                        <div className='space-y-4'>
                            <FormField
                                control={control}
                                name='surname'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>Surname</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='enter surname'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name='firstName'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='enter first name'
                                                {...field}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name='phoneNumber'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>Phone Number </FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='enter phone number'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='enter email'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
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
                                        <FormDescription className='text-xs text-chit-ship-gray'>
                                            Password must contain at least six
                                            letters, 1 number, and a character
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name='confirmPassword'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <InputPassword
                                                placeholder='Confirm password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name='referral'
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
                        </div>

                        <div className='flex flex-col-reverse pt-16 sm:flex-row sm:justify-end sm:space-x-2'>
                            <AppButton
                                type='submit'
                                className='w-full'
                                isLoading={isSubmitting}
                                isDisabled={isSubmitting}
                            >
                                Create an account
                            </AppButton>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
