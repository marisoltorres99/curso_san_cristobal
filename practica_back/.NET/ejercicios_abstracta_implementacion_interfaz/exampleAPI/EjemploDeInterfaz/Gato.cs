namespace exampleAPI.EjemploDeInterfaz
{
    public class Gato : IAnimal
    {
        public string HacerSonido()
        {
            return "El gato maulló";
        }

        // si no quiero implementar un metodo puedo tirar una excepcion
        public string Caminar()
        {
            throw new NotImplementedException();
        }
    }
}
