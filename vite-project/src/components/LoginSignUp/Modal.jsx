import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

const ResultModal = forwardRef(function Modal({ message, navlink }, ref) {
  const dialog = useRef();
  const navigate = useNavigate();
  console.log(message, navlink);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  function handleClick() {
    var link = `/${navlink}`;
    navigate(link);
  }
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>{message}</h2>
      <form method="dialog">
        <button onClick={handleClick}>{navlink}</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
