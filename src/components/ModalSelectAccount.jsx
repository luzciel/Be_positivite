import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import appleIcon from '@iconify/icons-logos/apple';
import facebookIcon from '@iconify/icons-brandico/facebook';
import googleIcon from '@iconify/icons-logos/google-icon';

const ModalSelectAccount = (props) => {
  const [displayModal, setDisplayModal] = useState('none');

  useEffect(() => {
    if (props.open) {
      setDisplayModal('block');
    } else {
      setDisplayModal('none');
    }
  }, [props.open]);

  const closeModal = () => {
    props.handleModal();
  };

  return (
    <div className="modal" style={{ display: displayModal }}>
      <div className="modal-content">
        <hr className="modal-top-line" />
        <div className="modal-top">
          <p className="modal-close" onClick={() => closeModal()}>
            X
          </p>
          <div>
            <p className="modal-title">Selecciona tu cuenta</p>
          </div>
        </div>
        <div className="modal-wrapper-btn">
          <button className="btn modal-btn btn-apple">
            <Icon icon={appleIcon} className="icon-btn" /> Continua con Apple ID
          </button>
          <button className="btn modal-btn btn-facebook">
            <Icon
              icon={facebookIcon}
              className="icon-btn"
              style={{ color: '#215e99' }}
            />{' '}
            Continua con Facebook
          </button>
          <button className="btn modal-btn btn-google">
            <Icon icon={googleIcon} className="icon-btn" /> Continua con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSelectAccount;
