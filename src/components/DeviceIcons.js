import React, { Component } from "react";
import { List } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import DeviceAccessAlarm from "material-ui/svg-icons/device/access-alarm";
import LocationSearching from "material-ui/svg-icons/device/location-searching";
import AccessAlarms from "material-ui/svg-icons/device/access-alarms";
import NetworkCell from "material-ui/svg-icons/device/network-cell";
import AccessTime from "material-ui/svg-icons/device/access-time";
import NetworkWifi from "material-ui/svg-icons/device/network-wifi";
import AddAlarm from "material-ui/svg-icons/device/add-alarm";
import Nfc from "material-ui/svg-icons/device/nfc";
import AirplanemodeActive from "material-ui/svg-icons/device/airplanemode-active";
import ScreenLockLandscape from "material-ui/svg-icons/device/screen-lock-landscape";
import AirplanemodeInactive from "material-ui/svg-icons/device/airplanemode-inactive";
import ScreenLockPortrait from "material-ui/svg-icons/device/screen-lock-portrait";
import Battery20 from "material-ui/svg-icons/device/battery-20";
import ScreenLockRotation from "material-ui/svg-icons/device/screen-lock-rotation";
import Battery30 from "material-ui/svg-icons/device/battery-30";
import ScreenRotation from "material-ui/svg-icons/device/screen-rotation";
import Battery50 from "material-ui/svg-icons/device/battery-50";
import SdStorage from "material-ui/svg-icons/device/sd-storage";
import Battery60 from "material-ui/svg-icons/device/battery-60";
import SettingsSystemDaydream from "material-ui/svg-icons/device/settings-system-daydream";
import Battery80 from "material-ui/svg-icons/device/battery-80";
import SignalCellular0Bar from "material-ui/svg-icons/device/signal-cellular-0-bar";
import Battery90 from "material-ui/svg-icons/device/battery-90";
import SignalCellular1Bar from "material-ui/svg-icons/device/signal-cellular-1-bar";
import BatteryAlert from "material-ui/svg-icons/device/battery-alert";
import SignalCellular2Bar from "material-ui/svg-icons/device/signal-cellular-2-bar";
import BatteryCharging20 from "material-ui/svg-icons/device/battery-charging-20";
import SignalCellular3Bar from "material-ui/svg-icons/device/signal-cellular-3-bar";
import BatteryCharging30 from "material-ui/svg-icons/device/battery-charging-30";
import SignalCellular4Bar from "material-ui/svg-icons/device/signal-cellular-4-bar";
import BatteryCharging50 from "material-ui/svg-icons/device/battery-charging-50";
import SignalCellularConnectedNoInternet0Bar from "material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar";
import BatteryCharging60 from "material-ui/svg-icons/device/battery-charging-60";
import SignalCellularConnectedNoInternet1Bar from "material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar";
import BatteryCharging80 from "material-ui/svg-icons/device/battery-charging-80";
import SignalCellularConnectedNoInternet2Bar from "material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar";
import BatteryCharging90 from "material-ui/svg-icons/device/battery-charging-90";
import SignalCellularConnectedNoInternet3Bar from "material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar";
import BatteryChargingFull from "material-ui/svg-icons/device/battery-charging-full";
import SignalCellularConnectedNoInternet4Bar from "material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar";
import BatteryFull from "material-ui/svg-icons/device/battery-full";
import SignalCellularNoSim from "material-ui/svg-icons/device/signal-cellular-no-sim";
import BatteryStd from "material-ui/svg-icons/device/battery-std";
import SignalCellularNull from "material-ui/svg-icons/device/signal-cellular-null";
import BatteryUnknown from "material-ui/svg-icons/device/battery-unknown";
import SignalCellularOff from "material-ui/svg-icons/device/signal-cellular-off";
import BluetoothConnected from "material-ui/svg-icons/device/bluetooth-connected";
import SignalWifi0Bar from "material-ui/svg-icons/device/signal-wifi-0-bar";
import BluetoothDisabled from "material-ui/svg-icons/device/bluetooth-disabled";
import SignalWifi1BarLock from "material-ui/svg-icons/device/signal-wifi-1-bar-lock";
import BluetoothSearching from "material-ui/svg-icons/device/bluetooth-searching";
import SignalWifi1Bar from "material-ui/svg-icons/device/signal-wifi-1-bar";
import Bluetooth from "material-ui/svg-icons/device/bluetooth";
import SignalWifi2BarLock from "material-ui/svg-icons/device/signal-wifi-2-bar-lock";
import BrightnessAuto from "material-ui/svg-icons/device/brightness-auto";
import SignalWifi2Bar from "material-ui/svg-icons/device/signal-wifi-2-bar";
import BrightnessHigh from "material-ui/svg-icons/device/brightness-high";
import SignalWifi3BarLock from "material-ui/svg-icons/device/signal-wifi-3-bar-lock";
import BrightnessLow from "material-ui/svg-icons/device/brightness-low";
import SignalWifi3Bar from "material-ui/svg-icons/device/signal-wifi-3-bar";
import BrightnessMedium from "material-ui/svg-icons/device/brightness-medium";
import SignalWifi4BarLock from "material-ui/svg-icons/device/signal-wifi-4-bar-lock";
import DataUsage from "material-ui/svg-icons/device/data-usage";
import SignalWifi4Bar from "material-ui/svg-icons/device/signal-wifi-4-bar";
import DeveloperMode from "material-ui/svg-icons/device/developer-mode";
import SignalWifiOff from "material-ui/svg-icons/device/signal-wifi-off";
import Devices from "material-ui/svg-icons/device/devices";
import Storage from "material-ui/svg-icons/device/storage";
import Dvr from "material-ui/svg-icons/device/dvr";
import Usb from "material-ui/svg-icons/device/usb";
import GpsFixed from "material-ui/svg-icons/device/gps-fixed";
import Wallpaper from "material-ui/svg-icons/device/wallpaper";
import GpsNotFixed from "material-ui/svg-icons/device/gps-not-fixed";
import Widgets from "material-ui/svg-icons/device/widgets";
import GpsOff from "material-ui/svg-icons/device/gps-off";
import WifiLock from "material-ui/svg-icons/device/wifi-lock";
import GraphicEq from "material-ui/svg-icons/device/graphic-eq";
import WifiTethering from "material-ui/svg-icons/device/wifi-tethering";
import LocationDisabled from "material-ui/svg-icons/device/location-disabled";

const components = [
  "access-alarms",
  "network-cell",
  "access-time",
  "network-wifi",
  "add-alarm",
  "nfc",
  "airplanemode-active",
  "screen-lock-landscape",
  "airplanemode-inactive",
  "screen-lock-portrait",
  "battery-20",
  "screen-lock-rotation",
  "battery-30",
  "screen-rotation",
  "battery-50",
  "sd-storage",
  "battery-60",
  "settings-system-daydream",
  "battery-80",
  "signal-cellular-0-bar",
  "battery-90",
  "signal-cellular-1-bar",
  "battery-alert",
  "signal-cellular-2-bar",
  "battery-charging-20",
  "signal-cellular-3-bar",
  "battery-charging-30",
  "signal-cellular-4-bar",
  "battery-charging-50",
  "signal-cellular-connected-no-internet-0-bar",
  "battery-charging-60",
  "signal-cellular-connected-no-internet-1-bar",
  "battery-charging-80",
  "signal-cellular-connected-no-internet-2-bar",
  "battery-charging-90",
  "signal-cellular-connected-no-internet-3-bar",
  "battery-charging-full",
  "signal-cellular-connected-no-internet-4-bar",
  "battery-full",
  "signal-cellular-no-sim",
  "battery-std",
  "signal-cellular-null",
  "battery-unknown",
  "signal-cellular-off",
  "bluetooth-connected",
  "signal-wifi-0-bar",
  "bluetooth-disabled",
  "signal-wifi-1-bar-lock",
  "bluetooth-searching",
  "signal-wifi-1-bar",
  "bluetooth",
  "signal-wifi-2-bar-lock",
  "brightness-auto",
  "signal-wifi-2-bar",
  "brightness-high",
  "signal-wifi-3-bar-lock",
  "brightness-low",
  "signal-wifi-3-bar",
  "brightness-medium",
  "signal-wifi-4-bar-lock",
  "data-usage",
  "signal-wifi-4-bar",
  "developer-mode",
  "signal-wifi-off",
  "devices",
  "storage",
  "dvr",
  "usb",
  "gps-fixed",
  "wallpaper",
  "gps-not-fixed",
  "widgets",
  "gps-off",
  "wifi-lock",
  "graphic-eq",
  "wifi-tethering",
  "location-disabled"
];
class DeviceIcons extends Component {
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

export default withRouter(DeviceIcons);
