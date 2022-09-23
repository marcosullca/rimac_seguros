import React, { FC } from 'react'
import { useDispatchPlanContext } from '../../contexts/planContext'

interface InputSwitchProps {
    name: string
}
const InputSwitch: FC<InputSwitchProps> = ({ name }) => {
    const action = useDispatchPlanContext()

    const handleChange = (e: React.ChangeEvent<any>) => {
        action({ type: name, status: e.target.checked })
    }
    return (
        <label className="switch">
            <input type="checkbox" name={name} onChange={handleChange} />
            <span className="slider round" />
        </label>
    )
}

export default InputSwitch