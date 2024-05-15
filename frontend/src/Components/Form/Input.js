import React, { useEffect, useReducer } from "react";
import "./Input.css";
import validator from "../../Validators/Validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations)
      };
    }
    default: {
      return state;
    }
  }
};

export default function Input(props) {
  const [mainInput, dipatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const {value , isValid} = mainInput;
  const {id, onInputHandler} = props

  useEffect(() => {
    onInputHandler(id, value, isValid);

  }, [value])

  const onChangeHandler = (event) => {

    dipatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
      isValid: true
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
        onChange={onChangeHandler}
      />
    );

  return <div>{element}</div>;
}