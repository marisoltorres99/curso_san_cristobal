using exampleAPI.Model;
using exampleAPI.Resource;
using Microsoft.AspNetCore.Mvc;

namespace exampleAPI.Controllers
{
    [Route("api/Quote")]
    [ApiController]
    public class QuoteController : Controller
    {
        [HttpGet(Name = "GetQuote")]

        // metodo get que devuelve la cotizacion del dolar blue (string)
        public string GetQuote()
        {
            // creo un objeto de la clase DolarAPI
            DolarAPI api = new DolarAPI();

            // llamo al metodo GetQuote de la clase DolarAPI
            return api.GetQuote().Result;
        }

        [HttpPost(Name = "GetSpecificQuote")]

        // metodo post que devuelve un objeto de tipo Currency (devuelve la cotizacion del tipo de dolar especificado)
        // FromBody indica que el parametro a recibir esta en el cuerpo del mensaje
        public async Task<string> GetSpecificQuote([FromBody] Currency Currency)
        {
            DolarAPI api = new DolarAPI();
            return await api.GetSpecificQuote(Currency);
        }
    }
}
