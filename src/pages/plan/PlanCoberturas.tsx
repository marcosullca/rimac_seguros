import React, { ReactElement } from 'react'
import IconArrowTop from '../../assets/plan/arrow-top.svg';
import ImgTheft from '../../assets/plan/icon_theft.svg';
import ImgDamage from '../../assets/plan/icon_damage.svg';
import ImgPerdidaTotal from '../../assets/plan/icon_perdidatotal.svg';
import InputSwitch from '../../components/plan/InputSwitch';

const PlanCoberturas = (): ReactElement => {
    return (
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
                                <InputSwitch name="llanta_robada" />
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
                                <InputSwitch name="choque_luz_roja" />
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
                                <InputSwitch name="atropello" />
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
    )
}

export default PlanCoberturas