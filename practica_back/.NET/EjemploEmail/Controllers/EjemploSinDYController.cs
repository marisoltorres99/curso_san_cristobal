﻿using EjemploEmail.EjemploSinDY;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EjemploEmail.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EjemploSinDYController : ControllerBase
    {
        [HttpGet]

        public bool EnviarMail([FromQuery] string email)
        {
            UsuarioServiceSinDY usuarioServiceSinDY = new UsuarioServiceSinDY();
            return usuarioServiceSinDY.EnviarNotificacionUsuario(email);
        }
    }
}
