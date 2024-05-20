import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

import { useInput } from "../hooks/useInput";

export default function StateLogin() {
    const {
        handleInputBlur: handleEmailBlur,
        handleInputChange: handleEmailChange,
        value: emailValue,
        hasError: emailHasError,
        setEnteredValue: setEnteredEmail,
        setBluredInput: setBluredEmail
    } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

    const {
        handleInputBlur: handlePasswordBlur,
        handleInputChange: handlePasswordChange,
        value: passwordValue,
        hasError: passwordHasError,
        setEnteredValue: setEnteredPassword,
        setBluredInput: setBluredPassword
    } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty);

    function handleSubmit(event) {
        event.preventDefault();

        if(emailHasError || passwordHasError){
          return
        }

        setEnteredEmail('')
        setEnteredPassword('')
        setBluredEmail(false)
        setBluredPassword(false)

        console.log(emailValue, passwordValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label={"Email"}
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    error={emailHasError ? "Email is invalid" : null}
                    value={emailValue}
                />

                <Input
                    label={"Password"}
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    error={passwordHasError ? "Password is invalid" : null}
                    value={passwordValue}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
