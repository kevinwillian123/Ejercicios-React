import React from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/contacto";

const ContactoListComponent = () => {
  const contact = new Contacto("Kevin", "Apellido", "kevin@gmail.com", false);
  return (
    <div>
      <h3>Tu datos son:</h3>
      <ContactoComponent contact={contact}></ContactoComponent>
    </div>
  );
};

export default ContactoListComponent;
