
interface KeyInterface {
    value: string,
    error?: string,
    validations?: ValidationsInterface
}

interface ValidationsInterface {
    [keyValidation: string]: string | number
}

export type StructProcessForm = {
    [key: string]: KeyInterface
}

export type StructInputs = {
    [key: string]: string
}

export type StructValidate = {
    [key: string]: ValidationsInterface
}


export class ProcessForm {

    structProcessForm: StructProcessForm
    inputsErrors: StructInputs = {}

    constructor(valuesForm: StructInputs, structValidate: StructValidate) {
        this.structProcessForm = {}
        for (const k in valuesForm) {
            this.structProcessForm = {
                ...this.structProcessForm, [k]: {
                    value: valuesForm[k],
                    validations: structValidate[k]
                }
            }
        }
    }

    processErrors(): ProcessForm {
        for (const i in this.structProcessForm) {
            const validationsInput = this.structProcessForm[i].validations
            if (validationsInput) {
                const inputValue = this.structProcessForm[i].value.trim()
                const error = this.validate(validationsInput, inputValue)
                this.structProcessForm[i].error = error ? `*${error}` : ''
            }
        }
        return this
        // this.keys.forEach((_, k) => {
        //     this.keys.set(k, { ...this.keys.get(k)!, error: `error ${k}` })
        // })
        // this.keys = new Map()
    }

    validate(inputValidations: ValidationsInterface, inputValue: string): string {
        if (inputValue.length === 0) return "Campo requerido"

        /** Validate Type and Long */
        const { type, maxLength, minLength } = inputValidations
        let newError = ""
        if (type === "integer") {
            newError = this.validateInteger(inputValue)
        }
        if (maxLength && minLength) {
            newError = this.validateLong(inputValue, Number(maxLength), minLength as number)
        }
        return newError
    }

    validateInteger(inputValue: string): string {
        if (!parseInt(inputValue)) return "El campo debe contener números"
        return ""
    }

    validateLong(inputValue: string, maxLength: number, minLength: number): string {
        const lengthInputValue = inputValue.length
        if (minLength <= lengthInputValue && maxLength >= lengthInputValue) return ""
        if (minLength === maxLength) return `El campo debe contener ${minLength} carácteres`
        return `El campo debe contener entre ${minLength} y ${maxLength} carácteres`

    }

    getFormErrors(): StructInputs {
        this.inputsErrors = {}
        for (const k in this.structProcessForm) {
            const error = this.structProcessForm[k].error
            this.inputsErrors = {
                ...this.inputsErrors,
                ...(error ? { [k]: error } : {})
            }
        }
        return this.inputsErrors
    }
}