import { ReactElement } from 'react';
import PlanStepper from './PlanStepper';
import PlanInfo from './PlanInfo';
import PlanCalculos from './PlanCalculos';
import PlanFooter from './PlanFooter';
import PlanCoberturas from './PlanCoberturas';

const PagePlan = (): ReactElement => {

    return (
        <div className='plan'>
            <PlanStepper />
            <div className='plan-center'>
                <PlanInfo />
                <PlanCalculos />
                <PlanCoberturas />
            </div>
            <div className='plan-footer'>
                <PlanFooter />
            </div>
        </div>
    )
}

export default PagePlan