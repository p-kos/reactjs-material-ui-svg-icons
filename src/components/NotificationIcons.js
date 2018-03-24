import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import NotificationAdb from "material-ui/svg-icons/notification/adb";
import NotificationNoEncryption from "material-ui/svg-icons/notification/no-encryption";
import NotificationAirlineSeatFlatAngled from "material-ui/svg-icons/notification/airline-seat-flat-angled";
import NotificationOndemandVideo from "material-ui/svg-icons/notification/ondemand-video";
import NotificationAirlineSeatFlat from "material-ui/svg-icons/notification/airline-seat-flat";
import NotificationPersonalVideo from "material-ui/svg-icons/notification/personal-video";
import NotificationAirlineSeatIndividualSuite from "material-ui/svg-icons/notification/airline-seat-individual-suite";
import NotificationPhoneBluetoothSpeaker from "material-ui/svg-icons/notification/phone-bluetooth-speaker";
import NotificationAirlineSeatLegroomExtra from "material-ui/svg-icons/notification/airline-seat-legroom-extra";
import NotificationPhoneForwarded from "material-ui/svg-icons/notification/phone-forwarded";
import NotificationAirlineSeatLegroomNormal from "material-ui/svg-icons/notification/airline-seat-legroom-normal";
import NotificationPhoneInTalk from "material-ui/svg-icons/notification/phone-in-talk";
import NotificationAirlineSeatLegroomReduced from "material-ui/svg-icons/notification/airline-seat-legroom-reduced";
import NotificationPhoneLocked from "material-ui/svg-icons/notification/phone-locked";
import NotificationAirlineSeatReclineExtra from "material-ui/svg-icons/notification/airline-seat-recline-extra";
import NotificationPhoneMissed from "material-ui/svg-icons/notification/phone-missed";
import NotificationAirlineSeatReclineNormal from "material-ui/svg-icons/notification/airline-seat-recline-normal";
import NotificationPhonePaused from "material-ui/svg-icons/notification/phone-paused";
import NotificationBluetoothAudio from "material-ui/svg-icons/notification/bluetooth-audio";
import NotificationPower from "material-ui/svg-icons/notification/power";
import NotificationConfirmationNumber from "material-ui/svg-icons/notification/confirmation-number";
import NotificationPriorityHigh from "material-ui/svg-icons/notification/priority-high";
import NotificationDiscFull from "material-ui/svg-icons/notification/disc-full";
import NotificationRvHookup from "material-ui/svg-icons/notification/rv-hookup";
import NotificationDoNotDisturbAlt from "material-ui/svg-icons/notification/do-not-disturb-alt";
import NotificationSdCard from "material-ui/svg-icons/notification/sd-card";
import NotificationDoNotDisturbOff from "material-ui/svg-icons/notification/do-not-disturb-off";
import NotificationSimCardAlert from "material-ui/svg-icons/notification/sim-card-alert";
import NotificationDoNotDisturbOn from "material-ui/svg-icons/notification/do-not-disturb-on";
import NotificationSmsFailed from "material-ui/svg-icons/notification/sms-failed";
import NotificationDoNotDisturb from "material-ui/svg-icons/notification/do-not-disturb";
import NotificationSms from "material-ui/svg-icons/notification/sms";
import NotificationDriveEta from "material-ui/svg-icons/notification/drive-eta";
import NotificationSyncDisabled from "material-ui/svg-icons/notification/sync-disabled";
import NotificationEnhancedEncryption from "material-ui/svg-icons/notification/enhanced-encryption";
import NotificationSyncProblem from "material-ui/svg-icons/notification/sync-problem";
import NotificationEventAvailable from "material-ui/svg-icons/notification/event-available";
import NotificationSync from "material-ui/svg-icons/notification/sync";
import NotificationEventBusy from "material-ui/svg-icons/notification/event-busy";
import NotificationSystemUpdate from "material-ui/svg-icons/notification/system-update";
import NotificationEventNote from "material-ui/svg-icons/notification/event-note";
import NotificationTapAndPlay from "material-ui/svg-icons/notification/tap-and-play";
import NotificationFolderSpecial from "material-ui/svg-icons/notification/folder-special";
import NotificationTimeToLeave from "material-ui/svg-icons/notification/time-to-leave";
import NotificationLiveTv from "material-ui/svg-icons/notification/live-tv";
import NotificationVibration from "material-ui/svg-icons/notification/vibration";
import NotificationMms from "material-ui/svg-icons/notification/mms";
import NotificationVoiceChat from "material-ui/svg-icons/notification/voice-chat";
import NotificationMore from "material-ui/svg-icons/notification/more";
import NotificationVpnLock from "material-ui/svg-icons/notification/vpn-lock";
import NotificationNetworkCheck from "material-ui/svg-icons/notification/network-check";
import NotificationWc from "material-ui/svg-icons/notification/wc";
import NotificationNetworkLocked from "material-ui/svg-icons/notification/network-locked";
import NotificationWifi from "material-ui/svg-icons/notification/wifi";

const components = [
  "adb",
  "no-encryption",
  "airline-seat-flat-angled",
  "ondemand-video",
  "airline-seat-flat",
  "personal-video",
  "airline-seat-individual-suite",
  "phone-bluetooth-speaker",
  "airline-seat-legroom-extra",
  "phone-forwarded",
  "airline-seat-legroom-normal",
  "phone-in-talk",
  "airline-seat-legroom-reduced",
  "phone-locked",
  "airline-seat-recline-extra",
  "phone-missed",
  "airline-seat-recline-normal",
  "phone-paused",
  "bluetooth-audio",
  "power",
  "confirmation-number",
  "priority-high",
  "disc-full",
  "rv-hookup",
  "do-not-disturb-alt",
  "sd-card",
  "do-not-disturb-off",
  "sim-card-alert",
  "do-not-disturb-on",
  "sms-failed",
  "do-not-disturb",
  "sms",
  "drive-eta",
  "sync-disabled",
  "enhanced-encryption",
  "sync-problem",
  "event-available",
  "sync",
  "event-busy",
  "system-update",
  "event-note",
  "tap-and-play",
  "folder-special",
  "time-to-leave",
  "live-tv",
  "vibration",
  "mms",
  "voice-chat",
  "more",
  "vpn-lock",
  "network-check",
  "wc",
  "network-locked",
  "wifi"
];
class NotificationIcons extends Component {
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

export default withRouter(NotificationIcons);
