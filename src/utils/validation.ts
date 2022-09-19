export interface FormValues {
    tipoDocumento: string,
    numDocumento: string,
    celular: string,
    placa: string,
}

export interface FormErrors {
    numDocumento?: string,
    celular?: string,
    placa?: string,
}

export const validationForm = (values: FormValues): FormErrors => {
    let formErrors = {}
    if (!values.numDocumento.trim()) {
        formErrors = { ...formErrors, numDocumento: "*Campo requerido" }
    } else if (!parseInt(values.numDocumento.trim()) || values.numDocumento.trim().length !== 8) {
        formErrors = { ...formErrors, numDocumento: "*Ingrese un número de documento válido" }
    }
    if (!values.celular.trim()) {
        formErrors = { ...formErrors, celular: "*Campo requerido" }
    } else if (!parseInt(values.celular.trim()) || values.celular.trim().length !== 9) {
        formErrors = { ...formErrors, celular: "*Ingrese un número de celular válido" }
    }
    if (!values.placa.trim() || values.placa.trim().length !== 7) {
        formErrors = { ...formErrors, placa: "*Campo requerido" }
    }

    return formErrors;
}