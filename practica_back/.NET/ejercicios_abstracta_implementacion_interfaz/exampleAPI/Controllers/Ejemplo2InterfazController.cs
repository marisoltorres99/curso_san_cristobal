using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using exampleAPI.EjemploDeInterfaz;

namespace exampleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Ejemplo2InterfazController : ControllerBase
    {
        [HttpGet("GetAnimal")]
        public string GetAnimal()
        {
            // creo una instancia de la clase base
            EjemploDeInterfaz.BaseEjemploInterfaz _base = new BaseEjemploInterfaz();
            //Perro perro = new Perro();
            Gato gato = new Gato();
            // el metodo se ejecutará dependiendo del objeto que se mande
            return _base.HacerSonido(gato);
        }
    }
}
