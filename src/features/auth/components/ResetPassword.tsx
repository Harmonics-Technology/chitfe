'use client';

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
import InputPassword from '@components/input-password';
import useResetPassword from '@features/auth/hooks/useResetPassword';

export default function ResetPassword() {
    const { form, onPasswordReset } = useResetPassword();

    const {
        control,
        handleSubmit,
        watch,
        formState: { isSubmitting },
    } = form;

    // Ensure consistent field names
    const newPassword = watch('newPassword');
    const confirmPassword = watch('confirmPassword');
    const otp = watch('otp');

    // Button activation logic
    const isFormComplete =
        newPassword?.trim() !== '' &&
        confirmPassword?.trim() !== '' &&
        otp?.trim() !== '';

    return (
        <div className='w-full space-y-8 p-5 font-[poppins] sm:space-y-14 sm:px-16'>
            <div
                aria-label='Reset password page title and description block'
                className='space-y-3'
            >
                <h1 className='text-xl font-bold leading-26 sm:text-2xl sm:font-semibold sm:text-chit-woodsmoke'>
                    Reset Password
                </h1>
                <p className='text-sm font-normal sm:text-base'>
                    Enter your new password to reset your account
                </p>
            </div>

            <div className='w-full' aria-label='Reset password form container'>
                <Form {...form}>
                    <form
                        onSubmit={handleSubmit(onPasswordReset)}
                        className='mt-6 w-full'
                        aria-label='Reset password form'
                    >
                        <div className='space-y-4'>
                            {/* New Password */}
                            <FormField
                                control={control}
                                name='newPassword'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <InputPassword
                                                placeholder='Create password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <p className='text-xs text-gray-500'>
                                            Password must contain at least six
                                            letters, 1 number, and a character
                                        </p>
                                        <FormMessage className='text-xs sm:text-sm' />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm Password */}
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
                                        <FormMessage className='text-xs sm:text-sm' />
                                    </FormItem>
                                )}
                            />

                            {/* OTP */}
                            <FormField
                                control={control}
                                name='otp'
                                render={({ field }) => (
                                    <FormItem className='w-full space-y-1'>
                                        <FormLabel>OTP Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='Enter OTP code'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='text-xs sm:text-sm' />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='flex flex-col items-center space-y-4 pt-16'>
                            <AppButton
                                type='submit'
                                className='w-full font-[poppins] sm:text-lg'
                                isLoading={isSubmitting}
                                isDisabled={!isFormComplete || isSubmitting}
                                aria-label='Submit reset password form'
                            >
                                Reset Password
                            </AppButton>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
