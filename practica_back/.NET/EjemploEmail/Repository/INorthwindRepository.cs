using EjemploEmail.Model;

namespace EjemploEmail.Repository
{
    public interface INorthwindRepository
    {
        Task<List<Employees>> ObtenerTodosLosEmpleados();
        Task<int> ObtenerCantidadEmpleados();
        Task<Employees> ObtenerEmpleadoPorId(int id);
        Task<Employees> ObtenerEmpleadosPorNombre(string nombreEmpleado);
        Task<Employees> ObtenerIdEmpleadoPorTitulo(string titulo);
        Task<Employees> ObtenerEmpleadoPorCountry(string country);
        Task<List<Employees>> ObtenerTodosEmpleadoPorCountry(string country);
        Task<Employees> ObtenerEmpleadoMasGrande();
        Task<List<object>> ObtenerCantidadDeEmpleadosPorTitulos();
        Task<List<object>> ObtenerTodosLosProductosConSusCategorias();
        Task<List<Products>> ObtenerProductosQueContienen(string palabra);
    }
}
