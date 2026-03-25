import { expect } from '@playwright/test';
import { ApiResponse} from '../types/api.types';

export class RegonAssertions {
    static assertStatusCode(response: ApiResponse, expectedStatus: number) {
        expect(response.status).toBe(expectedStatus);