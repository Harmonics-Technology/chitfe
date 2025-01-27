import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { signUpWithEmail } from '../schema';

export type SignUpEmailSchemaType = yup.InferType<typeof signUpWithEmail>;

export default function useLogin() {
    // schema
    const form = useForm<SignUpEmailSchemaType>({
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

    // request

    return { form };
}
