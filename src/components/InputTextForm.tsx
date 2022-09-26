import React from 'react'

interface InputTextFormProps {
    handleChange(e: React.ChangeEvent<any>): void,
    value: string,
    placeholder: string,
    name: string,
    error: string
}
const InputTextForm: React.FC<InputTextFormProps> = ({ handleChange, value, placeholder, name, error }) => {
    return (
        <div className='container-form__input'>
            {/* <input type="text" placeholder='Celular' value={values.celular} onChange={handleChange} name="celular" /> */}
            <input type="text"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                name={name} />
            {error && (<span>{error}</span>)}
        </div>

    )
}

export default InputTextForm