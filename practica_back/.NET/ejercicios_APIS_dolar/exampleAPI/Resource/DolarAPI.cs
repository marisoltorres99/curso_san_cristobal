﻿using exampleAPI.Model;
using System.Net.Http.Headers;

namespace exampleAPI.Resource
{
    public class DolarAPI
    {
        public async Task<string> GetQuote()
        {
            // creo var tipo string vacia
            string responseBody = string.Empty;
            // creo un objeto client de la clase HttpClient (clase solo usada en este fragmento de codigo) 
            using (var client = new HttpClient())
            {
                // asigno un enpoint al objeto (devuelve la cotizacion del dolar hoy)
                client.BaseAddress = new Uri("https://dolarapi.com/v1/dolares/blue");
                // limpieza de datos de la cabecera
                client.DefaultRequestHeaders.Accept.Clear();
                // espero como respuesta el tipo de formato json
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // devuelve la cotizacion
                HttpResponseMessage response = await client.GetAsync(client.BaseAddress);
                // se ejecuta en caso de error
                response.EnsureSuccessStatusCode();
                // leo los datos de respuesta
                responseBody = response.Content.ReadAsStringAsync().Result;
            }
            // devuelvo los datos
            return responseBody;
        }

        public async Task<string> GetSpecificQuote(Currency Currency)
        {
            // creo var tipo string vacia
            string responseBody = string.Empty;
            // creo un objeto client de la clase HttpClient (clase solo usada en este fragmento de codigo)
            using (var client = new HttpClient())
            {
                // dependiendo del tipo de dolar especificado devuelvo el enpoint correspondiente (paso a mayus x si se ingresa minus)
                switch (Currency.Code.ToUpper())
                {
                    case "BOLSA":
                        client.BaseAddress = new Uri("https://dolarapi.com/v1/dolares/bolsa");
                        break;

                    case "BLUE":
                        client.BaseAddress = new Uri("https://dolarapi.com/v1/dolares/blue");
                        break;

                    case "CRIPTO":
                        client.BaseAddress = new Uri("https://dolarapi.com/v1/dolares/cripto");
                        break;

                    default:
                        throw new ArgumentException("Currency Type Error");
                }

                // limpieza de datos de la cabecera
                client.DefaultRequestHeaders.Accept.Clear();
                // espero como respuesta el tipo de formato json
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // devuelve la cotizacion
                HttpResponseMessage response = await client.GetAsync(client.BaseAddress);
                // se ejecuta en caso de error
                response.EnsureSuccessStatusCode();
                // leo los datos de respuesta
                responseBody = response.Content.ReadAsStringAsync().Result;
            }
            // devuelvo los datos
            return responseBody;
        }
    }
}
