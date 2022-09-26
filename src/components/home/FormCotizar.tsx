import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchBasic } from '../../api/fetch';
import { useAppUserState, UserInterface } from '../../contexts/appContext';
import { StructInputs, ProcessForm } from '../../utils/validation';
import InputTextForm from '../InputTextForm';


const initialValue = {
  tipoDocumento: "1",
  numDocumento: "",
  celular: "",
  placa: "",
}

const validateForm = {
  numDocumento: {
    type: "integer",
    maxLength: 8,
    minLength: 8,
  },
  celular: {
    type: "integer",
    maxLength: 9,
    minLength: 9,
  },
  placa: {
    maxLength: 7,
    minLength: 7,
  }
}
const initialErrors = {}

const FormCotizar: FC<{}> = () => {
  const { setuser } = useAppUserState()
  const navigate = useNavigate()

  const [values, setValues] = React.useState<StructInputs>(initialValue)
  const [errors, setErrors] = React.useState<StructInputs>(initialErrors)
  const [requiredTerms, setRequiredTerms] = React.useState(false)
  const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault()

    const processInputs = new ProcessForm(values, validateForm)

    const errorsValidated = processInputs.processErrors().getFormErrors()
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
          <select onChange={handleChange} name="tipoDocumento" title='Tipo Documento'>
            <option value="1">DNI</option>
            <option value="2">RUC</option>
            <option value="3">C.E.</option>
          </select>
          <input type="text" placeholder='Nro. de doc' onChange={handleChange} value={values.numDocumento} name="numDocumento" />
        </div>
        {errors.numDocumento && (<span>{errors.numDocumento}</span>)}
      </div>
      <InputTextForm error={errors.celular} handleChange={handleChange} value={values.celular} placeholder='Celular' name="celular" />
      <InputTextForm error={errors.placa} handleChange={handleChange} value={values.placa} placeholder='Placa' name="placa" />

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