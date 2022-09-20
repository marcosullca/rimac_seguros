import { ReactElement } from 'react'
import LogoMain from '../assets/logo_main.svg'

const FallBackRoute = (): ReactElement => {
    return (
        <div className='rimacseguros-loading'>
            <img src={LogoMain} alt="logo" />
        </div>
    )
}

export default FallBackRoute