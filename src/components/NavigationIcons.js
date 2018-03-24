import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import Apps from "material-ui/svg-icons/navigation/apps";
import Check from "material-ui/svg-icons/navigation/check";
import LastPage from "material-ui/svg-icons/navigation/last-page";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import Menu from "material-ui/svg-icons/navigation/menu";
import ArrowDownward from "material-ui/svg-icons/navigation/arrow-downward";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import MoreHoriz from "material-ui/svg-icons/navigation/more-horiz";
import ArrowDropDownCircle from "material-ui/svg-icons/navigation/arrow-drop-down-circle";
import Close from "material-ui/svg-icons/navigation/close";
import MoreVert from "material-ui/svg-icons/navigation/more-vert";
import ArrowDropDown from "material-ui/svg-icons/navigation/arrow-drop-down";
import ExpandLess from "material-ui/svg-icons/navigation/expand-less";
import Refresh from "material-ui/svg-icons/navigation/refresh";
import ArrowDropUp from "material-ui/svg-icons/navigation/arrow-drop-up";
import ExpandMore from "material-ui/svg-icons/navigation/expand-more";
import SubdirectoryArrowLeft from "material-ui/svg-icons/navigation/subdirectory-arrow-left";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
import FirstPage from "material-ui/svg-icons/navigation/first-page";
import SubdirectoryArrowRight from "material-ui/svg-icons/navigation/subdirectory-arrow-right";
import ArrowUpward from "material-ui/svg-icons/navigation/arrow-upward";
import FullscreenExit from "material-ui/svg-icons/navigation/fullscreen-exit";
import UnfoldLess from "material-ui/svg-icons/navigation/unfold-less";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import Fullscreen from "material-ui/svg-icons/navigation/fullscreen";
import UnfoldMore from "material-ui/svg-icons/navigation/unfold-more";

const components = [
  "apps",
  "check",
  "last-page",
  "arrow-back",
  "chevron-left",
  "menu",
  "arrow-downward",
  "chevron-right",
  "more-horiz",
  "arrow-drop-down-circle",
  "close",
  "more-vert",
  "arrow-drop-down",
  "expand-less",
  "refresh",
  "arrow-drop-up",
  "expand-more",
  "subdirectory-arrow-left",
  "arrow-forward",
  "first-page",
  "subdirectory-arrow-right",
  "arrow-upward",
  "fullscreen-exit",
  "unfold-less",
  "cancel",
  "fullscreen",
  "unfold-more"
];
class NavigationIcons extends Component {
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

export default withRouter(NavigationIcons);
