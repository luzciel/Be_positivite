import React from "react";

const EmailUsername = () => {
  return (
    <div className="form-seccion">
      <p className="label">Email/Nombre de usuario</p>
      <div className="wrapper-input form-control">
        <input type="text" className="form-input" placeholder="Ingresa email o nombre de usuario" required />
      </div>
    </div>

  );
};

export default EmailUsername;


    // <div className="form-seccion">
    //   <p className="label">Email/Nombre de usuario</p>
    //   <label id="container-password" className="form-control">
    //     <input type="text" id="password" placeholder="Ingresa email o nombre de usuario" required />
    //   </label>
    // </div>

    // <div className="form-seccion">
    //   <p className="label">Email/Nombre de usuario</p>
    //   <input type="text" className="form-control" placeholder="Ingresa email o nombre de usuario" required />
    // </div>