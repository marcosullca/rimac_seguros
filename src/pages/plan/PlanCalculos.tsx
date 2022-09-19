import React from 'react'
import CounterArmaTuPlan from '../../components/plan/CounterArmaTuPlan';

const PlanCalculos = () => {
    return (
        <div className='plan-calculos'>
            <section>
                <div className='plan-calculos__title'>Indica la suma asegurada</div>
                <div className='plan-calculos__minmax'>
                    <div className='plan-calculos__min'>MIN $12,500</div>
                    <div className='plan-calculos__max'>MAX $16,500</div>
                </div>
            </section>
            <div className='plan-calculos-counter'>
                <CounterArmaTuPlan />
            </div>
        </div>
    )
}

export default PlanCalculos