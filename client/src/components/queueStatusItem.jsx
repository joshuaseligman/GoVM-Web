import queueStyles from './../styles/queue.module.scss'
import QueueContext from './queueSelectionContext'


const QueueStatusItem = () => {

    return (
        <QueueContext.Consumer>
            {({selectedProg, updateProg}) => (
                (Object.keys(selectedProg).length > 0) ?
                    <div id={queueStyles.statusItem} className={queueStyles.queueSection}>
                        <p>Id: {selectedProg.id}</p>
                        <p>Name: {selectedProg.progName}</p>
                        <p>Date Created: {selectedProg.created.substring(0, 10)}</p>
                        <p>Time Created: {selectedProg.created.substring(11, 19)}</p>
                    </div>
                :   <div id={queueStyles.statusItem} className={queueStyles.queueSection}>
                        <p>Select a program in the queue to view more details.</p>
                    </div>

            )}
        </QueueContext.Consumer>
    )
}

export default QueueStatusItem