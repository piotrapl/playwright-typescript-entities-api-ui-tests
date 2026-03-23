// contextOptions to jest obiekt, który można przekazać do metody browser.newContext() w Playwright, 
// by skonfigurować kontekst przeglądarki. Można w nim ustawić różne opcje, jak
// recordHar - recordHar.path - ścieżka do pliku, w którym zostanie zapisany plik HAR 
// z danymi o ruchu sieciowym podczas testów. 
// Dzięki temu można dostosować środowisko testowe do swoich potrzeb 
// i symulować różne scenariusze użytkowania.

import { defineConfig } from '@playwright/test';
import { ENV } from './utils/env';

export default defineConfig ({

    testDir: './tests',

    use {

        baseURL: ENV.baseUrl,

        browsername: 'chromium',
        
        headless: true,

        screenshot: 'on',
        
        trace: 'on',

        video: 'off',

        contextOptions: {
            recordHar: {
                path: 'artifacts/network.har'
            }
        }
    },

    reporter: [
        ['list'],
        ['html', { open: 'never' }],
        ['allure-playwright']
    ],

    outputDir: 'artifacts'

});
