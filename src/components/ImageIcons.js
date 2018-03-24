import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import ImageAddAPhoto from "material-ui/svg-icons/image/add-a-photo";
import ImageExposurePlus2 from "material-ui/svg-icons/image/exposure-plus-2";
import ImageMonochromePhotos from "material-ui/svg-icons/image/monochrome-photos";
import ImageAddToPhotos from "material-ui/svg-icons/image/add-to-photos";
import ImageExposureZero from "material-ui/svg-icons/image/exposure-zero";
import ImageMovieCreation from "material-ui/svg-icons/image/movie-creation";
import ImageAdjust from "material-ui/svg-icons/image/adjust";
import ImageExposure from "material-ui/svg-icons/image/exposure";
import ImageMovieFilter from "material-ui/svg-icons/image/movie-filter";
import ImageAssistantPhoto from "material-ui/svg-icons/image/assistant-photo";
import ImageFilter1 from "material-ui/svg-icons/image/filter-1";
import ImageMusicNote from "material-ui/svg-icons/image/music-note";
import ImageAssistant from "material-ui/svg-icons/image/assistant";
import ImageFilter2 from "material-ui/svg-icons/image/filter-2";
import ImageNaturePeople from "material-ui/svg-icons/image/nature-people";
import ImageAudiotrack from "material-ui/svg-icons/image/audiotrack";
import ImageFilter3 from "material-ui/svg-icons/image/filter-3";
import ImageNature from "material-ui/svg-icons/image/nature";
import ImageBlurCircular from "material-ui/svg-icons/image/blur-circular";
import ImageFilter4 from "material-ui/svg-icons/image/filter-4";
import ImageNavigateBefore from "material-ui/svg-icons/image/navigate-before";
import ImageBlurLinear from "material-ui/svg-icons/image/blur-linear";
import ImageFilter5 from "material-ui/svg-icons/image/filter-5";
import ImageNavigateNext from "material-ui/svg-icons/image/navigate-next";
import ImageBlurOff from "material-ui/svg-icons/image/blur-off";
import ImageFilter6 from "material-ui/svg-icons/image/filter-6";
import ImagePalette from "material-ui/svg-icons/image/palette";
import ImageBlurOn from "material-ui/svg-icons/image/blur-on";
import ImageFilter7 from "material-ui/svg-icons/image/filter-7";
import ImagePanoramaFishEye from "material-ui/svg-icons/image/panorama-fish-eye";
import ImageBrightness1 from "material-ui/svg-icons/image/brightness-1";
import ImageFilter8 from "material-ui/svg-icons/image/filter-8";
import ImagePanoramaHorizontal from "material-ui/svg-icons/image/panorama-horizontal";
import ImageBrightness2 from "material-ui/svg-icons/image/brightness-2";
import ImageFilter9Plus from "material-ui/svg-icons/image/filter-9-plus";
import ImagePanoramaVertical from "material-ui/svg-icons/image/panorama-vertical";
import ImageBrightness3 from "material-ui/svg-icons/image/brightness-3";
import ImageFilter9 from "material-ui/svg-icons/image/filter-9";
import ImagePanoramaWideAngle from "material-ui/svg-icons/image/panorama-wide-angle";
import ImageBrightness4 from "material-ui/svg-icons/image/brightness-4";
import ImageFilterBAndW from "material-ui/svg-icons/image/filter-b-and-w";
import ImagePanorama from "material-ui/svg-icons/image/panorama";
import ImageBrightness5 from "material-ui/svg-icons/image/brightness-5";
import ImageFilterCenterFocus from "material-ui/svg-icons/image/filter-center-focus";
import ImagePhotoAlbum from "material-ui/svg-icons/image/photo-album";
import ImageBrightness6 from "material-ui/svg-icons/image/brightness-6";
import ImageFilterDrama from "material-ui/svg-icons/image/filter-drama";
import ImagePhotoCamera from "material-ui/svg-icons/image/photo-camera";
import ImageBrightness7 from "material-ui/svg-icons/image/brightness-7";
import ImageFilterFrames from "material-ui/svg-icons/image/filter-frames";
import ImagePhotoFilter from "material-ui/svg-icons/image/photo-filter";
import ImageBrokenImage from "material-ui/svg-icons/image/broken-image";
import ImageFilterHdr from "material-ui/svg-icons/image/filter-hdr";
import ImagePhotoLibrary from "material-ui/svg-icons/image/photo-library";
import ImageBrush from "material-ui/svg-icons/image/brush";
import ImageFilterNone from "material-ui/svg-icons/image/filter-none";
import ImagePhotoSizeSelectActual from "material-ui/svg-icons/image/photo-size-select-actual";
import ImageBurstMode from "material-ui/svg-icons/image/burst-mode";
import ImageFilterTiltShift from "material-ui/svg-icons/image/filter-tilt-shift";
import ImagePhotoSizeSelectLarge from "material-ui/svg-icons/image/photo-size-select-large";
import ImageCameraAlt from "material-ui/svg-icons/image/camera-alt";
import ImageFilterVintage from "material-ui/svg-icons/image/filter-vintage";
import ImagePhotoSizeSelectSmall from "material-ui/svg-icons/image/photo-size-select-small";
import ImageCameraFront from "material-ui/svg-icons/image/camera-front";
import ImageFilter from "material-ui/svg-icons/image/filter";
import ImagePhoto from "material-ui/svg-icons/image/photo";
import ImageCameraRear from "material-ui/svg-icons/image/camera-rear";
import ImageFlare from "material-ui/svg-icons/image/flare";
import ImagePictureAsPdf from "material-ui/svg-icons/image/picture-as-pdf";
import ImageCameraRoll from "material-ui/svg-icons/image/camera-roll";
import ImageFlashAuto from "material-ui/svg-icons/image/flash-auto";
import ImagePortrait from "material-ui/svg-icons/image/portrait";
import ImageCamera from "material-ui/svg-icons/image/camera";
import ImageFlashOff from "material-ui/svg-icons/image/flash-off";
import ImageRemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import ImageCenterFocusStrong from "material-ui/svg-icons/image/center-focus-strong";
import ImageFlashOn from "material-ui/svg-icons/image/flash-on";
import ImageRotate90DegreesCcw from "material-ui/svg-icons/image/rotate-90-degrees-ccw";
import ImageCenterFocusWeak from "material-ui/svg-icons/image/center-focus-weak";
import ImageFlip from "material-ui/svg-icons/image/flip";
import ImageRotateLeft from "material-ui/svg-icons/image/rotate-left";
import ImageCollectionsBookmark from "material-ui/svg-icons/image/collections-bookmark";
import ImageGradient from "material-ui/svg-icons/image/gradient";
import ImageRotateRight from "material-ui/svg-icons/image/rotate-right";
import ImageCollections from "material-ui/svg-icons/image/collections";
import ImageGrain from "material-ui/svg-icons/image/grain";
import ImageSlideshow from "material-ui/svg-icons/image/slideshow";
import ImageColorLens from "material-ui/svg-icons/image/color-lens";
import ImageGridOff from "material-ui/svg-icons/image/grid-off";
import ImageStraighten from "material-ui/svg-icons/image/straighten";
import ImageColorize from "material-ui/svg-icons/image/colorize";
import ImageGridOn from "material-ui/svg-icons/image/grid-on";
import ImageStyle from "material-ui/svg-icons/image/style";
import ImageCompare from "material-ui/svg-icons/image/compare";
import ImageHdrOff from "material-ui/svg-icons/image/hdr-off";
import ImageSwitchCamera from "material-ui/svg-icons/image/switch-camera";
import ImageControlPointDuplicate from "material-ui/svg-icons/image/control-point-duplicate";
import ImageHdrOn from "material-ui/svg-icons/image/hdr-on";
import ImageSwitchVideo from "material-ui/svg-icons/image/switch-video";
import ImageControlPoint from "material-ui/svg-icons/image/control-point";
import ImageHdrStrong from "material-ui/svg-icons/image/hdr-strong";
import ImageTagFaces from "material-ui/svg-icons/image/tag-faces";
import ImageCrop169 from "material-ui/svg-icons/image/crop-16-9";
import ImageHdrWeak from "material-ui/svg-icons/image/hdr-weak";
import ImageTexture from "material-ui/svg-icons/image/texture";
import ImageCrop32 from "material-ui/svg-icons/image/crop-3-2";
import ImageHealing from "material-ui/svg-icons/image/healing";
import ImageTimelapse from "material-ui/svg-icons/image/timelapse";
import ImageCrop54 from "material-ui/svg-icons/image/crop-5-4";
import ImageImageAspectRatio from "material-ui/svg-icons/image/image-aspect-ratio";
import ImageTimer10 from "material-ui/svg-icons/image/timer-10";
import ImageCrop75 from "material-ui/svg-icons/image/crop-7-5";
import ImageImage from "material-ui/svg-icons/image/image";
import ImageTimer3 from "material-ui/svg-icons/image/timer-3";
import ImageCropDin from "material-ui/svg-icons/image/crop-din";
import ImageIso from "material-ui/svg-icons/image/iso";
import ImageTimerOff from "material-ui/svg-icons/image/timer-off";
import ImageCropFree from "material-ui/svg-icons/image/crop-free";
import ImageLandscape from "material-ui/svg-icons/image/landscape";
import ImageTimer from "material-ui/svg-icons/image/timer";
import ImageCropLandscape from "material-ui/svg-icons/image/crop-landscape";
import ImageLeakAdd from "material-ui/svg-icons/image/leak-add";
import ImageTonality from "material-ui/svg-icons/image/tonality";
import ImageCropOriginal from "material-ui/svg-icons/image/crop-original";
import ImageLeakRemove from "material-ui/svg-icons/image/leak-remove";
import ImageTransform from "material-ui/svg-icons/image/transform";
import ImageCropPortrait from "material-ui/svg-icons/image/crop-portrait";
import ImageLens from "material-ui/svg-icons/image/lens";
import ImageTune from "material-ui/svg-icons/image/tune";
import ImageCropRotate from "material-ui/svg-icons/image/crop-rotate";
import ImageLinkedCamera from "material-ui/svg-icons/image/linked-camera";
import ImageViewComfy from "material-ui/svg-icons/image/view-comfy";
import ImageCropSquare from "material-ui/svg-icons/image/crop-square";
import ImageLooks3 from "material-ui/svg-icons/image/looks-3";
import ImageViewCompact from "material-ui/svg-icons/image/view-compact";
import ImageCrop from "material-ui/svg-icons/image/crop";
import ImageLooks4 from "material-ui/svg-icons/image/looks-4";
import ImageVignette from "material-ui/svg-icons/image/vignette";
import ImageDehaze from "material-ui/svg-icons/image/dehaze";
import ImageLooks5 from "material-ui/svg-icons/image/looks-5";
import ImageWbAuto from "material-ui/svg-icons/image/wb-auto";
import ImageDetails from "material-ui/svg-icons/image/details";
import ImageLooks6 from "material-ui/svg-icons/image/looks-6";
import ImageWbCloudy from "material-ui/svg-icons/image/wb-cloudy";
import ImageEdit from "material-ui/svg-icons/image/edit";
import ImageLooksOne from "material-ui/svg-icons/image/looks-one";
import ImageWbIncandescent from "material-ui/svg-icons/image/wb-incandescent";
import ImageExposureNeg1 from "material-ui/svg-icons/image/exposure-neg-1";
import ImageLooksTwo from "material-ui/svg-icons/image/looks-two";
import ImageWbIridescent from "material-ui/svg-icons/image/wb-iridescent";
import ImageExposureNeg2 from "material-ui/svg-icons/image/exposure-neg-2";
import ImageLooks from "material-ui/svg-icons/image/looks";
import ImageWbSunny from "material-ui/svg-icons/image/wb-sunny";
import ImageExposurePlus1 from "material-ui/svg-icons/image/exposure-plus-1";
import ImageLoupe from "material-ui/svg-icons/image/loupe";

const components = [
  "add-a-photo",
  "exposure-plus-2",
  "monochrome-photos",
  "add-to-photos",
  "exposure-zero",
  "movie-creation",
  "adjust",
  "exposure",
  "movie-filter",
  "assistant-photo",
  "filter-1",
  "music-note",
  "assistant",
  "filter-2",
  "nature-people",
  "audiotrack",
  "filter-3",
  "nature",
  "blur-circular",
  "filter-4",
  "navigate-before",
  "blur-linear",
  "filter-5",
  "navigate-next",
  "blur-off",
  "filter-6",
  "palette",
  "blur-on",
  "filter-7",
  "panorama-fish-eye",
  "brightness-1",
  "filter-8",
  "panorama-horizontal",
  "brightness-2",
  "filter-9-plus",
  "panorama-vertical",
  "brightness-3",
  "filter-9",
  "panorama-wide-angle",
  "brightness-4",
  "filter-b-and-w",
  "panorama",
  "brightness-5",
  "filter-center-focus",
  "photo-album",
  "brightness-6",
  "filter-drama",
  "photo-camera",
  "brightness-7",
  "filter-frames",
  "photo-filter",
  "broken-image",
  "filter-hdr",
  "photo-library",
  "brush",
  "filter-none",
  "photo-size-select-actual",
  "burst-mode",
  "filter-tilt-shift",
  "photo-size-select-large",
  "camera-alt",
  "filter-vintage",
  "photo-size-select-small",
  "camera-front",
  "filter",
  "photo",
  "camera-rear",
  "flare",
  "picture-as-pdf",
  "camera-roll",
  "flash-auto",
  "portrait",
  "camera",
  "flash-off",
  "remove-red-eye",
  "center-focus-strong",
  "flash-on",
  "rotate-90-degrees-ccw",
  "center-focus-weak",
  "flip",
  "rotate-left",
  "collections-bookmark",
  "gradient",
  "rotate-right",
  "collections",
  "grain",
  "slideshow",
  "color-lens",
  "grid-off",
  "straighten",
  "colorize",
  "grid-on",
  "style",
  "compare",
  "hdr-off",
  "switch-camera",
  "control-point-duplicate",
  "hdr-on",
  "switch-video",
  "control-point",
  "hdr-strong",
  "tag-faces",
  "crop-16-9",
  "hdr-weak",
  "texture",
  "crop-3-2",
  "healing",
  "timelapse",
  "crop-5-4",
  "image-aspect-ratio",
  "timer-10",
  "crop-7-5",
  "image",
  "timer-3",
  "crop-din",
  "iso",
  "timer-off",
  "crop-free",
  "landscape",
  "timer",
  "crop-landscape",
  "leak-add",
  "tonality",
  "crop-original",
  "leak-remove",
  "transform",
  "crop-portrait",
  "lens",
  "tune",
  "crop-rotate",
  "linked-camera",
  "view-comfy",
  "crop-square",
  "looks-3",
  "view-compact",
  "crop",
  "looks-4",
  "vignette",
  "dehaze",
  "looks-5",
  "wb-auto",
  "details",
  "looks-6",
  "wb-cloudy",
  "edit",
  "looks-one",
  "wb-incandescent",
  "exposure-neg-1",
  "looks-two",
  "wb-iridescent",
  "exposure-neg-2",
  "looks",
  "wb-sunny",
  "exposure-plus-1",
  "loupe"
];

class ImageIcons extends Component {
  render() {
    let items = components.map((path, index) => {
      const base = `${this.props.match.url}`.substr(1);
      const fullPath = `${base}/${path}`;
      return (
        <Item
          key={index}
          path={fullPath}
          primaryText={fullPath}
          secondaryText={fullPath}
        />
      );
    });
    return <List>{items}</List>;
  }
}

export default ImageIcons;
