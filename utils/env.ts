// To jest plik z konfiguracją środowiskową dla aplikacji. Możemy dodać tu 
// różne środowiska jak produkcyjne itp.

// Fraza "export const ENVIRONMENTS":
//   eksport stałej o nazwie ENVIRONMENTS, 
//   która jest obiektem zawierającym konfiguracje środowiskowe.

export const ENVIRONMENTS = {

    prod: {
        baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
    }
}