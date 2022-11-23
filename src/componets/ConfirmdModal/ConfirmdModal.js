import React from 'react';

const ConfirmdModal = ({
  title,
  message,
  confirmdModal,
  modalValue,
  cancleModal,
}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => cancleModal(null)}
              htmlFor="my-modal"
              className="btn"
            >
              cancle
            </label>
            <label
              onClick={() => confirmdModal(modalValue)}
              htmlFor="my-modal"
              className="btn"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmdModal;