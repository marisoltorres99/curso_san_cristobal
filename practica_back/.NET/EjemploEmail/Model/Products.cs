using System.ComponentModel.DataAnnotations;

namespace EjemploEmail.Model
{
    public class Products
    {
        [Key]
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int CategoryId { get; set; }
    }
}
