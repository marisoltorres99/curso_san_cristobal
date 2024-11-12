using exampleAPI.EjemploDeInterfaz;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace exampleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EjemploInterfazController : ControllerBase
    {
        [HttpGet("GetAnimal")]
        public string GetAnimal()
        {
            Perro perro = new Perro();

            return perro.HacerSonido();
        }
    }
}
