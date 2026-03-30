// open() - metoda, która otwiera stronę internetową, której URL jest: ENV.baseUrl. 
//      Metoda ta wykorzystuje funkcję goto() z biblioteki Playwright.
// searchRegon() - metoda, która przyjmuje numer REGON jako argument i zwraca obiekt ApiResponse.

// Promise<ApiResponse> - oznacza, że metoda searchRegon() zwraca obietnicę (Promise), 
//      która po rozwiązaniu (resolve) zwróci obiekt typu ApiResponse.
// "response =>"- funkcja strzałkowa (arrow function), 
//      używana jako argument dla metody waitForResponse()
// response.request().method() === 'POST' - sprawdza, czy metodą żądania HTTP jest POST.
// response.json() - metoda parsująca odpowiedź jako JSON i zwracająca wynik.

// messageLocator - zmienna przechowująca lokalizator elementu na stronie
import { Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { ApiResponse } from '../types/api.types';

export class RegonPage {

    constructor(public page: Page) { }

    async open () {
        await this.page.goto(ENV.baseURL);
    }

    async searchRegon(regon: string): Promise<ApiResponse> {
    
        await this.page.locator('#txtRegon').fill(regon);

        const responsePromise = this.page.waitForResponse(
            response =>
                response.url().includes('daneSzukaj') && 
                response.request().method() === 'POST'
        );

        await this.page.locator('#btnSzukaj').click();

        const response = await responsePromise;

        const body = await response.json();

        return {
            status: response.status(),
            body 
        };

    }

// Promise<string> - oznacza, że metoda captureMessage() zwraca obietnicę (Promise),
//  po rozwiązaniu (resolve) tej obietnicy (Promise), zwróci ona wartość typu string, 
//  która jest tekstem wewnątrz elementu zlokalizowanego przez messageLocator.
    async captureMessage(): Promise<string> {

        const messageLocator  = this.page.locator('#divInfoKomunikat');

        await messageLocator.waitFor();

        return await messageLocator.innerText();
    } 
}
