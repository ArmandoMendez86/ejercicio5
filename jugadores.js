// Clase Persona
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    }
}

// Clase Jugador que hereda de Persona
class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Posición: ${this.posicion}`);
    }
}

// Clase Entrenador que hereda de Persona
class Entrenador extends Persona {
    constructor(nombre, apellido, edad, experiencia, idFederacion) {
        super(nombre, apellido, edad);
        this.experiencia = experiencia;
        this.idFederacion = idFederacion || Math.floor(Math.random() * 90000) + 10000;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Experiencia: ${this.experiencia} años`);
        console.log(`ID Federación: ${this.idFederacion}`);
    }
}

// Clase Equipo
class Equipo {
    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles() {
        console.log("Detalles del entrenador:");
        this.entrenador.getDetalles();
        console.log("\nDetalles de los jugadores:");
        this.jugadores.forEach((jugador) => {
            jugador.getDetalles();
            console.log("-------------------------");
        });
    }
}

// Crear jugadores
let jugadores = [
    new Jugador("Armando", "Méndez Ríos", 18, "Portero"),
    new Jugador("Mario", "Méndez Rios", 22, "Defensa"),
    new Jugador("Abraham", "Corcuera Méndez", 25, "Medio"),
    new Jugador("David", "Nario Méndez", 26, "Delantero")
];

// Crear entrenador
let entrenador = new Entrenador("Elpidio", "Méndez López", 40, 15);

// Crear equipo
let equipo = new Equipo(entrenador, jugadores);

// Mostrar detalles del equipo
equipo.getDetalles();

