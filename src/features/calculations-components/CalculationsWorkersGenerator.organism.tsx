import React, {useMemo, useState} from 'react'
import {handleWorkerAmountChange, selectExpectedWorkersAmount} from '@/features/workers/workersSlice'
import {WorkerAmountChangeActionEnum} from '@/features/workers/workers.types'
import CalculationsWorkerSwitchMolecule from '@/features/calculations-components/CalculationsWorkerSwitch.molecule'
import {
    constructWorkerNameByOrderIndex,
    getValidatedAndCorrectRequestedWorkersAmount
} from '@/features/workers/workers.api'
import {useAppDispatch, useAppSelector} from '@/core/store.core'
import {MAX_WORKERS_LIMIT} from '@/utils-and-constants.core'



const CalculationsWorkersGeneratorOrganism = (): JSX.Element => {

    const workerExpectedAmount = useAppSelector(selectExpectedWorkersAmount)

    const dispatch = useAppDispatch()

    const [newWorkersAmount, setNewWorkersAmount] = useState(1)

    const workersAmountArray = useMemo(() => Array(workerExpectedAmount.amount).fill(undefined), [workerExpectedAmount])


    return (<>
        <button
            disabled={workerExpectedAmount.amount === MAX_WORKERS_LIMIT}
            onClick={() => dispatch(handleWorkerAmountChange({amountChangeAction: WorkerAmountChangeActionEnum.addOne}))}>Add
            new
            Worker +
        </button>
        <button
            disabled={workerExpectedAmount.amount === 0}
            onClick={() => dispatch(handleWorkerAmountChange({amountChangeAction: WorkerAmountChangeActionEnum.removeLast}))}>Remove
            last Worker -
        </button>

        <br/>
        <input
            type={'number'}
            value={newWorkersAmount}
            onInput={(e) => setNewWorkersAmount(getValidatedAndCorrectRequestedWorkersAmount(e.currentTarget.value))}
        />
        <button onClick={() => dispatch(handleWorkerAmountChange({
            amountChangeAction: WorkerAmountChangeActionEnum.setAmount,
            amount: newWorkersAmount
        }))}>
            Set specific Workers amount
        </button>
        <br/>
        <button onClick={() => dispatch(handleWorkerAmountChange({
            amountChangeAction: WorkerAmountChangeActionEnum.setAmount,
            amount: MAX_WORKERS_LIMIT
        }))}>
            Set Workers amount equals to yours CPU cores amount
        </button>
        <br/><br/>

        {workersAmountArray.map((_, index) =>
            <CalculationsWorkerSwitchMolecule
                workerKey={{
                    workerName: constructWorkerNameByOrderIndex(index + 1),
                    fileName: 'calculations-worker.js'
                }}
                key={index}
            />)}
    </>)
}

export default CalculationsWorkersGeneratorOrganism
