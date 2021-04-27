import React, { useState, useEffect } from 'react';

const ModalSelectAccount = (props) => {
  const [displayModal, setDisplayModal] = useState('none');

  useEffect(() => {
    if (props.open) {
      setDisplayModal('block');
    } else {
      setDisplayModal('none')
    }
  }, [props.open]);

  const closeModal = () => {
    console.log('cierrate');
    props.handleModal();
  };

  return (
    <section className="modal" style={{ display: displayModal }}>
      <div className="modal-content">
        <hr />
        <div className="modal-top">
          <span id="close" className="modal-close" onClick={() => closeModal()}>
            &times;
          </span>
          <p>Selecciona tu cuenta</p>
        </div>
        <div className="modal-btn">
          <button className="btn btn-apple">Continua con Apple ID</button>
          <button className=" btn btn-facebook">Continua con Facebook</button>
          <button className="btn btn-google">Continua con Google</button>
        </div>
      </div>
    </section>
  );
};

export default ModalSelectAccount;
