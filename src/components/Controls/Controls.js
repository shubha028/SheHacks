import {
  CallEnd,
  ExpandLess,
  MicNone,
  MicOffOutlined,
  MoreVert,
  VideocamOffOutlined,
  VideocamOutlined,
} from "@material-ui/icons";
import React from "react";
import { useAppContext } from "../../context/appContext";
import { useRoomContext } from "../../context/videoContext";
import "./styles.css";
import { useClipboard } from "use-clipboard-copy";
import SimpleSnackbar from "../Snackbar/Snackbar";

const Controls = ({ handleLogout, roomName }) => {
  const { videoON, setVideoON, audioON, setAudioON } = useRoomContext();
  const { setSnackbarOpen } = useAppContext();

  const clipboard = useClipboard();

  const handleCopyRoomName = () => {
    clipboard.copy(roomName);
    setSnackbarOpen(true);
  };

  const toogleVideoState = () => {
    setVideoON(!videoON);
  };

  const toogleAudioState = () => {
    setAudioON(!audioON);
  };

  return (
    <>
      <SimpleSnackbar />
      <div className="controls">
        <div className="details_control" onClick={handleCopyRoomName}>
          <p>Meeting Details</p>
          <ExpandLess />
        </div>

        <div className="video-audio_controls">
          <div
            className={`control_btnContainer ${!audioON && "red-bg"}`}
            onClick={toogleAudioState}
          >
            {audioON ? (
              <MicNone className="control-icon" />
            ) : (
              <MicOffOutlined className="control-icon" />
            )}
          </div>
          <div className="control_btnContainer" onClick={handleLogout}>
            <CallEnd className="control-icon end-meet" />
          </div>

          <div
            className={`control_btnContainer ${!videoON && "red-bg"}`}
            onClick={toogleVideoState}
          >
            {videoON ? (
              <VideocamOutlined className="control-icon" />
            ) : (
              <VideocamOffOutlined className="control-icon" />
            )}
          </div>
        </div>
        <MoreVert className="more-icon" />
      </div>
    </>
  );
};

export default Controls;
