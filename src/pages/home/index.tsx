import FormCotizar from '../../components/home/FormCotizar';
import HomeLeft from './HomeLeft';

const PageHome = () => (
    <div className='home'>
        <div className='home-left'>
            <HomeLeft />
        </div>
        <div className='home-right'>
            <FormCotizar />
        </div>
    </div>
)

export default PageHome