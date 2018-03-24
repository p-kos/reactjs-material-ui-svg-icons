import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import AddBox from "material-ui/svg-icons/content/add-box";
import AddCircleOutline from "material-ui/svg-icons/content/add-circle-outline";
import AddCircle from "material-ui/svg-icons/content/add-circle";
import Add from "material-ui/svg-icons/content/add";
import Archive from "material-ui/svg-icons/content/archive";
import Backspace from "material-ui/svg-icons/content/backspace";
import Block from "material-ui/svg-icons/content/block";
import Clear from "material-ui/svg-icons/content/clear";
import ContentCopy from "material-ui/svg-icons/content/content-copy";
import ContentCut from "material-ui/svg-icons/content/content-cut";
import ContentPaste from "material-ui/svg-icons/content/content-paste";
import Create from "material-ui/svg-icons/content/create";
import DeleteSweep from "material-ui/svg-icons/content/delete-sweep";
import Drafts from "material-ui/svg-icons/content/drafts";
import FilterList from "material-ui/svg-icons/content/filter-list";
import Flag from "material-ui/svg-icons/content/flag";
import FontDownload from "material-ui/svg-icons/content/font-download";
import Forward from "material-ui/svg-icons/content/forward";
import Gesture from "material-ui/svg-icons/content/gesture";
import Inbox from "material-ui/svg-icons/content/inbox";
import Link from "material-ui/svg-icons/content/link";
import LowPriority from "material-ui/svg-icons/content/low-priority";
import Mail from "material-ui/svg-icons/content/mail";
import Markunread from "material-ui/svg-icons/content/markunread";
import MoveToInbox from "material-ui/svg-icons/content/move-to-inbox";
import NextWeek from "material-ui/svg-icons/content/next-week";
import Redo from "material-ui/svg-icons/content/redo";
import RemoveCircleOutline from "material-ui/svg-icons/content/remove-circle-outline";
import RemoveCircle from "material-ui/svg-icons/content/remove-circle";
import Remove from "material-ui/svg-icons/content/remove";
import ReplyAll from "material-ui/svg-icons/content/reply-all";
import Reply from "material-ui/svg-icons/content/reply";
import Report from "material-ui/svg-icons/content/report";
import Save from "material-ui/svg-icons/content/save";
import SelectAll from "material-ui/svg-icons/content/select-all";
import Send from "material-ui/svg-icons/content/send";
import Sort from "material-ui/svg-icons/content/sort";
import TextFormat from "material-ui/svg-icons/content/text-format";
import Unarchive from "material-ui/svg-icons/content/unarchive";
import Undo from "material-ui/svg-icons/content/undo";
import Weekend from "material-ui/svg-icons/content/weekend";

const components = [
  "material-ui/svg-icons/content/add-box",
  "material-ui/svg-icons/content/add-circle-outline",
  "material-ui/svg-icons/content/add-circle",
  "material-ui/svg-icons/content/add",
  "material-ui/svg-icons/content/archive",
  "material-ui/svg-icons/content/backspace",
  "material-ui/svg-icons/content/block",
  "material-ui/svg-icons/content/clear",
  "material-ui/svg-icons/content/content-copy",
  "material-ui/svg-icons/content/content-cut",
  "material-ui/svg-icons/content/content-paste",
  "material-ui/svg-icons/content/create",
  "material-ui/svg-icons/content/delete-sweep",
  "material-ui/svg-icons/content/drafts",
  "material-ui/svg-icons/content/filter-list",
  "material-ui/svg-icons/content/flag",
  "material-ui/svg-icons/content/font-download",
  "material-ui/svg-icons/content/forward",
  "material-ui/svg-icons/content/gesture",
  "material-ui/svg-icons/content/inbox",
  "material-ui/svg-icons/content/link",
  "material-ui/svg-icons/content/low-priority",
  "material-ui/svg-icons/content/mail",
  "material-ui/svg-icons/content/markunread",
  "material-ui/svg-icons/content/move-to-inbox",
  "material-ui/svg-icons/content/next-week",
  "material-ui/svg-icons/content/redo",
  "material-ui/svg-icons/content/remove-circle-outline",
  "material-ui/svg-icons/content/remove-circle",
  "material-ui/svg-icons/content/remove",
  "material-ui/svg-icons/content/reply-all",
  "material-ui/svg-icons/content/reply",
  "material-ui/svg-icons/content/report",
  "material-ui/svg-icons/content/save",
  "material-ui/svg-icons/content/select-all",
  "material-ui/svg-icons/content/send",
  "material-ui/svg-icons/content/sort",
  "material-ui/svg-icons/content/text-format",
  "material-ui/svg-icons/content/unarchive",
  "material-ui/svg-icons/content/undo",
  "material-ui/svg-icons/content/weekend"
];

class ContentIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = components.map((path, index) => {
      return (
        <Item key={index} path={path} primaryText={path} secondaryText={path} />
      );
    });
    return <List>{items}</List>;
  }
}
export default ContentIcons;
