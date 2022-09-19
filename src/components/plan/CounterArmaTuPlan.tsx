import React from 'react'
import { useDispatchPlanContext } from '../../contexts/planContext'

const CounterArmaTuPlan = () => {
    const action = useDispatchPlanContext()
    const [valueCounter, setValueCounter] = React.useState<number>(14000)

    const validLimitNumber = (value: number) => value <= 16500 && value >= 12500

    const handleChange = (e: React.ChangeEvent<any>) => {
        const value = parseFloat(e.target.value)
        if (validLimitNumber(value)) {
            setValueCounter(value)
            action({ type: "CURRENT_SUMA_ASEGURADA", current: value })
        }
    }

    return (
        <>
            <button className='plan-calculos-counter__increment'
                onClick={() => {
                    const value = valueCounter - 100
                    if (validLimitNumber(value)) {
                        setValueCounter(value)
                        action({ type: "CURRENT_SUMA_ASEGURADA", current: value })
                    }
                }}>
                -
            </button>
            <input type="text" className='plan-calculos-counter__current' onChange={handleChange} value={`${valueCounter}`} />
            <button className='plan-calculos-counter__decrement'
                onClick={() => {
                    const value = valueCounter + 100
                    if (validLimitNumber(value)) {
                        setValueCounter(value)
                        action({ type: "CURRENT_SUMA_ASEGURADA", current: value })
                    }
                }}>
                +
            </button>
        </>
    )
}

export default CounterArmaTuPlan