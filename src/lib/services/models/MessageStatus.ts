/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conversation } from './Conversation';
import type { Pricing } from './Pricing';
export type MessageStatus = {
    id?: string | null;
    status?: string | null;
    timestamp?: string | null;
    recipient_id?: string | null;
    conversation?: Conversation;
    pricing?: Pricing;
};
