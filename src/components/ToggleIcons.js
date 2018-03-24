import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import ToggleCheckBoxOutlineBlank from "material-ui/svg-icons/toggle/check-box-outline-blank";
import ToggleRadioButtonChecked from "material-ui/svg-icons/toggle/radio-button-checked";
import ToggleStarHalf from "material-ui/svg-icons/toggle/star-half";
import ToggleCheckBox from "material-ui/svg-icons/toggle/check-box";
import ToggleRadioButtonUnchecked from "material-ui/svg-icons/toggle/radio-button-unchecked";
import ToggleStar from "material-ui/svg-icons/toggle/star";
import ToggleIndeterminateCheckBox from "material-ui/svg-icons/toggle/indeterminate-check-box";
import ToggleStarBorder from "material-ui/svg-icons/toggle/star-border";

const components = [
  "check-box-outline-blank",
  "radio-button-checked",
  "star-half",
  "check-box",
  "radio-button-unchecked",
  "star",
  "indeterminate-check-box",
  "star-border"
];

class ToggleIcons extends Component {
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

export default withRouter(ToggleIcons);
