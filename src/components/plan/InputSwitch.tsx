import React, { FC } from 'react'
import { useDispatchPlanContext } from '../../contexts/planContext'

interface InputSwitchProps {
    name: string
}
const InputSwitch: FC<InputSwitchProps> = ({ name }) => {
    const action = useDispatchPlanContext()

    const handleChange = (e: React.ChangeEvent<any>) => {
        if (e.target.checked) return action({ type: `${name.toUpperCase()}`, status: true })
        return action({ type: `${name.toUpperCase()}`, status: false })
    }
    return (
        <label className="switch">
            <input type="checkbox" name={name} onChange={handleChange} />
            <span className="slider round" />
        </label>
    )
}

export default InputSwitch