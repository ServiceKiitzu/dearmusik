import YouTube from "react-youtube";
import screenfull from "screenfull";

const Youtube = ({ videoId }) => {
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      enablejsapi: 1,
      disablekb: 1,
      loop: 0,
      playsinline: 0,
      rel: 0,
      fs: 1,
    },
  };
  function fullScreen(e) {
    const iframe = e.target.getIframe();
    if (screenfull.isEnabled) {
      screenfull.request(iframe);
    }
  }

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={_onReady}
      onPlay={fullScreen}
      id="ytComps"
    />
  );
};

export default Youtube;
