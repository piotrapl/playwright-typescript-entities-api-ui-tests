import { RegonPage } from '../pages/regon.page';
import { RegonAssertions } from '../assertions/regon.assert';
import test from '@playwright/test';

export class RegonFlow {



    await test.step('Otwórz stronę wyszukiwania po n-rze Regon', async () => {
        await this.regonPage.open();
    });