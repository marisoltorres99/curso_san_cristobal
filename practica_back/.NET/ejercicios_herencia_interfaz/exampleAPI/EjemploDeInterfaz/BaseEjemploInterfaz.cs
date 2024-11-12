namespace exampleAPI.EjemploDeInterfaz
{
    public class BaseEjemploInterfaz
    {
        // recibo como parametro un objeto interfaz (puede ser perro o gato)
        public string HacerSonido(IAnimal animal)
        {
            return animal.HacerSonido();
        }
    }
}
