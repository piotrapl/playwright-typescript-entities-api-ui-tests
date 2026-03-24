/* 
Definicje interfejsów i typów, które będą używane
do reprezentowania danych zwracanych przez API.
fraza export - eksportuje interfejs ApiResponse, 
który może być używany w innych częściach aplikacji.  
*/
export interface ApiResponse {
    status: number;
    body: unknown;
}