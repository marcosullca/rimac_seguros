//==============================================================================
// Context Plan
//==============================================================================
export interface StatePlanContext {
    amount: number,
    coberturas: CoberturaInterface[]
    oldCounterValue: number
}

export interface CoberturaInterface {
    name: string,
    prize: number
}

export interface ActionDispatchPlanContext {
    type: string,
    status?: boolean,
    current?: number
}

//==============================================================================
// 
//==============================================================================

interface Cobertura {
    getPrize(): number
}

class CoberturaLlanta implements Cobertura {
    name = ""
    prize = 0
    constructor(name: string, prize: number) {
        this.name = name;
        this.prize = prize
    }

    getPrize(): number {
        return this.prize
    }
}

const getCoberturaPrize = (instancia: Cobertura) => {
    return instancia.getPrize()
}

export const fnCall = () => {
    const obj = new CoberturaLlanta("llanta", 30) /* as Cobertura */
    console.log(getCoberturaPrize(obj))
}
