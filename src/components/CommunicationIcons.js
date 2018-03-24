import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import Loadable from "react-loadable";
import Business from "material-ui/svg-icons/communication/business";
import CallEnd from "material-ui/svg-icons/communication/call-end";
import CallMade from "material-ui/svg-icons/communication/call-made";
import CallMerge from "material-ui/svg-icons/communication/call-merge";
import CallMissedOutgoing from "material-ui/svg-icons/communication/call-missed-outgoing";
import CallMissed from "material-ui/svg-icons/communication/call-missed";
import CallReceived from "material-ui/svg-icons/communication/call-received";
import CallSplit from "material-ui/svg-icons/communication/call-split";
import Call from "material-ui/svg-icons/communication/call";
import ChatBubbleOutline from "material-ui/svg-icons/communication/chat-bubble-outline";
import ChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import Chat from "material-ui/svg-icons/communication/chat";
import ClearAll from "material-ui/svg-icons/communication/clear-all";
import Comment from "material-ui/svg-icons/communication/comment";
import ContactMail from "material-ui/svg-icons/communication/contact-mail";
import ContactPhone from "material-ui/svg-icons/communication/contact-phone";
import Contacts from "material-ui/svg-icons/communication/contacts";
import DialerSip from "material-ui/svg-icons/communication/dialer-sip";
import Dialpad from "material-ui/svg-icons/communication/dialpad";
import Email from "material-ui/svg-icons/communication/email";
import Forum from "material-ui/svg-icons/communication/forum";
import ImportContacts from "material-ui/svg-icons/communication/import-contacts";
import ImportExport from "material-ui/svg-icons/communication/import-export";
import InvertColorsOff from "material-ui/svg-icons/communication/invert-colors-off";
import LiveHelp from "material-ui/svg-icons/communication/live-help";
import LocationOff from "material-ui/svg-icons/communication/location-off";
import LocationOn from "material-ui/svg-icons/communication/location-on";
import MailOutline from "material-ui/svg-icons/communication/mail-outline";
import Message from "material-ui/svg-icons/communication/message";
import NoSim from "material-ui/svg-icons/communication/no-sim";
import Phone from "material-ui/svg-icons/communication/phone";
import PhonelinkErase from "material-ui/svg-icons/communication/phonelink-erase";
import PhonelinkLock from "material-ui/svg-icons/communication/phonelink-lock";
import PhonelinkRing from "material-ui/svg-icons/communication/phonelink-ring";
import PhonelinkSetup from "material-ui/svg-icons/communication/phonelink-setup";
import PortableWifiOff from "material-ui/svg-icons/communication/portable-wifi-off";
import PresentToAll from "material-ui/svg-icons/communication/present-to-all";
import RingVolume from "material-ui/svg-icons/communication/ring-volume";
import RssFeed from "material-ui/svg-icons/communication/rss-feed";
import ScreenShare from "material-ui/svg-icons/communication/screen-share";
import SpeakerPhone from "material-ui/svg-icons/communication/speaker-phone";
import StayCurrentLandscape from "material-ui/svg-icons/communication/stay-current-landscape";
import StayCurrentPortrait from "material-ui/svg-icons/communication/stay-current-portrait";
import StayPrimaryLandscape from "material-ui/svg-icons/communication/stay-primary-landscape";
import StayPrimaryPortrait from "material-ui/svg-icons/communication/stay-primary-portrait";
import StopScreenShare from "material-ui/svg-icons/communication/stop-screen-share";
import SwapCalls from "material-ui/svg-icons/communication/swap-calls";
import Textsms from "material-ui/svg-icons/communication/textsms";
import Voicemail from "material-ui/svg-icons/communication/voicemail";
import VpnKey from "material-ui/svg-icons/communication/vpn-key";

const components = [
  "material-ui/svg-icons/communication/business",
  "material-ui/svg-icons/communication/call-end",
  "material-ui/svg-icons/communication/call-made",
  "material-ui/svg-icons/communication/call-merge",
  "material-ui/svg-icons/communication/call-missed-outgoing",
  "material-ui/svg-icons/communication/call-missed",
  "material-ui/svg-icons/communication/call-received",
  "material-ui/svg-icons/communication/call-split",
  "material-ui/svg-icons/communication/call",
  "material-ui/svg-icons/communication/chat-bubble-outline",
  "material-ui/svg-icons/communication/chat-bubble",
  "material-ui/svg-icons/communication/chat",
  "material-ui/svg-icons/communication/clear-all",
  "material-ui/svg-icons/communication/comment",
  "material-ui/svg-icons/communication/contact-mail",
  "material-ui/svg-icons/communication/contact-phone",
  "material-ui/svg-icons/communication/contacts",
  "material-ui/svg-icons/communication/dialer-sip",
  "material-ui/svg-icons/communication/dialpad",
  "material-ui/svg-icons/communication/email",
  "material-ui/svg-icons/communication/forum",
  "material-ui/svg-icons/communication/import-contacts",
  "material-ui/svg-icons/communication/import-export",
  "material-ui/svg-icons/communication/invert-colors-off",
  "material-ui/svg-icons/communication/live-help",
  "material-ui/svg-icons/communication/location-off",
  "material-ui/svg-icons/communication/location-on",
  "material-ui/svg-icons/communication/mail-outline",
  "material-ui/svg-icons/communication/message",
  "material-ui/svg-icons/communication/no-sim",
  "material-ui/svg-icons/communication/phone",
  "material-ui/svg-icons/communication/phonelink-erase",
  "material-ui/svg-icons/communication/phonelink-lock",
  "material-ui/svg-icons/communication/phonelink-ring",
  "material-ui/svg-icons/communication/phonelink-setup",
  "material-ui/svg-icons/communication/portable-wifi-off",
  "material-ui/svg-icons/communication/present-to-all",
  "material-ui/svg-icons/communication/ring-volume",
  "material-ui/svg-icons/communication/rss-feed",
  "material-ui/svg-icons/communication/screen-share",
  "material-ui/svg-icons/communication/speaker-phone",
  "material-ui/svg-icons/communication/stay-current-landscape",
  "material-ui/svg-icons/communication/stay-current-portrait",
  "material-ui/svg-icons/communication/stay-primary-landscape",
  "material-ui/svg-icons/communication/stay-primary-portrait",
  "material-ui/svg-icons/communication/stop-screen-share",
  "material-ui/svg-icons/communication/swap-calls",
  "material-ui/svg-icons/communication/textsms",
  "material-ui/svg-icons/communication/voicemail",
  "material-ui/svg-icons/communication/vpn-key"
];

class CommuncationIcons extends Component {
  render() {
    let items = components.map((path, index) => {
      return (
        <Item key={index} path={path} primaryText={path} secondaryText={path} />
      );
    });
    return <List>{items}</List>;
  }
}

export default CommuncationIcons;
