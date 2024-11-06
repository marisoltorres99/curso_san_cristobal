using CurrencyConversionAPI.Resource;
using Microsoft.AspNetCore.Mvc;

namespace CurrencyConversionAPI.Controllers
{
    [Route("api/Controller")]
    [ApiController]
    public class ConverterController : Controller
    {
        [HttpGet(Name = "GetQuote")]
        
        //metodo de tipo get (el parametro a recibir se lo mando desde la cabecera)
        public async Task<string> GetQuote([FromQuery] decimal value)
        {
            ExampleAPI api = new ExampleAPI();
            decimal result = await api.GetSpecificQuote();
            return (result * value).ToString();
        }
    }
}
