// To jest plik z konfiguracją środowiskową dla aplikacji. Możemy dodać tu 
// różne środowiska jak produkcyjne itp.

// Fraza "export const ENVIRONMENTS":
//   eksport stałej o nazwie ENVIRONMENTS, 
//   która jest obiektem zawierającym konfiguracje środowiskowe.
//
// prod i staging to dwa środowiska, które tutaj mają tę samą wartość baseURL,
// ale potencjalnie mogą być różne w zależności od potrzeb.

export const ENVIRONMENTS = {

    prod: {
        baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
    },

    staging: {
        baseURL : 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
    }
};

const selectedEnv = process.env.TEST_ENV || 'prod';

export const ENV = ENVIRONMENTS[selectedEnv];