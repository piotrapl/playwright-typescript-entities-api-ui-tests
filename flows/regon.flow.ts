import { RegonPage } from '../pages/regon.page';
import { RegonAssertions } from '../assertions/regon.assert';
import test from '@playwright/test';

export class RegonFlow {

    constructor ( private regonPage: RegonPage) {}

    async searchRegonAndVerify(regon: string) {

        await test.step('Otwórz stronę wyszukiwania po REGON-ie', async () => {
           await this.regonPage.open();
        });
        // 'let ApiResponse' to jest zmienna, która będzie przechowywać odpowiedź z API po wysłaniu zapytania o REGON.
        // "let" to jest słowo kluczowe w JavaScript do deklaracji zmiennej, 
        //      która może być przypisana do różnych wartości w trakcie działania programu.
        let apiResponse;

        await test.step(`Wyszukaj REGON i pobierz odpowiedź z backendu`, async () => {
            apiResponse = await this.regonPage.searchRegon(regon);
        });
