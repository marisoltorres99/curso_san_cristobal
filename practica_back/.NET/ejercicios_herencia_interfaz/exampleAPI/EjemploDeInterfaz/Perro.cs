namespace exampleAPI.EjemploDeInterfaz
{
    public class Perro : IAnimal
    {
        public string HacerSonido()
        {
            return "El perro ladró";
        }

        // si no quiero implementar un metodo puedo tirar una excepcion
        public string Caminar()
        {
            throw new NotImplementedException();
        }

    }
}
