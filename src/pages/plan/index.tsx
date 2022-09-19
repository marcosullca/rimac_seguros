import React from 'react'
import IconArrowLeft from '../../assets/plan/arrow-left'
import { useAppUserState } from '../../contexts/appContext'
import ImgUser from '../../assets/plan/plan-img-user.svg'
import IconArrowTop from '../../assets/plan/arrow-top.svg';
import ImgTheft from '../../assets/plan/icon_theft.svg';
import ImgDamage from '../../assets/plan/icon_damage.svg';
import ImgPerdidaTotal from '../../assets/plan/icon_perdidatotal.svg';
import IconCheck from '../../assets/plan/gl_check.svg'

const PagePlan = () => {
    const { user: { tipoDocumento, numDocumento, celular, placa } } = useAppUserState()
    return (
        <div className='plan'>
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
            <div className='plan-center'>
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
                <div className='plan-calculos'>
                    <section>
                        <div className='plan-calculos__title'>Indica la suma asegurada</div>
                        <div className='plan-calculos__minmax'>
                            <div className='plan-calculos__min'>MIN $12.500</div>
                            <div className='plan-calculos__max'>MAX $16,500</div>
                        </div>
                    </section>
                    <div className='plan-calculos-counter'>
                        <button className='plan-calculos-counter__increment'>-</button>
                        <input type="text" className='plan-calculos-counter__current' defaultValue="$ 14,300" />
                        <button className='plan-calculos-counter__decrement'>+</button>
                    </div>
                </div>
                <div className='plan-coberturas'>
                    <p>Agrega o quita coberturas</p>
                    <div className='plan-coberturas-tabs'>
                        <div className='plan-coberturas-tabs__item active'>
                            Protege a
                            tu auto
                        </div>
                        <div className='plan-coberturas-tabs__item '>
                            Protege a los
                            que te rodeaN
                        </div>
                        <div className='plan-coberturas-tabs__item '>
                            mejora tu
                            plAN
                        </div>
                    </div>
                    <div className='plan-coberturas-carguard'>
                        <div className='plan-coberturas-carguard__item'>
                            <div className='carguard'>
                                <div className='carguard-img'>
                                    <img src={ImgTheft} alt="imagen-car" />
                                </div>
                                <div className='carguard-content'>
                                    <div className='carguard-content-top'>
                                        <div className='carguard-content-top__title'>
                                            Llanta robada
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </div>
                                    <div className='carguard-content__text'>
                                        He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                                    </div>
                                    <div className='carguard-content__footer'>
                                        <span>VER MENOS</span>
                                        <img src={IconArrowTop} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='plan-coberturas-carguard__item'>
                            <div className='carguard'>
                                <div className='carguard-img'>
                                    <img src={ImgDamage} alt="imagen-car" />
                                </div>
                                <div className='carguard-content'>
                                    <div className='carguard-content-top'>
                                        <div className='carguard-content-top__title'>
                                            Choque y/o pasarte la luz roja
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                    </div>
                                    <div className='carguard-content__footer'>
                                        <span>VER MAS</span>
                                        <img src={IconArrowTop} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='plan-coberturas-carguard__item'>
                            <div className='carguard'>
                                <div className='carguard-img'>
                                    <img src={ImgPerdidaTotal} alt="imagen-car" />
                                </div>
                                <div className='carguard-content'>
                                    <div className='carguard-content-top'>
                                        <div className='carguard-content-top__title'>
                                            Atropello en la vía Evitamiento
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                    </div>
                                    <div className='carguard-content__footer'>
                                        <span>VER MAS</span>
                                        <img src={IconArrowTop} alt="arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='plan-footer'>
                <section>
                    <div className='plan-footer__title'>
                        Monto
                    </div>
                    <div className='plan-footer__value'>
                        $35.00
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
                <button className='plan-footer__btn'>
                    LO QUIERO
                </button>
            </div>
        </div>
    )
}

export default PagePlan