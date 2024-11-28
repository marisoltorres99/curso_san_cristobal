using EjemploEmail.EjemploConDY;
using EjemploEmail.EjemploSinDY;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EjemploEmail.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EjemploConDYController : ControllerBase
    {
        private IEmailServiceConDY _emailServiceConDY;

        public EjemploConDYController(IEmailServiceConDY emailServiceConDY)
        {
            _emailServiceConDY = emailServiceConDY;
        }

        [HttpGet]

        public bool EnviarMail([FromQuery] string email)
        {
            UsuarioServiceConDY usuarioServiceConDY = new UsuarioServiceConDY(_emailServiceConDY);
            return usuarioServiceConDY.enviarNotificacionUsuarioConDY(email);
        }
    }
}
