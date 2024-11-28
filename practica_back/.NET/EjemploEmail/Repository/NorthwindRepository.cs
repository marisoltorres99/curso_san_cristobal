using EjemploEmail.Model;
using EjemploEmail.DataContext;
using Microsoft.EntityFrameworkCore;

namespace EjemploEmail.Repository
{
    public class NorthwindRepository: INorthwindRepository
    {
        private readonly DataContextNorthwind _dataContext;

        public NorthwindRepository(DataContextNorthwind dataContext)
        {
            _dataContext = dataContext;
            
        }
        public async Task<List<Employees>> ObtenerTodosLosEmpleados()
        {
            var result = await _dataContext.Employees.ToListAsync();
            return result;
        }
        public async Task<int> ObtenerCantidadEmpleados()
        {
            var result = await _dataContext.Employees.CountAsync();
            return result;
        }

        public async Task<Employees> ObtenerEmpleadoPorId(int id)
        {
            var result = await _dataContext.Employees.Where(e => e.EmployeeID == id).FirstOrDefaultAsync();
            return result;
        }

        public async Task<Employees> ObtenerEmpleadosPorNombre(string nombreEmpleado)
        {
            var result = await _dataContext.Employees.FirstOrDefaultAsync(e => e.FirstName == nombreEmpleado);
            return result;
        }

        public async Task<Employees> ObtenerIdEmpleadoPorTitulo(string titulo)
        {
            var result = from emp in _dataContext.Employees where emp.Title == titulo select emp;
            return await result.FirstOrDefaultAsync();
        }

        public async Task<Employees> ObtenerEmpleadoPorCountry(string country)
        {
            var result = from emp in _dataContext.Employees where emp.Country == country select new Employees
            {
                Title = emp.Title,
                FirstName = emp.FirstName,
            };
            return await result.FirstOrDefaultAsync();
        }

        public async Task<List<Employees>> ObtenerTodosEmpleadoPorCountry(string country)
        {
            var result = from emp in _dataContext.Employees
                         where emp.Country == country
                         orderby emp.FirstName
                         select new Employees
                         {
                             Title = emp.Title,
                             FirstName = emp.FirstName,
                         };
            return await result.ToListAsync();
        }

        public async Task<Employees> ObtenerEmpleadoMasGrande()
        {
            var result = from emp in _dataContext.Employees
                         orderby emp.BirthDate
                         select new Employees
                         {
                             Title = emp.Title,
                             FirstName = emp.FirstName,
                         };
            return await result.FirstOrDefaultAsync();
        }

        public async Task<List<object>> ObtenerCantidadDeEmpleadosPorTitulos()
        {
            var result = _dataContext.Employees.GroupBy(e => e.Title).Select(g => new
            {
                Titulo = g.Key,
                Cantidad = g.Count()
            });
            return await result.Cast<object>().ToListAsync();
        }

        public async Task<List<object>> ObtenerTodosLosProductosConSusCategorias()
        {
            var result = from prod in _dataContext.Products
                         join cat in _dataContext.Categories
                         on prod.CategoryId equals cat.CategoryId
                         select new
                         {
                             ProducName = prod.ProductName,
                             CategoryName = cat.CategoryName,
                         };
            return await result.Cast<object>().ToListAsync();
        }

        public async Task<List<Products>> ObtenerProductosQueContienen(string palabra)
        {
            var result = await _dataContext.Products.Where(p => p.ProductName.Contains(palabra)).ToListAsync();
            return result;
        }
    }
}
