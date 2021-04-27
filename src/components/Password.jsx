import React from "react";


const Password = () => {
   return (
    <div className="form-seccion">
      <p className="label">Contraseña</p>
      <input type="password" className="form-control" placeholder="Ingresa contraseña" required />
    </div>
  );
};

export default Password;