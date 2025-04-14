import React, { ReactNode } from 'react';

interface IChitContainerType {
    children: ReactNode;
}

export const ChitContainer = ({ children }: IChitContainerType) => {
    return <div className='mx-auto w-11/12 max-w-screen-xl'>{children}</div>;
};
