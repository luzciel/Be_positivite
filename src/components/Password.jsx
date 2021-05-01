import React, { useState, useEffect} from "react";
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
       <div id="container-password" className="form-control">
        <Icon icon={eye} className="icon-password" onClick={() => togglePassword()} />
       <input type={typePassword} id="password" className="form-input" placeholder="Ingresa contraseña"  required />
       </div>
    </div>
  );
};

export default Password;