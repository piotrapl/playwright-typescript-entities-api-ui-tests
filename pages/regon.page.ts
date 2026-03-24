import { Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { ApiResponse } from '../types/api.types';

export class RegonPage {

    constructor(public page: Page) { }

}
