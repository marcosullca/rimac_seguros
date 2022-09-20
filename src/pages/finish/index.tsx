import React, { ReactElement } from 'react'
import ImgBgMobile from '../../assets/finish/img-bg-mobile.svg'
import ImgBgDesktop from '../../assets/finish/img-bg-desktop.svg'
const PageFinish = (): ReactElement => {

    return (
        <div className='finish'>
            <section className='finish-background'>
                <img src={ImgBgMobile} alt="imagen feliz" className='finish-background__mobile' />
                <img src={ImgBgDesktop} alt="imagen feliz" className='finish-background__desktop' />
            </section>
            <section className='finish-bienvenida'>
                <div className='finish-bienvenida-container'>
                    <div className='finish-bienvenida__top'>
                        <div className='finish-bienvenida__title emphasis'>¡Te damos la bienvenida! </div>
                        <div className='finish-bienvenida__title'>Cuenta con nosotros para proteger tu vehículo</div>
                    </div>
                    <div className='finish-bienvenida__bot'>
                        <div className='finish-bienvenida__text'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</div>
                        <div className='finish-bienvenida__email'>marcosullcayauri@gmail.com</div>
                    </div>
                    <button className='finish-bienvenida__btn'>
                        cómo usar mi seguro
                    </button>
                </div>
            </section>
            <div className='finish-footer'>
                © 2021 RIMAC Seguros y Reaseguros.
            </div>
        </div>
    )
}

export default PageFinish