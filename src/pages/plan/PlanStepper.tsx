import React from 'react'
import IconArrowLeft from '../../assets/plan/arrow-left'

const PlanStepper = () => {
    return (
        <>
            <div className='plan-stepper'>
                <div className='plan-stepper__btn'>
                    <IconArrowLeft className="arrow-left" />
                </div>
                <div className='plan-stepper__text'>
                    Paso 2 de 2
                </div>
                <div className='plan-stepper__bar'></div>
            </div>
            <div className='plan-stepper-desktop'>
                <div className='plan-stepper-desktop__container'>
                    <div className='plan-stepper-desktop__step'>
                        <div className='plan-stepper-desktop__left'>
                            <span>
                                1
                            </span>
                            <div className='plan-stepper-desktop__line' />
                            <span className='active'>
                                2
                            </span>
                        </div>
                        <div className='plan-stepper-desktop__right'>
                            <span>Datos</span>
                            <span className='active'>Arma tu plan</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanStepper