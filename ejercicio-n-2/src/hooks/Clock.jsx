import React, { useState, useEffect } from "react";

const Clock = () => {
  const datosPer = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [clock, setclock] = useState(datosPer);

  useEffect(() => {
    const timer = setInterval(() => {
      setclock((prevState) => ({
        ...clock,
        edad: prevState.edad + 1,
      }));
    }, 1000);
    return () => {
      console.log("Timer Off");
      clearInterval(timer);
    };
  }, [clock]);
  return (
    <div>
      <h2>
        Hora Actual:
        {clock.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {clock.nombre} {clock.apellidos}
      </h3>
      <h1>Edad: {clock.edad}</h1>
    </div>
  );
};

export default Clock;
