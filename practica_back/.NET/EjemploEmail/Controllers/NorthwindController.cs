using EjemploEmail.EjemploSinDY;
using EjemploEmail.Model;
using EjemploEmail.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EjemploEmail.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NorthwindController : ControllerBase
    {
        private readonly INorthwindRepository _repository;

        public NorthwindController(INorthwindRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("api/TodosLosEmpleados")]
        public async Task<List<Employees>> ObtenerTodosLosEmpleados()
        {
            return await _repository.ObtenerTodosLosEmpleados();
        }

        [HttpGet]
        [Route("api/CantidadEmpleados")]
        public async Task<int> ObtenerCantidadEmpleados()
        {
            return await _repository.ObtenerCantidadEmpleados();
        }

        [HttpGet]
        [Route("api/ObtenerEmpleadoPorId")]
        public async Task<Employees> ObtenerEmpleadoPorId([FromQuery] int id)
        {
            return await _repository.ObtenerEmpleadoPorId(id);
        }

        [HttpGet]
        [Route("api/ObtenerEmpleadoPorNombre")]
        public async Task<Employees> ObtenerEmpleadoPorNombre([FromQuery] string nombreEmpleado)
        {
            return await _repository.ObtenerEmpleadosPorNombre(nombreEmpleado);
        }

        [HttpGet]
        [Route("api/ObtenerIdEmpleadoPorTitulo")]
        public async Task<Employees> ObtenerIdEmpleadoPorTitulo([FromQuery] string titulo)
        {
            return await _repository.ObtenerIdEmpleadoPorTitulo(titulo);
        }

        [HttpGet]
        [Route("api/ObtenerEmpleadoPorCountry")]
        public async Task<Employees> ObtenerEmpleadoPorCountry([FromQuery] string country)
        {
            return await _repository.ObtenerEmpleadoPorCountry(country);
        }

        [HttpGet]
        [Route("api/ObtenerTodosEmpleadoPorCountry")]
        public async Task<List<Employees>> ObtenerTodosEmpleadoPorCountry([FromQuery] string country)
        {
            return await _repository.ObtenerTodosEmpleadoPorCountry(country);
        }

        [HttpGet]
        [Route("api/ObtenerEmpleadoMasGrande")]
        public async Task<Employees> ObtenerEmpleadoMasGrande()
        {
            return await _repository.ObtenerEmpleadoMasGrande();
        }

        [HttpGet]
        [Route("api/ObtenerCantidadDeEmpleadosPorTitulos")]
        public async Task<List<object>> ObtenerCantidadDeEmpleadosPorTitulos()
        {
            return await _repository.ObtenerCantidadDeEmpleadosPorTitulos();
        }

        [HttpGet]
        [Route("api/ObtenerTodosLosProductosConSusCategorias")]
        public async Task<List<object>> ObtenerTodosLosProductosConSusCategorias()
        {
            return await _repository.ObtenerTodosLosProductosConSusCategorias();
        }

        [HttpGet]
        [Route("api/ObtenerProductosQueContienen")]
        public async Task<List<Products>> ObtenerProductosQueContienen(string palabra)
        {
            return await _repository.ObtenerProductosQueContienen(palabra);
        }
    }
}
