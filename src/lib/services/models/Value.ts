/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contact } from './Contact';
import type { Message } from './Message';
import type { MessageStatus } from './MessageStatus';
import type { Metadata } from './Metadata';
export type Value = {
    messaging_product?: string | null;
    metadata?: Metadata;
    contacts?: Array<Contact> | null;
    messages?: Array<Message> | null;
    statuses?: Array<MessageStatus> | null;
};

