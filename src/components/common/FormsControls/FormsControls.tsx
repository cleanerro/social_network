import React from "react";
import  s from "./FormsControls.module.css"

const FormControl = ({input,meta,FormType, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error: "")}>
            <div>
                <FormType {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>

    )
}


export const Textarea = (props: any) => {
    return <FormControl {...props} FormType="textarea"></FormControl>
}


export const Input = (props: any) => {
    return <FormControl {...props} FormType="input"></FormControl>
}