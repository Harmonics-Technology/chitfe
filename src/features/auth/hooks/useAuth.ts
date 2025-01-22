import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { OTPSchema, signUpWithBVN, signUpWithEmail } from '../schema';

export type OtpSchemaType = yup.InferType<typeof OTPSchema>;
export type SignUpBVNSchemaType = yup.InferType<typeof signUpWithBVN>;
export type SignUpEmailSchemaType = yup.InferType<typeof signUpWithEmail>;

export default function useAuth() {
    const OTPForm = useForm<OtpSchemaType>({
        mode: 'onChange',
        resolver: yupResolver<OtpSchemaType>(OTPSchema),
        defaultValues: {
            otp: '',
        },
    });

    const signUpForm = useForm<SignUpEmailSchemaType>({
        resolver: yupResolver<SignUpEmailSchemaType>(signUpWithEmail),
        defaultValues: {
            surname: '',
            firstName: '',
            otherName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    return {
        OTPForm,
        signUpForm,
    };
}
