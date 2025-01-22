import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { OTPSchema } from '../schema';

export type OtpSchemaType = yup.InferType<typeof OTPSchema>;

export default function useAuth() {
    const OTPForm = useForm<OtpSchemaType>({
        mode: 'onChange',
        resolver: yupResolver<OtpSchemaType>(OTPSchema),
        defaultValues: {
            otp: '',
        },
    });

    return {
        OTPForm,
    };
}
