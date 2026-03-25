import { expect } from '@playwright/test';
import { ApiResponse} from '../types/api.types';

export class RegonAssertions {
// to jest klasa, która będzie zawierać metody asercji (assertions) do sprawdzania wyników testów.
// poniżej - 'constructor(' - ten blok kodu definiuje konstruktor klasy, przyjący 2 argumenty:
//  uiMessage (wiadomość z interfejsu użytkownika) i apiResponse (odpowiedź z API).
    constructor(
        private uiMessage: string,
        private apiResponse: ApiResponse
    ) {}
    
    assert() {

        expect(this.response.status).toBe(200);

        expect (this.response.body).toEqual({ d: "" });
    }