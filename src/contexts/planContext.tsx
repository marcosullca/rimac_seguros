import React, { createContext, FC, useContext } from "react";

const MONTO_BASE = 20
const PAGO_LLANTA_ROBADA = 15
const PAGO_CHOQUE_LUZ_ROJA = 20
const PAGO_ATROPELLO = 50

interface AppProviderProps {
    children: React.ReactNode
}

interface StateInterface {
    amount: number,
    cobertura: {
        llanta_robada: boolean,
        choque_luz_roja: boolean,
        atropello: boolean
    },
    current: number
}

// interface ActionInterface {
//     type: string
// }

const initialValue = {
    amount: 0,
    cobertura: {
        llanta_robada: false,
        choque_luz_roja: false,
        atropello: false
    },
    current: 0
};

const PlanStateContext = createContext<any>(initialValue);

const PlanDispatchContext = createContext<any>(null);

const calcCobertura = (state: StateInterface, prizeCobertura: number, action: { type: string, current: number, status: boolean }) => {
    let newAmount = state.amount
    if (action.current > 16000 && action.type === "CHOQUE_LUZ_ROJA") {
        newAmount -= PAGO_CHOQUE_LUZ_ROJA
    }
    if (action.status) {
        if (!Object.values(state.cobertura).includes(true)) {
            newAmount += MONTO_BASE
        }
        newAmount += prizeCobertura
    } else {
        if (Object.values(state.cobertura).filter(item => !!item).length === 1) {
            newAmount -= MONTO_BASE
        }
        newAmount -= prizeCobertura
    }

    return newAmount
}

const calcCoberturaWithSumaAsegurada = (action: { current: number }, state: StateInterface) => {
    let newAmount = state.amount
    if (action.current > 16000 && state.cobertura.choque_luz_roja && state.current <= 16000) {
        newAmount -= PAGO_CHOQUE_LUZ_ROJA
    }
    if (action.current <= 16000 && state.cobertura.choque_luz_roja && state.current > 16000) {
        newAmount += PAGO_CHOQUE_LUZ_ROJA
    }
    return newAmount
}

const reducer = (state: StateInterface, action: any) => {
    const { type, status, current } = action;
    const { cobertura } = state

    switch (type) {
        case 'CURRENT_SUMA_ASEGURADA':
            return {
                ...state,
                amount: calcCoberturaWithSumaAsegurada(action, state),
                current
            }
        case 'LLANTA_ROBADA':
            return {
                ...state,
                amount: calcCobertura(state, PAGO_LLANTA_ROBADA, action),
                cobertura: { ...cobertura, llanta_robada: status },
                current
            };
        case 'CHOQUE_LUZ_ROJA':
            return {
                ...state,
                amount: calcCobertura(state, PAGO_CHOQUE_LUZ_ROJA, action),
                cobertura: { ...cobertura, choque_luz_roja: status }
            };
        case 'ATROPELLO':
            return {
                ...state,
                amount: calcCobertura(state, PAGO_ATROPELLO, action),
                cobertura: { ...cobertura, atropello: status }
            };
        default:
            return state;
    }
};


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

const useStatePlanContext = (): StateInterface => {
    const state = useContext(PlanStateContext)
    if (!state) throw new Error("Not found context")

    return state
}
const useDispatchPlanContext = (): any => {
    const state = useContext(PlanDispatchContext)
    if (!state) throw new Error("Not found context")

    return state
}


export { PlanProviderComponent, useStatePlanContext, useDispatchPlanContext }
