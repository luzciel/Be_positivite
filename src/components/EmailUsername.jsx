import React from "react";

const EmailUsername = () => {
  return (
    <div className="form-seccion">
      <p className="label">Email/Nombre de usuario</p>
      <input type="text" className="form-control" placeholder="Ingresa email o nombre de usuario" required />
    </div>
  );
};

export default EmailUsername;
