import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import HardwareCastConnected from "material-ui/svg-icons/hardware/cast-connected";
import HardwareKeyboardArrowDown from "material-ui/svg-icons/hardware/keyboard-arrow-down";
import HardwareLaptopMac from "material-ui/svg-icons/hardware/laptop-mac";
import HardwareSecurity from "material-ui/svg-icons/hardware/security";
import HardwareCast from "material-ui/svg-icons/hardware/cast";
import HardwareKeyboardArrowLeft from "material-ui/svg-icons/hardware/keyboard-arrow-left";
import HardwareLaptopWindows from "material-ui/svg-icons/hardware/laptop-windows";
import HardwareSimCard from "material-ui/svg-icons/hardware/sim-card";
import HardwareComputer from "material-ui/svg-icons/hardware/computer";
import HardwareKeyboardArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";
import HardwareLaptop from "material-ui/svg-icons/hardware/laptop";
import HardwareSmartphone from "material-ui/svg-icons/hardware/smartphone";
import HardwareDesktopMac from "material-ui/svg-icons/hardware/desktop-mac";
import HardwareKeyboardArrowUp from "material-ui/svg-icons/hardware/keyboard-arrow-up";
import HardwareMemory from "material-ui/svg-icons/hardware/memory";
import HardwareSpeakerGroup from "material-ui/svg-icons/hardware/speaker-group";
import HardwareDesktopWindows from "material-ui/svg-icons/hardware/desktop-windows";
import HardwareKeyboardBackspace from "material-ui/svg-icons/hardware/keyboard-backspace";
import HardwareMouse from "material-ui/svg-icons/hardware/mouse";
import HardwareSpeaker from "material-ui/svg-icons/hardware/speaker";
import HardwareDeveloperBoard from "material-ui/svg-icons/hardware/developer-board";
import HardwareKeyboardCapslock from "material-ui/svg-icons/hardware/keyboard-capslock";
import HardwarePhoneAndroid from "material-ui/svg-icons/hardware/phone-android";
import HardwareTabletAndroid from "material-ui/svg-icons/hardware/tablet-android";
import HardwareDeviceHub from "material-ui/svg-icons/hardware/device-hub";
import HardwareKeyboardHide from "material-ui/svg-icons/hardware/keyboard-hide";
import HardwarePhoneIphone from "material-ui/svg-icons/hardware/phone-iphone";
import HardwareTabletMac from "material-ui/svg-icons/hardware/tablet-mac";
import HardwareDevicesOther from "material-ui/svg-icons/hardware/devices-other";
import HardwareKeyboardReturn from "material-ui/svg-icons/hardware/keyboard-return";
import HardwarePhonelinkOff from "material-ui/svg-icons/hardware/phonelink-off";
import HardwareTablet from "material-ui/svg-icons/hardware/tablet";
import HardwareDock from "material-ui/svg-icons/hardware/dock";
import HardwareKeyboardTab from "material-ui/svg-icons/hardware/keyboard-tab";
import HardwarePhonelink from "material-ui/svg-icons/hardware/phonelink";
import HardwareToys from "material-ui/svg-icons/hardware/toys";
import HardwareGamepad from "material-ui/svg-icons/hardware/gamepad";
import HardwareKeyboardVoice from "material-ui/svg-icons/hardware/keyboard-voice";
import HardwarePowerInput from "material-ui/svg-icons/hardware/power-input";
import HardwareTv from "material-ui/svg-icons/hardware/tv";
import HardwareHeadsetMic from "material-ui/svg-icons/hardware/headset-mic";
import HardwareKeyboard from "material-ui/svg-icons/hardware/keyboard";
import HardwareRouter from "material-ui/svg-icons/hardware/router";
import HardwareVideogameAsset from "material-ui/svg-icons/hardware/videogame-asset";
import HardwareHeadset from "material-ui/svg-icons/hardware/headset";
import HardwareLaptopChromebook from "material-ui/svg-icons/hardware/laptop-chromebook";
import HardwareScanner from "material-ui/svg-icons/hardware/scanner";
import HardwareWatch from "material-ui/svg-icons/hardware/watch";

const components = [
  "cast-connected",
  "keyboard-arrow-down",
  "laptop-mac",
  "security",
  "cast",
  "keyboard-arrow-left",
  "laptop-windows",
  "sim-card",
  "computer",
  "keyboard-arrow-right",
  "laptop",
  "smartphone",
  "desktop-mac",
  "keyboard-arrow-up",
  "memory",
  "speaker-group",
  "desktop-windows",
  "keyboard-backspace",
  "mouse",
  "speaker",
  "developer-board",
  "keyboard-capslock",
  "phone-android",
  "tablet-android",
  "device-hub",
  "keyboard-hide",
  "phone-iphone",
  "tablet-mac",
  "devices-other",
  "keyboard-return",
  "phonelink-off",
  "tablet",
  "dock",
  "keyboard-tab",
  "phonelink",
  "toys",
  "gamepad",
  "keyboard-voice",
  "power-input",
  "tv",
  "headset-mic",
  "keyboard",
  "router",
  "videogame-asset",
  "headset",
  "laptop-chromebook",
  "scanner",
  "watch"
];

class HardwareIcons extends Component {
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

export default withRouter(HardwareIcons);
