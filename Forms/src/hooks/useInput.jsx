import { useState } from "react";

export function useInput(defaultValue, validationFn){
    const [enteredValue, setEnteredValue] = useState(defaultValue);

    const [bluredInput, setBluredInput] = useState(false);

    const valueIsValid = validationFn(enteredValue)

    function handleInputChange(event) {
        setEnteredValue(event.target.value);

        setBluredInput(false);
    }

    function handleInputBlur() {
        setBluredInput(true);
    }

    return{
        value: enteredValue,
        isBlured: bluredInput,
        handleInputBlur,
        handleInputChange,
        hasError: bluredInput && !valueIsValid,
        setEnteredValue,
        setBluredInput
    }
}