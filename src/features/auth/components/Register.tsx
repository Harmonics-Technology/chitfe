'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import SignUpWithBVN from './bvn/SignUpWithBVN';

export default function Register() {
    return (
        <section className='w-full rounded-3xl bg-chit-milk-white p-5'>
            <Tabs defaultValue='bvn' className='w-full'>
                <TabsList className='h-fit w-full items-start justify-between rounded-none border-b border-[#E0E0E0] bg-transparent p-0'>
                    <TabsTrigger
                        value='bvn'
                        className='rounded-none border-b-2 border-transparent px-1 py-3 font-medium text-gray-500 data-[state=active]:border-chit-primary data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-chit-primary data-[state=active]:shadow-none'
                    >
                        Sign Up with BVN
                    </TabsTrigger>
                    <TabsTrigger
                        value='email'
                        className='rounded-none border-b-2 border-transparent px-1 py-3 font-medium text-gray-500 data-[state=active]:border-chit-primary data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-chit-primary data-[state=active]:shadow-none'
                    >
                        Sign Up with Email
                    </TabsTrigger>
                </TabsList>

                <TabsContent value='bvn'>
                    <SignUpWithBVN />
                </TabsContent>
                <TabsContent value='email'>
                    Change your password here.
                </TabsContent>
            </Tabs>
        </section>
    );
}
