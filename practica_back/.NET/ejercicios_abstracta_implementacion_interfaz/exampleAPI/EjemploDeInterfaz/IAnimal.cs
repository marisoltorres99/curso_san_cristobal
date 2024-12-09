namespace exampleAPI.EjemploDeInterfaz
{
    // las propiedades y atributos de la interfaz tienen que estar en las clases que implementen la interfaz (contrato)
    public interface IAnimal
    {
        public string HacerSonido();

        public string Caminar()
        {
            return "El animal Camino";
        }
    }
}
