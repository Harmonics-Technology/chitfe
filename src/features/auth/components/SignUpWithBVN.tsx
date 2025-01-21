import React from 'react';
// import Link from 'next/link';

// import {
//     Form,
//     FormControl,
//     // FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from '@components/ui/form';
// import { Input } from '@components/ui/input';

export default function SignUpWithBVN() {
    return (
        <div className='w-full space-y-6 md:p-16'>
            <div
                aria-label='Sign up form for new users using BVN'
                className='space-y-1.5 md:max-w-sm'
            >
                <h1 className='text-2xl font-bold leading-normal'>
                    Hi! Welcome to CHIT
                </h1>
                <p className='text-sm font-normal'>
                    Please input your BVN for verification to get started.
                </p>
            </div>

            {/* <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='w-full space-y-3'
                >
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        placeholder='email address'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        placeholder='enter password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='mt-4 flex w-full items-center justify-between gap-1'>
                        <FormField
                            control={form.control}
                            name='remember'
                            render={({ field }) => (
                                <FormItem className='flex items-center space-x-3 space-y-0'>
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className='leading-none'>
                                        <FormLabel>Remember me</FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Link
                            href='/forgot-password'
                            className='text-base font-medium'
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* <div className='mt-8 flex items-center gap-4'>
                      <AppButton
                          type='submit'
                          isLoading={isSubmitting}
                          isDisabled={!isValid || isSubmitting}
                      >
                          Login
                      </AppButton>
                  </div> */}

            {/* <div className='mt-4 flex w-full items-center justify-center gap-1'>
                        <p className='text-brand-dune font-light'>
                            Don't have an account?{' '}
                            <Link href='/register' className='font-bold'>
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </Form>  */}
        </div>
    );
}
