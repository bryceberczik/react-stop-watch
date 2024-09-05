import "./controls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faTrash,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function Controls({
  active,
  paused,
  handlePauseResume,
  handleReset,
  handleArchive
}) {
  return (
    <div className="container">
      <div className="controls-container">
        <div className="pauseResume">
          {active && !paused ? (
            <FontAwesomeIcon
              icon={faPause}
              className="pause-icon"
              onClick={handlePauseResume}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className="play-icon"
              onClick={handlePauseResume}
            />
          )}
        </div>
        <div className="discard">
          <FontAwesomeIcon
            icon={faTrash}
            className="discard-icon"
            onClick={handleReset}
          />
        </div>
        <div className="archive">
          <FontAwesomeIcon icon={faBoxArchive} className="archive-icon" onClick={handleArchive}/>
        </div>
      </div>
    </div>
  );
}
