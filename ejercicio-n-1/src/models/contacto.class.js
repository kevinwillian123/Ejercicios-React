export class Contacto {
  nombre = "";
  apellido = "";
  email = "";
  isConnected = false;

  constructor(nombre, apellido, email, isConnected) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.isConnected = isConnected;
  }
}
