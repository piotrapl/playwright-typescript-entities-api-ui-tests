import { RegonPage } from '../pages/regon.page';
import { RegonAssertions } from '../assertions/regon.assert';
import { test } from '@playwright/test';

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

        // To jest blok kodu, który wykonuje krok testowy, w którym wyszukujemy REGON i pobieramy odpowiedź z backendu.
        // nie jest to metoda testowa, ale jest to część większego reużywalnego procesu testowego
        await test.step(`Wyszukaj REGON i pobierz odpowiedź z backendu`, async () => {
            apiResponse = await this.regonPage.searchRegon(regon);
        });

        let uiMessage;

        await test.step('Pobierz wiadomość z UI', async () => {
            uiMessage = await this.regonPage.captureMessage();
        });
        //znak wykrzyknika "!" po nazwie zmiennej - operator non-null assertion w TypeScript, 
        // który mówi kompilatorowi, że zmienna nie jest null ani undefined w tym miejscu kodu. 
        // Oznacza to, że programista jest pewien, że te zmienne mają wartość 
        // i nie będą powodować błędu podczas wykonywania asercji

        // return - ten blok kodu tworzy nową instancję klasy RegonAssertions,
        return new RegonAssertions(uiMessage!, apiResponse!);

        }

}

