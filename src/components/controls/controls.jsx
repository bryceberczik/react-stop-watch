import './controls.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Controls() {

    return (

        <div className="container">
            <div className="controls-container">

                <div className="pause">
                <FontAwesomeIcon icon={faPlay} className='play-icon'/>
                </div>
                <div className="discard">
                <FontAwesomeIcon icon={faTrash} className='discard-icon'/>
                </div>
                <div className="archive">
                <FontAwesomeIcon icon={faBoxArchive} className='archive-icon' />
                </div>
            </div>
        </div>
    )
}