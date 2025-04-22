import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { hideActions } from "../store/privacy";

const Buttons = () => {
  const inputBox = useRef();
  const dispatch= useDispatch()

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
   
    dispatch(counterActions.add(inputBox.current.value))
    inputBox.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterActions.subtract(inputBox.current.value))
    inputBox.current.value = "";
  };
  const handleHideButton = () => {
    dispatch(hideActions.hide_button());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold "
          onClick={handleIncrement}
        >
          Increment +1
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold "
          onClick={handleDecrement}
        >
          Decrement -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center next_row">
        <input
          type="text"
          className="inputBox"
          placeholder="Enter any number"
          ref={inputBox}
        />
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold "
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold "
          onClick={handleSub}
        >
          Sub
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center next_row">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold "
          onClick={handleHideButton}
        >
          Hide Current Value
        </button>
      </div>
    </>
  );
};
export default Buttons;
