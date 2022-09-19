import React from 'react'
import IconArrowLeft from '../../assets/plan/arrow-left'
import ImgUser from '../../assets/plan/plan-img-user.svg'
import { useAppUserState } from '../../contexts/appContext'

const PlanInfo = () => {
    const { user: { placa } } = useAppUserState()

    return (
        <div className='plan-info'>
            <div className='plan-info__back'>
                <div className='plan-info__btn'>
                    <IconArrowLeft className="arrow-left" />
                </div>
                <span>VOLVER</span>
            </div>
            <div className='plan-info__title-mobile'>Mira las coberturas</div>
            <div className='plan-info__title-desktop'>
                <span>¡Hola, </span>
                <span>Marco!</span>
            </div>
            <div className='plan-info__subtitle'>Conoce las coberturas para tu plan</div>
            <div className='plan-info__items'>
                <div className='plan-info-left'>
                    <div className='plan-info-left__placa'>Placa: {placa}</div>
                    <div className='plan-info-left__marca'>Wolkswagen 2019 Golf</div>
                </div>
                <img src={ImgUser} alt="imagen-usuario" className='plan-info__img' />
            </div>
        </div>
    )
}

export default PlanInfo