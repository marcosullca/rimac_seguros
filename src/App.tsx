import { Outlet } from 'react-router-dom'
import { AppProvider } from './contexts/appContext';
import IconLogo from './assets/home/logo';
import IconPhone from './assets/home/phone.svg'
import './styles/base.scss'

function App() {
  return (
    <AppProvider>
      <div className="app">
        <div className='app-top'>
          <span className='app-top__logo'><IconLogo /></span>
          <div className='app-top__contact'>
            <span className='app-top__question'>¿Tienes alguna duda?</span>
            <div className='app-top__phone'>
              <img src={IconPhone} alt="icon-phone" />
              <span className='contact-number'>(01) 411 6001</span>
              <span className='contact-text'>Llámanos</span>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </AppProvider>
  );
}

export default App;
