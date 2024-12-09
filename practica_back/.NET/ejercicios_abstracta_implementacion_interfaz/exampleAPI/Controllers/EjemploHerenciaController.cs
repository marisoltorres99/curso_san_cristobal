using exampleAPI.EjemploDeHerencia;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace exampleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EjemploHerenciaController : ControllerBase
    {
        [HttpGet("GetAnimal")]
        public string GetAnimal()
        {
            Animal animal = new Animal();

            // al ser privada no puedo acceder desde fuera de la clase
            // animal.peso = 8;

            // al ser publica puedo acceder desde fuera de la clase
            animal.Edad = 10;

            Gato gato = new Gato();
            gato.Edad = 5;
            gato.Raza = "Siamés";

            return gato.HacerSonido();
        }
    }
}
