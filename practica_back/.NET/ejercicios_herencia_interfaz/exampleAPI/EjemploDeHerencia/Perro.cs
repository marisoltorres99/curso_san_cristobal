namespace exampleAPI.EjemploDeHerencia
{
    // herencia
    public class Perro : Animal
    {
        public string Raza { get; set; }

        // polimorfismo y redefinicion de metodos
        public override string HacerSonido()
        {
            return "El perro ladró";
        }

    }
}
