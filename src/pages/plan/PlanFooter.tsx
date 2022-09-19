import { useNavigate } from 'react-router-dom'
import IconCheck from '../../assets/plan/gl_check.svg'
import { useStatePlanContext } from '../../contexts/planContext'

const PlanFooter = () => {
    const { amount } = useStatePlanContext()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("../gracias", { state: { amount } })
    }
    return (
        <>
            <section>
                <div className='plan-footer__title'>
                    Monto
                </div>
                <div className='plan-footer__value'>
                    ${amount}
                </div>
                <div className='plan-footer__text'>
                    MENSUAL
                </div>
            </section>
            <div className='plan-footer__items'>
                <label>El precio incluye:</label>
                <div className='plan-footer__item'>
                    <img src={IconCheck} alt="check" />
                    <span>Llanta de respuesto</span>
                </div>
                <div className='plan-footer__item'>
                    <img src={IconCheck} alt="check" />
                    <span>Análisis de motor</span>
                </div>
                <div className='plan-footer__item'>
                    <img src={IconCheck} alt="check" />
                    <span>Aros gratis</span>
                </div>
            </div>
            <button className='plan-footer__btn' onClick={handleClick}>
                LO QUIERO
            </button>
        </>
    )
}

export default PlanFooter