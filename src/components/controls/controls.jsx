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
        <div className="pauseResume" onClick={handlePauseResume}>
          {active && !paused ? (
            <FontAwesomeIcon
              icon={faPause}
              className="pause-icon"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className="play-icon"
            />
          )}
        </div>
        <div className="discard" onClick={handleReset}>
          <FontAwesomeIcon
            icon={faTrash}
            className="discard-icon"
          />
        </div>
        <div className="archive" onClick={handleArchive}>
          <FontAwesomeIcon icon={faBoxArchive} className="archive-icon"/>
        </div>
      </div>
    </div>
  );
}
