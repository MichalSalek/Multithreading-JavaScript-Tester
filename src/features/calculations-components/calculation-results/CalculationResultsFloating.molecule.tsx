import React, {useState} from 'react'
import scss from './CalculationResults.molecule.module.scss'
import {
    NamedWorkerReadyStatusType,
    NamedWorkerWorkStatusType,
    WorkerNameType,
    WorkersAmountStateType,
    WorkersJobsType
} from '@/features/workers/workers.types'
import {DraggableItemComposition} from '@/features/draggable-item/DraggableItem.composition'
import {useAppSelector} from '@/core/store.core'
import {
    selectActuallyWorkingWorkersAmount,
    selectExpectedWorkersAmount,
    selectWholeWorkersReadyState,
    selectWholeWorkersWorkState
} from '@/features/workers/workersSlice'
import {selectLastSocketResponseData} from '@/features/socket-client/socketSlice'
import {MAIN_THREAD_KEY} from '@/utils-and-constants.core'



const CalculationResultsFloatingMolecule = (): JSX.Element => {

    // Instant get a requested amount of workers
    //
    const workerExpectedAmount: WorkersAmountStateType = useAppSelector(selectExpectedWorkersAmount)


    // Listening to worker's READY state
    //
    const allWorkersReadyStatuses: NamedWorkerReadyStatusType = useAppSelector(selectWholeWorkersReadyState)


    // Listening to worker's WORK state
    //
    const allWorkersWorkStatuses: NamedWorkerWorkStatusType = useAppSelector(selectWholeWorkersWorkState)
    const allActuallyWorkWorkersAmount: WorkersAmountStateType = useAppSelector(selectActuallyWorkingWorkersAmount)


    // Listening to messages stream from a Socket
    //
    const receivedSocketResponse: WorkersJobsType = useAppSelector(selectLastSocketResponseData)


    const [shouldShowDeactivated, setShouldShowDeactivated] = useState(false)


    const workerHasResponseData = (workerName: WorkerNameType) => receivedSocketResponse && receivedSocketResponse[workerName]


    return (
        <DraggableItemComposition initialPosition={{x: 500, y: 300}}>
            <section className={`${scss.host} display-inline-block`}>
                <h4>Calculation results:</h4> <span>Show all, even currently deactivated: </span><input
                    type={'checkbox'} checked={shouldShowDeactivated}
                    onChange={(event => setShouldShowDeactivated(event.currentTarget.checked))}/>
                <h5>Required number of workers: {workerExpectedAmount.amount}</h5>
                <h5>Workers who actually work: {allActuallyWorkWorkersAmount.amount}</h5>

                <p className={scss.mainThread}>
                    <span>{MAIN_THREAD_KEY.workerName}:</span>

                    <span>{
                        Object.keys(receivedSocketResponse)
                            .map((workerName: WorkerNameType) =>
                                workerName === MAIN_THREAD_KEY.workerName && String(receivedSocketResponse[workerName].amount))
                    }</span>

                </p>

                <ol className={[scss.listGrid, (() => (shouldShowDeactivated || workerExpectedAmount.amount > 0) ? '' : 'display-none')()].join(' ')}>

                    {Object.keys(allWorkersReadyStatuses)
                        .filter((workerName: WorkerNameType) => { // showDeactivated checkbox handling here
                            if (shouldShowDeactivated) {
                                return true
                            } else {
                                return allWorkersReadyStatuses[workerName].ready
                            }
                        })
                        .map((workerName: WorkerNameType, index) =>
                            <li key={index} className={[scss.worker].join(' ')}>

                                <span className={scss.smallAndBoldHeading}>

                                    <span className={scss.labelInfo}>
                                        {workerName} {allWorkersReadyStatuses[workerName].ready ?
                                            <strong>Ready!</strong> :
                                            <span>OFF</span>
                                        }
                                    </span>

                                </span>


                                <ul className={scss.listReset}>
                                    <li className={(() => allWorkersWorkStatuses[workerName]?.working ? '' : scss.labelInfo)()}>

                                        {workerHasResponseData(workerName) &&
                                        <strong>[{String(receivedSocketResponse[workerName].amount)}] </strong>
                                        }

                                        <span>
                                            {!workerHasResponseData(workerName) ?
                                                'No work yet' :
                                                'Already made'
                                            }
                                        </span>

                                    </li>

                                </ul>
                            </li>
                        )}

                </ol>
            </section>
        </DraggableItemComposition>
    )
}

export default CalculationResultsFloatingMolecule
