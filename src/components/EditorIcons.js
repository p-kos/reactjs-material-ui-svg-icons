import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import EditorAttachFile from "material-ui/svg-icons/editor/attach-file";
import EditorFormatColorReset from "material-ui/svg-icons/editor/format-color-reset";
import EditorInsertLink from "material-ui/svg-icons/editor/insert-link";
import EditorAttachMoney from "material-ui/svg-icons/editor/attach-money";
import EditorFormatColorText from "material-ui/svg-icons/editor/format-color-text";
import EditorInsertPhoto from "material-ui/svg-icons/editor/insert-photo";
import EditorBorderAll from "material-ui/svg-icons/editor/border-all";
import EditorFormatIndentDecrease from "material-ui/svg-icons/editor/format-indent-decrease";
import EditorLinearScale from "material-ui/svg-icons/editor/linear-scale";
import EditorBorderBottom from "material-ui/svg-icons/editor/border-bottom";
import EditorFormatIndentIncrease from "material-ui/svg-icons/editor/format-indent-increase";
import EditorMergeType from "material-ui/svg-icons/editor/merge-type";
import EditorBorderClear from "material-ui/svg-icons/editor/border-clear";
import EditorFormatItalic from "material-ui/svg-icons/editor/format-italic";
import EditorModeComment from "material-ui/svg-icons/editor/mode-comment";
import EditorBorderColor from "material-ui/svg-icons/editor/border-color";
import EditorFormatLineSpacing from "material-ui/svg-icons/editor/format-line-spacing";
import EditorModeEdit from "material-ui/svg-icons/editor/mode-edit";
import EditorBorderHorizontal from "material-ui/svg-icons/editor/border-horizontal";
import EditorFormatListBulleted from "material-ui/svg-icons/editor/format-list-bulleted";
import EditorMonetizationOn from "material-ui/svg-icons/editor/monetization-on";
import EditorBorderInner from "material-ui/svg-icons/editor/border-inner";
import EditorFormatListNumbered from "material-ui/svg-icons/editor/format-list-numbered";
import EditorMoneyOff from "material-ui/svg-icons/editor/money-off";
import EditorBorderLeft from "material-ui/svg-icons/editor/border-left";
import EditorFormatPaint from "material-ui/svg-icons/editor/format-paint";
import EditorMultilineChart from "material-ui/svg-icons/editor/multiline-chart";
import EditorBorderOuter from "material-ui/svg-icons/editor/border-outer";
import EditorFormatQuote from "material-ui/svg-icons/editor/format-quote";
import EditorPieChartOutlined from "material-ui/svg-icons/editor/pie-chart-outlined";
import EditorBorderRight from "material-ui/svg-icons/editor/border-right";
import EditorFormatShapes from "material-ui/svg-icons/editor/format-shapes";
import EditorPieChart from "material-ui/svg-icons/editor/pie-chart";
import EditorBorderStyle from "material-ui/svg-icons/editor/border-style";
import EditorFormatSize from "material-ui/svg-icons/editor/format-size";
import EditorPublish from "material-ui/svg-icons/editor/publish";
import EditorBorderTop from "material-ui/svg-icons/editor/border-top";
import EditorFormatStrikethrough from "material-ui/svg-icons/editor/format-strikethrough";
import EditorShortText from "material-ui/svg-icons/editor/short-text";
import EditorBorderVertical from "material-ui/svg-icons/editor/border-vertical";
import EditorFormatTextdirectionLToR from "material-ui/svg-icons/editor/format-textdirection-l-to-r";
import EditorShowChart from "material-ui/svg-icons/editor/show-chart";
import EditorBubbleChart from "material-ui/svg-icons/editor/bubble-chart";
import EditorFormatTextdirectionRToL from "material-ui/svg-icons/editor/format-textdirection-r-to-l";
import EditorSpaceBar from "material-ui/svg-icons/editor/space-bar";
import EditorDragHandle from "material-ui/svg-icons/editor/drag-handle";
import EditorFormatUnderlined from "material-ui/svg-icons/editor/format-underlined";
import EditorStrikethroughS from "material-ui/svg-icons/editor/strikethrough-s";
import EditorFormatAlignCenter from "material-ui/svg-icons/editor/format-align-center";
import EditorFunctions from "material-ui/svg-icons/editor/functions";
import EditorTextFields from "material-ui/svg-icons/editor/text-fields";
import EditorFormatAlignJustify from "material-ui/svg-icons/editor/format-align-justify";
import EditorHighlight from "material-ui/svg-icons/editor/highlight";
import EditorTitle from "material-ui/svg-icons/editor/title";
import EditorFormatAlignLeft from "material-ui/svg-icons/editor/format-align-left";
import EditorInsertChart from "material-ui/svg-icons/editor/insert-chart";
import EditorVerticalAlignBottom from "material-ui/svg-icons/editor/vertical-align-bottom";
import EditorFormatAlignRight from "material-ui/svg-icons/editor/format-align-right";
import EditorInsertComment from "material-ui/svg-icons/editor/insert-comment";
import EditorVerticalAlignCenter from "material-ui/svg-icons/editor/vertical-align-center";
import EditorFormatBold from "material-ui/svg-icons/editor/format-bold";
import EditorInsertDriveFile from "material-ui/svg-icons/editor/insert-drive-file";
import EditorVerticalAlignTop from "material-ui/svg-icons/editor/vertical-align-top";
import EditorFormatClear from "material-ui/svg-icons/editor/format-clear";
import EditorInsertEmoticon from "material-ui/svg-icons/editor/insert-emoticon";
import EditorWrapText from "material-ui/svg-icons/editor/wrap-text";
import EditorFormatColorFill from "material-ui/svg-icons/editor/format-color-fill";
import EditorInsertInvitation from "material-ui/svg-icons/editor/insert-invitation";

const components = [
  "attach-file",
  "format-color-reset",
  "insert-link",
  "attach-money",
  "format-color-text",
  "insert-photo",
  "border-all",
  "format-indent-decrease",
  "linear-scale",
  "border-bottom",
  "format-indent-increase",
  "merge-type",
  "border-clear",
  "format-italic",
  "mode-comment",
  "border-color",
  "format-line-spacing",
  "mode-edit",
  "border-horizontal",
  "format-list-bulleted",
  "monetization-on",
  "border-inner",
  "format-list-numbered",
  "money-off",
  "border-left",
  "format-paint",
  "multiline-chart",
  "border-outer",
  "format-quote",
  "pie-chart-outlined",
  "border-right",
  "format-shapes",
  "pie-chart",
  "border-style",
  "format-size",
  "publish",
  "border-top",
  "format-strikethrough",
  "short-text",
  "border-vertical",
  "format-textdirection-l-to-r",
  "show-chart",
  "bubble-chart",
  "format-textdirection-r-to-l",
  "space-bar",
  "drag-handle",
  "format-underlined",
  "strikethrough-s",
  "format-align-center",
  "functions",
  "text-fields",
  "format-align-justify",
  "highlight",
  "title",
  "format-align-left",
  "insert-chart",
  "vertical-align-bottom",
  "format-align-right",
  "insert-comment",
  "vertical-align-center",
  "format-bold",
  "insert-drive-file",
  "vertical-align-top",
  "format-clear",
  "insert-emoticon",
  "wrap-text",
  "format-color-fill",
  "insert-invitation"
];

class EditorIcons extends Component {
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

export default withRouter(EditorIcons);
