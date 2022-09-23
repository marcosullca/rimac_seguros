import React, { createContext, FC, useContext } from "react";
import { ActionDispatchPlanContext, CoberturaInterface, StatePlanContext } from "../types";

const MONTO_BASE = 20
const PAGO_LLANTA_ROBADA = 15
const PAGO_CHOQUE_LUZ_ROJA = 20
const PAGO_ATROPELLO = 50

interface AppProviderProps {
    children: React.ReactNode
}

const initialValue = {
    amount: 0,
    oldCounterValue: 14000,
    coberturas: []
};

const PlanStateContext = createContext<StatePlanContext>(initialValue);

const PlanDispatchContext = createContext<React.Dispatch<ActionDispatchPlanContext>>(() => { });

const newArrayCoberturas = (state: StatePlanContext, newCobertura: CoberturaInterface, status: boolean) => {
    const { name, prize } = newCobertura
    const { coberturas } = state

    if (status) return [...coberturas, { name, prize }]
    return coberturas.filter(v => v.name !== name)
}

const newAmountResult = (state: StatePlanContext, action: ActionDispatchPlanContext) => {
    const { current = 0 } = action
    if (state.oldCounterValue <= 16000 && current > 16000) return (- PAGO_CHOQUE_LUZ_ROJA)
    if (state.oldCounterValue > 16000 && current <= 16000) return PAGO_CHOQUE_LUZ_ROJA
    return 0
}
const reducer = (state: StatePlanContext, action: ActionDispatchPlanContext) => {
    const { type, status = false, current = 0 } = action;
    const { coberturas, amount, oldCounterValue } = state

    const prizeCobertura = (() => {
        switch (type.toUpperCase()) {
            case 'LLANTA_ROBADA':
                return PAGO_LLANTA_ROBADA;
            case 'CHOQUE_LUZ_ROJA':
                return PAGO_CHOQUE_LUZ_ROJA
            case 'ATROPELLO':
                return PAGO_ATROPELLO
            default:
                return 0
        }
    })()

    const newCobertura = { prize: prizeCobertura, name: type }

    const arrayCoberturas = newArrayCoberturas(state, newCobertura, status)
    switch (type.toUpperCase()) {
        case 'CURRENT_SUMA_ASEGURADA':
            const verifyCobertura = coberturas.find(v => v.name === "choque_luz_roja")
            return {
                ...state,
                amount: amount + (verifyCobertura ? newAmountResult(state, action) : 0),
                oldCounterValue: current
            }
        default:
            const preAmount = arrayCoberturas.reduce((acc, curr) => acc + curr.prize, 0)
            const montoBase = logicSumMontoBase(coberturas, status, type)
            const coberturaChoqueLuzRoja = validateCobertura(arrayCoberturas, oldCounterValue)
            return {
                ...state,
                amount: preAmount + montoBase - coberturaChoqueLuzRoja,
                coberturas: arrayCoberturas,
            };
    }
};

const validateCobertura = (coberturas: CoberturaInterface[], oldCounterValue: number) => {
    if (coberturas.find(v => v.name === "choque_luz_roja") && oldCounterValue > 16000) return PAGO_CHOQUE_LUZ_ROJA
    return 0;

}

const logicSumMontoBase = (coberturas: CoberturaInterface[], status: boolean, type: string) => {
    if (!status && coberturas.length === 1) return 0
    return MONTO_BASE
}


const PlanProviderComponent: FC<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialValue)

    return (
        <PlanStateContext.Provider value={state}>
            <PlanDispatchContext.Provider value={dispatch}>
                {children}
            </PlanDispatchContext.Provider>
        </PlanStateContext.Provider>
    )
}

const useStatePlanContext = () => {
    const state = useContext(PlanStateContext)
    if (!state) throw new Error("Not found context")

    return state
}
const useDispatchPlanContext = () => {
    const dispatch = useContext(PlanDispatchContext)
    if (!dispatch) throw new Error("Not found context")

    return dispatch
}


export { PlanProviderComponent, useStatePlanContext, useDispatchPlanContext }
