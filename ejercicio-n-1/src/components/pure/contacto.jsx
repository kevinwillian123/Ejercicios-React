import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoComponent = ({ contact }) => {
  return (
    <div>
      <h4>Nombre: {contact.nombre}</h4>
      <h4>Apellido: {contact.apellido}</h4>
      <h4>Email: {contact.email}</h4>
      <h4>
        CONECTADO:{" "}
        {contact.isConnected ? "Contacto En Línea" : "Contacto No Disponible"}
      </h4>
    </div>
  );
};

ContactoComponent.propTypes = {
  contact: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
