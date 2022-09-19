import ImgCarMobile from '../../assets/home/car_mobile.svg';
import IconHomeImgCar from '../../assets/home/home-img_car';
import IconHomeImageBackground from '../../assets/home/home-img-bg.svg';

const HomeLeft = () => {
    return (
        <>
            <div className='home-absolute-container'>
                <img src={IconHomeImageBackground} className="img_bg" alt="icon-img-bg" />
                <div className='home__description-terms-conditions'>
                    © 2021 RIMAC Seguros y Reaseguros.
                </div>
            </div>
            <div className='home-left-center'>
                <section className='section-explain'>
                    <p>¡NUEVO!</p>
                    <div className='section-explain__title'>
                        <span>Seguro</span>
                        <span>Vehicular</span>
                        <span>Tracking</span>
                    </div>
                    <div className='section-explain__concept'>Cuentanos donde le haras seguimiento a tu seguro</div>
                </section>
                <div className='img_car'><IconHomeImgCar /></div>
                <img src={ImgCarMobile} alt="car" className='img_car__mobile' />
            </div>
        </>
    )
}

export default HomeLeft