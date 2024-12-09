namespace exampleAPI.EjemploDeHerencia
{
    public class Animal
    {
        // propiedades (prop)
        // propiedad protected (puedo acceder desde clases heredadas)

        // propiedad publica
        public int Edad { get; set; }

        // propiedad privada
        private int Peso { get; set; }

        // constructor (ctor)
        // sin parametros
        public Animal()
        {
            this.Peso = 1;
        }

        // constructor (ctor)
        // con parametros
        public Animal(int peso)
        {
            this.Peso = 8;
        }

        // si tengo una propiedad privada puedo devolverla con un metodo publico
        public int devolverPeso()
        {
            return this.Peso;
        }

        public string Caminar()
        {
            return "El animal caminó";
        }

        // polimorfismo
        public virtual string HacerSonido()
        {
            return "El animal hizo un sonido";
        }
    }
}
