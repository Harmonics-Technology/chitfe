'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IdentityService, UserModel, UserView } from '@lib/services';
import { useToast } from '@hooks/use-toast';

const passwordSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    otherNames: yup.string().notRequired(),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .matches(
            /^(\+234|0)[789]\d{9}$/,
            'Please enter a valid Nigerian phone number'
        ),
    dateOfBirth: yup.string().required('Date of birth is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
        ),
    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    referralId: yup.string().notRequired(),
    bvn: yup.string().notRequired(),
});

export type CompleteBvnRegistrationSchemaType = yup.InferType<
    typeof passwordSchema
>;

export function useCompleteBvnRegistration() {
    const router = useRouter();
    const { toast } = useToast();

    const [user, setUser] = useState<UserModel | undefined>(undefined);
    const [gotoSetPassword, setGotoSetPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [match, setMatch] = useState<boolean>(false);

    const form = useForm<CompleteBvnRegistrationSchemaType>({
        resolver: yupResolver(passwordSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            firstName: '',
            lastName: '',
            otherNames: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: '',
            referralId: '',
            bvn: '',
        },
    });

    const {
        handleSubmit,
        getValues,
        reset,
        formState: { errors, isValid, isSubmitting, isValidating },
    } = form;

    // Load user details from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem('BVN_REGISTRATION_USER_DETAILS');
        if (savedUser) {
            try {
                const userView: UserView = JSON.parse(savedUser);

                // Map UserView to UserModel
                const userModel: UserModel = {
                    firstName: userView.firstName || '',
                    lastName: userView.lastName || '',
                    email: userView.email || '',
                    phoneNumber: userView.phoneNumber || '',
                    dateOfBirth: userView.dateOfBirth || '',
                    otherNames: '',
                    password: '',
                    referralId: '',
                    bvn: '',
                    transactionPin: 0,
                    securityQuestion: '',
                    securityAnswer: '',
                };

                setUser(userModel);
                reset({
                    firstName: userModel.firstName || '',
                    lastName: userModel.lastName || '',
                    otherNames: userModel.otherNames || '',
                    email: userModel.email || '',
                    phoneNumber: userModel.phoneNumber || '',
                    dateOfBirth: userModel.dateOfBirth || '',
                    password: userModel.password || '',
                    confirmPassword: '',
                    referralId: userModel.referralId || '',
                    bvn: userModel.bvn || '',
                });
            } catch (error) {
                console.error('Error parsing user details:', error);
            }
        }
    }, [reset]);

    // Validate confirm password
    useEffect(() => {
        validateConfirmPassword(confirmPassword);
    }, [confirmPassword, isValidating]);

    const validateConfirmPassword = (value: string) => {
        const passwordValue = getValues('password');
        setMatch(value === passwordValue);
        return value === passwordValue;
    };

    const onSubmit = async (data: CompleteBvnRegistrationSchemaType) => {
        try {
            const requestBody: UserModel = {
                firstName: data.firstName,
                lastName: data.lastName,
                otherNames: data.otherNames,
                email: data.email,
                phoneNumber: data.phoneNumber,
                dateOfBirth: data.dateOfBirth,
                password: data.password,
                referralId: data.referralId,
                bvn: data.bvn,
                transactionPin: 0,
                securityQuestion: '',
                securityAnswer: '',
            };

            const response = await IdentityService.completeBvnRegistration({
                requestBody,
                isMobile: false,
            });

            if (!response.status) {
                toast({
                    title: 'Something went wrong while completing registration',
                    description: response.message as string,
                    variant: 'destructive',
                });
                return;
            }

            // Clear stored data
            localStorage.removeItem('BVN_REGISTRATION_USER_DETAILS');
            localStorage.removeItem('BVN_VERIFICATION_KEY');

            // Navigate to success page
            router.push('/account-created');
        } catch (error: unknown) {
            const errorBody = (error as { body?: { message?: string } })?.body;
            toast({
                title: 'Something went wrong while completing registration',
                description:
                    errorBody?.message || 'Failed to complete registration',
                variant: 'destructive',
            });
        }
    };

    return {
        form,
        onSubmit: handleSubmit(onSubmit),
        errors,
        isValid,
        isSubmitting,
        gotoSetPassword,
        setGotoSetPassword,
        validateConfirmPassword,
        match,
        setConfirmPassword,
        user,
    };
}
