using System.ComponentModel.DataAnnotations;

namespace EjemploEmail.Model
{
    public class Orders
    {
        [Key]
        public int OrderID { get; set; }
    }
}
