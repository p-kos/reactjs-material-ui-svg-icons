import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import ActionAccessibility from "material-ui/svg-icons/action/accessibility";
import ActionAccessible from "material-ui/svg-icons/action/accessible";
import ActionAccountBalanceWallet from "material-ui/svg-icons/action/account-balance-wallet";
import ActionAccountBalance from "material-ui/svg-icons/action/account-balance";
import ActionAccountBox from "material-ui/svg-icons/action/account-box";
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import ActionAddShoppingCart from "material-ui/svg-icons/action/add-shopping-cart";
import ActionAlarmAdd from "material-ui/svg-icons/action/alarm-add";
import ActionAlarmOff from "material-ui/svg-icons/action/alarm-off";
import ActionAlarmOn from "material-ui/svg-icons/action/alarm-on";
import ActionAlarm from "material-ui/svg-icons/action/alarm";
import ActionAllOut from "material-ui/svg-icons/action/all-out";
import ActionAndroid from "material-ui/svg-icons/action/android";
import ActionAnnouncement from "material-ui/svg-icons/action/announcement";
import ActionAspectRatio from "material-ui/svg-icons/action/aspect-ratio";
import ActionAssessment from "material-ui/svg-icons/action/assessment";
import ActionAssignmentInd from "material-ui/svg-icons/action/assignment-ind";
import ActionAssignmentLate from "material-ui/svg-icons/action/assignment-late";
import ActionAssignmentReturn from "material-ui/svg-icons/action/assignment-return";
import ActionAssignmentReturned from "material-ui/svg-icons/action/assignment-returned";
import ActionAssignmentTurnedIn from "material-ui/svg-icons/action/assignment-turned-in";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import ActionAutorenew from "material-ui/svg-icons/action/autorenew";
import ActionBackup from "material-ui/svg-icons/action/backup";
import ActionBook from "material-ui/svg-icons/action/book";
import ActionBookmarkBorder from "material-ui/svg-icons/action/bookmark-border";
import ActionBookmark from "material-ui/svg-icons/action/bookmark";
import ActionBugReport from "material-ui/svg-icons/action/bug-report";
import ActionBuild from "material-ui/svg-icons/action/build";
import ActionCached from "material-ui/svg-icons/action/cached";
import ActionCameraEnhance from "material-ui/svg-icons/action/camera-enhance";
import ActionCardGiftcard from "material-ui/svg-icons/action/card-giftcard";
import ActionCardMembership from "material-ui/svg-icons/action/card-membership";
import ActionCardTravel from "material-ui/svg-icons/action/card-travel";
import ActionChangeHistory from "material-ui/svg-icons/action/change-history";
import ActionCheckCircle from "material-ui/svg-icons/action/check-circle";
import ActionChromeReaderMode from "material-ui/svg-icons/action/chrome-reader-mode";
import ActionClass from "material-ui/svg-icons/action/class";
import ActionCode from "material-ui/svg-icons/action/code";
import ActionCompareArrows from "material-ui/svg-icons/action/compare-arrows";
import ActionCopyright from "material-ui/svg-icons/action/copyright";
import ActionCreditCard from "material-ui/svg-icons/action/credit-card";
import ActionDashboard from "material-ui/svg-icons/action/dashboard";
import ActionDateRange from "material-ui/svg-icons/action/date-range";
import ActionDeleteForever from "material-ui/svg-icons/action/delete-forever";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ActionDescription from "material-ui/svg-icons/action/description";
import ActionDns from "material-ui/svg-icons/action/dns";
import ActionDoneAll from "material-ui/svg-icons/action/done-all";
import ActionDone from "material-ui/svg-icons/action/done";
import ActionDonutLarge from "material-ui/svg-icons/action/donut-large";
import ActionDonutSmall from "material-ui/svg-icons/action/donut-small";
import ActionEject from "material-ui/svg-icons/action/eject";
import ActionEuroSymbol from "material-ui/svg-icons/action/euro-symbol";
import ActionEventSeat from "material-ui/svg-icons/action/event-seat";
import ActionEvent from "material-ui/svg-icons/action/event";
import ActionExitToApp from "material-ui/svg-icons/action/exit-to-app";
import ActionExplore from "material-ui/svg-icons/action/explore";
import ActionExtension from "material-ui/svg-icons/action/extension";
import ActionFace from "material-ui/svg-icons/action/face";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFeedback from "material-ui/svg-icons/action/feedback";
import ActionFindInPage from "material-ui/svg-icons/action/find-in-page";
import ActionFindReplace from "material-ui/svg-icons/action/find-replace";
import ActionFingerprint from "material-ui/svg-icons/action/fingerprint";
import ActionFlightLand from "material-ui/svg-icons/action/flight-land";
import ActionFlightTakeoff from "material-ui/svg-icons/action/flight-takeoff";
import ActionFlipToBack from "material-ui/svg-icons/action/flip-to-back";
import ActionFlipToFront from "material-ui/svg-icons/action/flip-to-front";
import ActionGTranslate from "material-ui/svg-icons/action/g-translate";
import ActionGavel from "material-ui/svg-icons/action/gavel";
import ActionGetApp from "material-ui/svg-icons/action/get-app";
import ActionGif from "material-ui/svg-icons/action/gif";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ActionGroupWork from "material-ui/svg-icons/action/group-work";
import ActionHelpOutline from "material-ui/svg-icons/action/help-outline";
import ActionHelp from "material-ui/svg-icons/action/help";
import ActionHighlightOff from "material-ui/svg-icons/action/highlight-off";
import ActionHistory from "material-ui/svg-icons/action/history";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionHourglassEmpty from "material-ui/svg-icons/action/hourglass-empty";
import ActionHourglassFull from "material-ui/svg-icons/action/hourglass-full";
import ActionHttp from "material-ui/svg-icons/action/http";
import ActionHttps from "material-ui/svg-icons/action/https";
import ActionImportantDevices from "material-ui/svg-icons/action/important-devices";
import ActionInfoOutline from "material-ui/svg-icons/action/info-outline";
import ActionInfo from "material-ui/svg-icons/action/info";
import ActionInput from "material-ui/svg-icons/action/input";
import ActionInvertColors from "material-ui/svg-icons/action/invert-colors";
import ActionLabelOutline from "material-ui/svg-icons/action/label-outline";
import ActionLabel from "material-ui/svg-icons/action/label";
import ActionLanguage from "material-ui/svg-icons/action/language";
import ActionLaunch from "material-ui/svg-icons/action/launch";
import ActionLightbulbOutline from "material-ui/svg-icons/action/lightbulb-outline";
import ActionLineStyle from "material-ui/svg-icons/action/line-style";
import ActionLineWeight from "material-ui/svg-icons/action/line-weight";
import ActionList from "material-ui/svg-icons/action/list";
import ActionLockOpen from "material-ui/svg-icons/action/lock-open";
import ActionLockOutline from "material-ui/svg-icons/action/lock-outline";
import ActionLock from "material-ui/svg-icons/action/lock";
import ActionLoyalty from "material-ui/svg-icons/action/loyalty";
import ActionMarkunreadMailbox from "material-ui/svg-icons/action/markunread-mailbox";
import ActionMotorcycle from "material-ui/svg-icons/action/motorcycle";
import ActionNoteAdd from "material-ui/svg-icons/action/note-add";
import ActionOfflinePin from "material-ui/svg-icons/action/offline-pin";
import ActionOpacity from "material-ui/svg-icons/action/opacity";
import ActionOpenInBrowser from "material-ui/svg-icons/action/open-in-browser";
import ActionOpenInNew from "material-ui/svg-icons/action/open-in-new";
import ActionOpenWith from "material-ui/svg-icons/action/open-with";
import ActionPageview from "material-ui/svg-icons/action/pageview";
import ActionPanTool from "material-ui/svg-icons/action/pan-tool";
import ActionPayment from "material-ui/svg-icons/action/payment";
import ActionPermCameraMic from "material-ui/svg-icons/action/perm-camera-mic";
import ActionPermContactCalendar from "material-ui/svg-icons/action/perm-contact-calendar";
import ActionPermDataSetting from "material-ui/svg-icons/action/perm-data-setting";
import ActionPermDeviceInformation from "material-ui/svg-icons/action/perm-device-information";
import ActionPermIdentity from "material-ui/svg-icons/action/perm-identity";
import ActionPermMedia from "material-ui/svg-icons/action/perm-media";
import ActionPermPhoneMsg from "material-ui/svg-icons/action/perm-phone-msg";
import ActionPermScanWifi from "material-ui/svg-icons/action/perm-scan-wifi";
import ActionPets from "material-ui/svg-icons/action/pets";
import ActionPictureInPictureAlt from "material-ui/svg-icons/action/picture-in-picture-alt";
import ActionPictureInPicture from "material-ui/svg-icons/action/picture-in-picture";
import ActionPlayForWork from "material-ui/svg-icons/action/play-for-work";
import ActionPolymer from "material-ui/svg-icons/action/polymer";
import ActionPowerSettingsNew from "material-ui/svg-icons/action/power-settings-new";
import ActionPregnantWoman from "material-ui/svg-icons/action/pregnant-woman";
import ActionPrint from "material-ui/svg-icons/action/print";
import ActionQueryBuilder from "material-ui/svg-icons/action/query-builder";
import ActionQuestionAnswer from "material-ui/svg-icons/action/question-answer";
import ActionReceipt from "material-ui/svg-icons/action/receipt";
import ActionRecordVoiceOver from "material-ui/svg-icons/action/record-voice-over";
import ActionRedeem from "material-ui/svg-icons/action/redeem";
import ActionRemoveShoppingCart from "material-ui/svg-icons/action/remove-shopping-cart";
import ActionReorder from "material-ui/svg-icons/action/reorder";
import ActionReportProblem from "material-ui/svg-icons/action/report-problem";
import ActionRestorePage from "material-ui/svg-icons/action/restore-page";
import ActionRestore from "material-ui/svg-icons/action/restore";
import ActionRoom from "material-ui/svg-icons/action/room";
import ActionRoundedCorner from "material-ui/svg-icons/action/rounded-corner";
import ActionRowing from "material-ui/svg-icons/action/rowing";
import ActionSchedule from "material-ui/svg-icons/action/schedule";
import ActionSearch from "material-ui/svg-icons/action/search";
import ActionSettingsApplications from "material-ui/svg-icons/action/settings-applications";
import ActionSettingsBackupRestore from "material-ui/svg-icons/action/settings-backup-restore";
import ActionSettingsBluetooth from "material-ui/svg-icons/action/settings-bluetooth";
import ActionSettingsBrightness from "material-ui/svg-icons/action/settings-brightness";
import ActionSettingsCell from "material-ui/svg-icons/action/settings-cell";
import ActionSettingsEthernet from "material-ui/svg-icons/action/settings-ethernet";
import ActionSettingsInputAntenna from "material-ui/svg-icons/action/settings-input-antenna";
import ActionSettingsInputComponent from "material-ui/svg-icons/action/settings-input-component";
import ActionSettingsInputComposite from "material-ui/svg-icons/action/settings-input-composite";
import ActionSettingsInputHdmi from "material-ui/svg-icons/action/settings-input-hdmi";
import ActionSettingsInputSvideo from "material-ui/svg-icons/action/settings-input-svideo";
import ActionSettingsOverscan from "material-ui/svg-icons/action/settings-overscan";
import ActionSettingsPhone from "material-ui/svg-icons/action/settings-phone";
import ActionSettingsPower from "material-ui/svg-icons/action/settings-power";
import ActionSettingsRemote from "material-ui/svg-icons/action/settings-remote";
import ActionSettingsVoice from "material-ui/svg-icons/action/settings-voice";
import ActionSettings from "material-ui/svg-icons/action/settings";
import ActionShopTwo from "material-ui/svg-icons/action/shop-two";
import ActionShop from "material-ui/svg-icons/action/shop";
import ActionShoppingBasket from "material-ui/svg-icons/action/shopping-basket";
import ActionShoppingCart from "material-ui/svg-icons/action/shopping-cart";
import ActionSpeakerNotesOff from "material-ui/svg-icons/action/speaker-notes-off";
import ActionSpeakerNotes from "material-ui/svg-icons/action/speaker-notes";
import ActionSpellcheck from "material-ui/svg-icons/action/spellcheck";
import ActionStars from "material-ui/svg-icons/action/stars";
import ActionStore from "material-ui/svg-icons/action/store";
import ActionSubject from "material-ui/svg-icons/action/subject";
import ActionSupervisorAccount from "material-ui/svg-icons/action/supervisor-account";
import ActionSwapHoriz from "material-ui/svg-icons/action/swap-horiz";
import ActionSwapVert from "material-ui/svg-icons/action/swap-vert";
import ActionSwapVerticalCircle from "material-ui/svg-icons/action/swap-vertical-circle";
import ActionSystemUpdateAlt from "material-ui/svg-icons/action/system-update-alt";
import ActionTabUnselected from "material-ui/svg-icons/action/tab-unselected";
import ActionTab from "material-ui/svg-icons/action/tab";
import ActionTheaters from "material-ui/svg-icons/action/theaters";
import ActionThreeDRotation from "material-ui/svg-icons/action/three-d-rotation";
import ActionThumbDown from "material-ui/svg-icons/action/thumb-down";
import ActionThumbUp from "material-ui/svg-icons/action/thumb-up";
import ActionThumbsUpDown from "material-ui/svg-icons/action/thumbs-up-down";
import ActionTimeline from "material-ui/svg-icons/action/timeline";
import ActionToc from "material-ui/svg-icons/action/toc";
import ActionToday from "material-ui/svg-icons/action/today";
import ActionToll from "material-ui/svg-icons/action/toll";
import ActionTouchApp from "material-ui/svg-icons/action/touch-app";
import ActionTrackChanges from "material-ui/svg-icons/action/track-changes";
import ActionTranslate from "material-ui/svg-icons/action/translate";
import ActionTrendingDown from "material-ui/svg-icons/action/trending-down";
import ActionTrendingFlat from "material-ui/svg-icons/action/trending-flat";
import ActionTrendingUp from "material-ui/svg-icons/action/trending-up";
import ActionTurnedInNot from "material-ui/svg-icons/action/turned-in-not";
import ActionTurnedIn from "material-ui/svg-icons/action/turned-in";
import ActionUpdate from "material-ui/svg-icons/action/update";
import ActionVerifiedUser from "material-ui/svg-icons/action/verified-user";
import ActionViewAgenda from "material-ui/svg-icons/action/view-agenda";
import ActionViewArray from "material-ui/svg-icons/action/view-array";
import ActionViewCarousel from "material-ui/svg-icons/action/view-carousel";
import ActionViewColumn from "material-ui/svg-icons/action/view-column";
import ActionViewDay from "material-ui/svg-icons/action/view-day";
import ActionViewHeadline from "material-ui/svg-icons/action/view-headline";
import ActionViewList from "material-ui/svg-icons/action/view-list";
import ActionViewModule from "material-ui/svg-icons/action/view-module";
import ActionViewQuilt from "material-ui/svg-icons/action/view-quilt";
import ActionViewStream from "material-ui/svg-icons/action/view-stream";
import ActionViewWeek from "material-ui/svg-icons/action/view-week";
import ActionVisibilityOff from "material-ui/svg-icons/action/visibility-off";
import ActionVisibility from "material-ui/svg-icons/action/visibility";
import ActionWatchLater from "material-ui/svg-icons/action/watch-later";
import ActionWork from "material-ui/svg-icons/action/work";
import ActionYoutubeSearchedFor from "material-ui/svg-icons/action/youtube-searched-for";
import ActionZoomIn from "material-ui/svg-icons/action/zoom-in";
import ActionZoomOut from "material-ui/svg-icons/action/zoom-out";
import TextField from "material-ui/TextField";

const components = [
  "accessible",
  "account-balance-wallet",
  "account-balance",
  "account-box",
  "account-circle",
  "add-shopping-cart",
  "alarm-add",
  "alarm-off",
  "alarm-on",
  "alarm",
  "all-out",
  "android",
  "announcement",
  "aspect-ratio",
  "assessment",
  "assignment-ind",
  "assignment-late",
  "assignment-return",
  "assignment-returned",
  "assignment-turned-in",
  "assignment",
  "autorenew",
  "backup",
  "book",
  "bookmark-border",
  "bookmark",
  "bug-report",
  "build",
  "cached",
  "camera-enhance",
  "card-giftcard",
  "card-membership",
  "card-travel",
  "change-history",
  "check-circle",
  "chrome-reader-mode",
  "class",
  "code",
  "compare-arrows",
  "copyright",
  "credit-card",
  "dashboard",
  "date-range",
  "delete-forever",
  "delete",
  "description",
  "dns",
  "done-all",
  "done",
  "donut-large",
  "donut-small",
  "eject",
  "euro-symbol",
  "event-seat",
  "event",
  "exit-to-app",
  "explore",
  "extension",
  "face",
  "favorite-border",
  "favorite",
  "feedback",
  "find-in-page",
  "find-replace",
  "fingerprint",
  "flight-land",
  "flight-takeoff",
  "flip-to-back",
  "flip-to-front",
  "g-translate",
  "gavel",
  "get-app",
  "gif",
  "grade",
  "group-work",
  "help-outline",
  "help",
  "highlight-off",
  "history",
  "home",
  "hourglass-empty",
  "hourglass-full",
  "http",
  "https",
  "important-devices",
  "info-outline",
  "info",
  "input",
  "invert-colors",
  "label-outline",
  "label",
  "language",
  "launch",
  "lightbulb-outline",
  "line-style",
  "line-weight",
  "list",
  "lock-open",
  "lock-outline",
  "lock",
  "loyalty",
  "markunread-mailbox",
  "motorcycle",
  "note-add",
  "offline-pin",
  "opacity",
  "open-in-browser",
  "open-in-new",
  "open-with",
  "pageview",
  "pan-tool",
  "payment",
  "perm-camera-mic",
  "perm-contact-calendar",
  "perm-data-setting",
  "perm-device-information",
  "perm-identity",
  "perm-media",
  "perm-phone-msg",
  "perm-scan-wifi",
  "pets",
  "picture-in-picture-alt",
  "picture-in-picture",
  "play-for-work",
  "polymer",
  "power-settings-new",
  "pregnant-woman",
  "print",
  "query-builder",
  "question-answer",
  "receipt",
  "record-voice-over",
  "redeem",
  "remove-shopping-cart",
  "reorder",
  "report-problem",
  "restore-page",
  "restore",
  "room",
  "rounded-corner",
  "rowing",
  "schedule",
  "search",
  "settings-applications",
  "settings-backup-restore",
  "settings-bluetooth",
  "settings-brightness",
  "settings-cell",
  "settings-ethernet",
  "settings-input-antenna",
  "settings-input-component",
  "settings-input-composite",
  "settings-input-hdmi",
  "settings-input-svideo",
  "settings-overscan",
  "settings-phone",
  "settings-power",
  "settings-remote",
  "settings-voice",
  "settings",
  "shop-two",
  "shop",
  "shopping-basket",
  "shopping-cart",
  "speaker-notes-off",
  "speaker-notes",
  "spellcheck",
  "stars",
  "store",
  "subject",
  "supervisor-account",
  "swap-horiz",
  "swap-vert",
  "swap-vertical-circle",
  "system-update-alt",
  "tab-unselected",
  "tab",
  "theaters",
  "three-d-rotation",
  "thumb-down",
  "thumb-up",
  "thumbs-up-down",
  "timeline",
  "toc",
  "today",
  "toll",
  "touch-app",
  "track-changes",
  "translate",
  "trending-down",
  "trending-flat",
  "trending-up",
  "turned-in-not",
  "turned-in",
  "update",
  "verified-user",
  "view-agenda",
  "view-array",
  "view-carousel",
  "view-column",
  "view-day",
  "view-headline",
  "view-list",
  "view-module",
  "view-quilt",
  "view-stream",
  "view-week",
  "visibility-off",
  "visibility",
  "watch-later",
  "work",
  "youtube-searched-for",
  "zoom-in",
  "zoom-out"
];
class ActionIcons extends Component {
  render() {
    let items = components.map((path, index) => {
      const fullPath = `${this.props.match.url.substr(1)}/${path}`;
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

export default withRouter(ActionIcons);
