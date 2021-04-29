import React, { useState, useEffect} from "react";
// import eyeOpen from "../assets/img/Icono_view-off.svg";
import { Icon } from '@iconify/react';
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';


const Password = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const [eye, setEye] = useState(viewOff)
  const [typePassword, setTypePassword] = useState('password')

  const togglePassword = () => {
    setViewPassword(!viewPassword);
  };

    useEffect(() => {
    if (viewPassword) {
      setEye(viewIcon);
      setTypePassword('text');
    } else {
      setEye(viewOff);
      setTypePassword('password');
    }
  }, [viewPassword]);

   return (
    <div className="form-seccion">
       <p className="label">Contraseña</p>
       <label id="container-password" className="form-control">
        <Icon icon={eye} onClick={() => togglePassword()} style={{fontSize: '18px', padding:'0.9rem 0'}} />
       <input type={typePassword} id="password"  placeholder="Ingresa contraseña"  required />
       </label>
    </div>
  );
};

export default Password;