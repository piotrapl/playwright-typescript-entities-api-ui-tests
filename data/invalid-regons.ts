// Lista numerów REGON, 
// do sprawdzania w testach, jak aplikacja radzi sobie 
// gdy podamy REGON, który nie istnieje w systemach GUS
// Typ danych invalidRegons - tablica mogąca zawierać różne wartości,
export const nonExistingRegons = [

    {
        regon: '162537906',
        description: 'REGON poprawny ale bez powiązań z istniejacymi podmiotami'
    },
    
    {
        regon: '664408741',
        description: 'REGON poprawny ale bez powiązań z istniejacymi podmiotami'
    }   

]