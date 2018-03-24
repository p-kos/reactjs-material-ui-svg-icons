import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import AvAddToQueue from "material-ui/svg-icons/av/add-to-queue";
import AvForward30 from "material-ui/svg-icons/av/forward-30";
import AvPause from "material-ui/svg-icons/av/pause";
import AvSkipNext from "material-ui/svg-icons/av/skip-next";
import AvAirplay from "material-ui/svg-icons/av/airplay";
import AvForward5 from "material-ui/svg-icons/av/forward-5";
import AvPlayArrow from "material-ui/svg-icons/av/play-arrow";
import AvSkipPrevious from "material-ui/svg-icons/av/skip-previous";
import AvAlbum from "material-ui/svg-icons/av/album";
import AvGames from "material-ui/svg-icons/av/games";
import AvPlayCircleFilled from "material-ui/svg-icons/av/play-circle-filled";
import AvSlowMotionVideo from "material-ui/svg-icons/av/slow-motion-video";
import AvArtTrack from "material-ui/svg-icons/av/art-track";
import AvHd from "material-ui/svg-icons/av/hd";
import AvPlayCircleOutline from "material-ui/svg-icons/av/play-circle-outline";
import AvSnooze from "material-ui/svg-icons/av/snooze";
import AvAvTimer from "material-ui/svg-icons/av/av-timer";
import AvHearing from "material-ui/svg-icons/av/hearing";
import AvPlaylistAddCheck from "material-ui/svg-icons/av/playlist-add-check";
import AvSortByAlpha from "material-ui/svg-icons/av/sort-by-alpha";
import AvBrandingWatermark from "material-ui/svg-icons/av/branding-watermark";
import AvHighQuality from "material-ui/svg-icons/av/high-quality";
import AvPlaylistAdd from "material-ui/svg-icons/av/playlist-add";
import AvStop from "material-ui/svg-icons/av/stop";
import AvCallToAction from "material-ui/svg-icons/av/call-to-action";
import AvLibraryAdd from "material-ui/svg-icons/av/library-add";
import AvPlaylistPlay from "material-ui/svg-icons/av/playlist-play";
import AvSubscriptions from "material-ui/svg-icons/av/subscriptions";
import AvClosedCaption from "material-ui/svg-icons/av/closed-caption";
import AvLibraryBooks from "material-ui/svg-icons/av/library-books";
import AvQueueMusic from "material-ui/svg-icons/av/queue-music";
import AvSubtitles from "material-ui/svg-icons/av/subtitles";
import AvEqualizer from "material-ui/svg-icons/av/equalizer";
import AvLibraryMusic from "material-ui/svg-icons/av/library-music";
import AvQueuePlayNext from "material-ui/svg-icons/av/queue-play-next";
import AvSurroundSound from "material-ui/svg-icons/av/surround-sound";
import AvExplicit from "material-ui/svg-icons/av/explicit";
import AvLoop from "material-ui/svg-icons/av/loop";
import AvQueue from "material-ui/svg-icons/av/queue";
import AvVideoCall from "material-ui/svg-icons/av/video-call";
import AvFastForward from "material-ui/svg-icons/av/fast-forward";
import AvMicNone from "material-ui/svg-icons/av/mic-none";
import AvRadio from "material-ui/svg-icons/av/radio";
import AvVideoLabel from "material-ui/svg-icons/av/video-label";
import AvFastRewind from "material-ui/svg-icons/av/fast-rewind";
import AvMicOff from "material-ui/svg-icons/av/mic-off";
import AvRecentActors from "material-ui/svg-icons/av/recent-actors";
import AvVideoLibrary from "material-ui/svg-icons/av/video-library";
import AvFeaturedPlayList from "material-ui/svg-icons/av/featured-play-list";
import AvMic from "material-ui/svg-icons/av/mic";
import AvRemoveFromQueue from "material-ui/svg-icons/av/remove-from-queue";
import AvVideocamOff from "material-ui/svg-icons/av/videocam-off";
import AvFeaturedVideo from "material-ui/svg-icons/av/featured-video";
import AvMovie from "material-ui/svg-icons/av/movie";
import AvRepeatOne from "material-ui/svg-icons/av/repeat-one";
import AvVideocam from "material-ui/svg-icons/av/videocam";
import AvFiberDvr from "material-ui/svg-icons/av/fiber-dvr";
import AvMusicVideo from "material-ui/svg-icons/av/music-video";
import AvRepeat from "material-ui/svg-icons/av/repeat";
import AvVolumeDown from "material-ui/svg-icons/av/volume-down";
import AvFiberManualRecord from "material-ui/svg-icons/av/fiber-manual-record";
import AvNewReleases from "material-ui/svg-icons/av/new-releases";
import AvReplay10 from "material-ui/svg-icons/av/replay-10";
import AvVolumeMute from "material-ui/svg-icons/av/volume-mute";
import AvFiberNew from "material-ui/svg-icons/av/fiber-new";
import AvNotInterested from "material-ui/svg-icons/av/not-interested";
import AvReplay30 from "material-ui/svg-icons/av/replay-30";
import AvVolumeOff from "material-ui/svg-icons/av/volume-off";
import AvFiberPin from "material-ui/svg-icons/av/fiber-pin";
import AvNote from "material-ui/svg-icons/av/note";
import AvReplay5 from "material-ui/svg-icons/av/replay-5";
import AvVolumeUp from "material-ui/svg-icons/av/volume-up";
import AvFiberSmartRecord from "material-ui/svg-icons/av/fiber-smart-record";
import AvPauseCircleFilled from "material-ui/svg-icons/av/pause-circle-filled";
import AvReplay from "material-ui/svg-icons/av/replay";
import AvWebAsset from "material-ui/svg-icons/av/web-asset";
import AvForward10 from "material-ui/svg-icons/av/forward-10";
import AvPauseCircleOutline from "material-ui/svg-icons/av/pause-circle-outline";
import AvShuffle from "material-ui/svg-icons/av/shuffle";
import AvWeb from "material-ui/svg-icons/av/web";

const components = [
  "material-ui/svg-icons/av/add-to-queue",
  "material-ui/svg-icons/av/forward-30",
  "material-ui/svg-icons/av/pause",
  "material-ui/svg-icons/av/skip-next",
  "material-ui/svg-icons/av/airplay",
  "material-ui/svg-icons/av/forward-5",
  "material-ui/svg-icons/av/play-arrow",
  "material-ui/svg-icons/av/skip-previous",
  "material-ui/svg-icons/av/album",
  "material-ui/svg-icons/av/games",
  "material-ui/svg-icons/av/play-circle-filled",
  "material-ui/svg-icons/av/slow-motion-video",
  "material-ui/svg-icons/av/art-track",
  "material-ui/svg-icons/av/hd",
  "material-ui/svg-icons/av/play-circle-outline",
  "material-ui/svg-icons/av/snooze",
  "material-ui/svg-icons/av/av-timer",
  "material-ui/svg-icons/av/hearing",
  "material-ui/svg-icons/av/playlist-add-check",
  "material-ui/svg-icons/av/sort-by-alpha",
  "material-ui/svg-icons/av/branding-watermark",
  "material-ui/svg-icons/av/high-quality",
  "material-ui/svg-icons/av/playlist-add",
  "material-ui/svg-icons/av/stop",
  "material-ui/svg-icons/av/call-to-action",
  "material-ui/svg-icons/av/library-add",
  "material-ui/svg-icons/av/playlist-play",
  "material-ui/svg-icons/av/subscriptions",
  "material-ui/svg-icons/av/closed-caption",
  "material-ui/svg-icons/av/library-books",
  "material-ui/svg-icons/av/queue-music",
  "material-ui/svg-icons/av/subtitles",
  "material-ui/svg-icons/av/equalizer",
  "material-ui/svg-icons/av/library-music",
  "material-ui/svg-icons/av/queue-play-next",
  "material-ui/svg-icons/av/surround-sound",
  "material-ui/svg-icons/av/explicit",
  "material-ui/svg-icons/av/loop",
  "material-ui/svg-icons/av/queue",
  "material-ui/svg-icons/av/video-call",
  "material-ui/svg-icons/av/fast-forward",
  "material-ui/svg-icons/av/mic-none",
  "material-ui/svg-icons/av/radio",
  "material-ui/svg-icons/av/video-label",
  "material-ui/svg-icons/av/fast-rewind",
  "material-ui/svg-icons/av/mic-off",
  "material-ui/svg-icons/av/recent-actors",
  "material-ui/svg-icons/av/video-library",
  "material-ui/svg-icons/av/featured-play-list",
  "material-ui/svg-icons/av/mic",
  "material-ui/svg-icons/av/remove-from-queue",
  "material-ui/svg-icons/av/videocam-off",
  "material-ui/svg-icons/av/featured-video",
  "material-ui/svg-icons/av/movie",
  "material-ui/svg-icons/av/repeat-one",
  "material-ui/svg-icons/av/videocam",
  "material-ui/svg-icons/av/fiber-dvr",
  "material-ui/svg-icons/av/music-video",
  "material-ui/svg-icons/av/repeat",
  "material-ui/svg-icons/av/volume-down",
  "material-ui/svg-icons/av/fiber-manual-record",
  "material-ui/svg-icons/av/new-releases",
  "material-ui/svg-icons/av/replay-10",
  "material-ui/svg-icons/av/volume-mute",
  "material-ui/svg-icons/av/fiber-new",
  "material-ui/svg-icons/av/not-interested",
  "material-ui/svg-icons/av/replay-30",
  "material-ui/svg-icons/av/volume-off",
  "material-ui/svg-icons/av/fiber-pin",
  "material-ui/svg-icons/av/note",
  "material-ui/svg-icons/av/replay-5",
  "material-ui/svg-icons/av/volume-up",
  "material-ui/svg-icons/av/fiber-smart-record",
  "material-ui/svg-icons/av/pause-circle-filled",
  "material-ui/svg-icons/av/replay",
  "material-ui/svg-icons/av/web-asset",
  "material-ui/svg-icons/av/forward-10",
  "material-ui/svg-icons/av/pause-circle-outline",
  "material-ui/svg-icons/av/shuffle",
  "material-ui/svg-icons/av/web"
];
class AvIcons extends Component {
  render() {
    let items = components.map((path, index) => {
      return (
        <Item key={index} path={path} primaryText={path} secondaryText={path} />
      );
    });
    return <List>{items}</List>;
  }
}

export default AvIcons;
