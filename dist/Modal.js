import React, { useState } from "react";
import "./styles.css";
const MyModal = ({
  trigger,
  children
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(trigger, {
    onClick: handleOpenModal
  }), isModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: handleCloseModal
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, children)));
};
export default MyModal;