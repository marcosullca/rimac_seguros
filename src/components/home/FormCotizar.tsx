import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchBasic } from '../../api/fetch';
import { useAppUserState, UserInterface } from '../../contexts/appContext';
import { FormErrors, FormValues, validationForm } from '../../utils/validation';


const initialValue = {
  tipoDocumento: "1",
  numDocumento: "",
  celular: "",
  placa: "",
}

const initialErrors = {
  numDocumento: "",
  celular: "",
  placa: "",
}

const FormCotizar: FC<{}> = () => {
  const { setuser } = useAppUserState()
  const navigate = useNavigate()

  const [values, setValues] = React.useState<FormValues>(initialValue)
  const [errors, setErrors] = React.useState<FormErrors>(initialErrors)
  const [requiredTerms, setRequiredTerms] = React.useState(false)
  const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault()

    const errorsValidated = validationForm(values)
    if (Object.keys(errorsValidated).length > 0 || !requiredTerms) return setErrors(errorsValidated)

    const body = {
      ...values,
      tipoDocumento: parseInt(values.tipoDocumento),
      celular: parseInt(values.celular)
    }

    fetchBasic(process.env.REACT_APP_URL_BASE || "", body, "POST").then(res => res.json()).then((res: UserInterface) => {
      setuser(res)
      navigate("../plan", { replace: true })
    }).catch(err => {
      console.log(err)
    })
  }



  const handleChange = (e: React.ChangeEvent<any>) => {
    const name = e.target.name
    const lengthValue = e.target.value.length
    if (name === "placa" && lengthValue === 8) return;
    if (name === "celular" && lengthValue === 10) return;
    if (name === "numDocumento" && lengthValue === 9) return;
    if (name === "placa" && lengthValue === 3) {
      return setValues((v) => ({ ...v, placa: (e.target.value + "-").toUpperCase() }))
    }
    setValues((v) => ({ ...v, [e.target.name]: e.target.value.trim().toUpperCase() }))

  }

  return (
    <form className='home-right__form' onSubmit={onSubmit}>
      <span className='home-right__title'>Déjanos tus datos</span>

      <div className='container-form__input'>
        <div className='container-form__documento'>
          <select onChange={handleChange} name="tipoDocumento">
            <option value="1">DNI</option>
            <option value="2">RUC</option>
            <option value="3">C.E.</option>
          </select>
          <div className='form-input__documento'>
            <input type="text" placeholder='Nro. de doc' onChange={handleChange} value={values.numDocumento} name="numDocumento" />
          </div>
        </div>
        {errors.numDocumento && (<span>{errors.numDocumento}</span>)}
      </div>
      <div className='container-form__input'>
        <input type="text" placeholder='Celular' className='home-right__celular' value={values.celular} onChange={handleChange} name="celular" />
        {errors.celular && (<span>{errors.celular}</span>)}
      </div>
      <div className='container-form__input'>
        <input type="text" placeholder='Placa' className='home-right__placa' value={values.placa} onChange={handleChange} name="placa" />
        {errors.placa && (<span>{errors.placa}</span>)}
      </div>
      <div className='home-right__cb'>
        <input type="checkbox" onChange={(e) => { setRequiredTerms(e.target.checked) }} />
        <span>Acepto la</span>
        <span> Política de Protecciòn de Datos Personales</span>
        <span> y los Términos y Condiciones.</span>
      </div>
      {!requiredTerms && (
        <span className='home-right_errorTerms'>Debe aceptar los términos y condiciones</span>
      )}
      <button type="submit" className='home-right__btn'>COTÍZALO</button>
    </form>
  )
}

export default FormCotizar