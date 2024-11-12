namespace exampleAPI.EjemploDeHerencia
{
    // herencia
    public class Gato : Animal
    {

        public string Raza { get; set; }
        
        // polimorfismo y redefinicion de metodos
        public override string HacerSonido()
        {
            return "El gato maulló";
        }
    }
}
