using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;

namespace CurrencyConversionAPI.Resource
{
    public class ExampleAPI
    {
        public async Task<decimal> GetSpecificQuote()
        {
            HttpResponseMessage response;
            using (var client = new HttpClient())
            {
                RequestCurrency currency = new RequestCurrency();
                currency.Code = "Bolsa";

                // var jsonObject = new JavaScriptSerializer().Serialize(currency);
                // reemplazo linea ya que la clase JavaScriptSerializer no esta disponible en .NET 8
                var jsonObject = JsonConvert.SerializeObject(currency);

                var content = new StringContent(jsonObject.ToString(), Encoding.UTF8, "application/json");
                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                response = await client.PostAsync("https://localhost:7277/api/Quote", content);
                if (!response.IsSuccessStatusCode)
                {
                    // var httpResponse = new HttpResponseMessage(response.StatusCode);
                    // httpResponse.ReasonPhrase = " CONNECTION ERROR";
                    // httpResponse.Content = new StringContent("");
                    // throw new HttpResponseException(httpResponse);
                    // reemplazo de lineas ya que la clase HttpResponseException es especifica
                    // de ASP.NET Web API en .NET Framework, pero no está disponible en ASP.NET Core 
                    throw new HttpRequestException($"Error de conexión: {response.ReasonPhrase}");
                }
            }
                string str = response.Content.ReadAsStringAsync().Result;
                QuoteCurrencyResponse? result =
                JsonConvert.DeserializeObject<QuoteCurrencyResponse?>(str);
                return result.Venta;
        }
    }
}