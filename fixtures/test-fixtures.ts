// polecenia importujące różne moduły i klasy, które będziemy wykorzystywać w testach. 
// Tu - importujemy test z biblioteki Playwright, allure z biblioteki allure-playwright oraz nasze własne klasy RegonPage i RegonFlow, które znajdują się w katalogu pages i flows.

import {test as base} from '@playwright/test';
import { allure } from 'allure-playwright'

import { RegonPage } from '../pages/regon.page';
import { RegonFlow } from '../flows/regon.flow';

