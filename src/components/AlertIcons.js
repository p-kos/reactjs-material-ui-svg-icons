import React, { Component } from "react";
import { List } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import AlertAddAlert from "material-ui/svg-icons/alert/add-alert";
import AlertErrorOutline from "material-ui/svg-icons/alert/error-outline";
import AlertError from "material-ui/svg-icons/alert/error";
import AlertWarning from "material-ui/svg-icons/alert/warning";

const components = ["add-alert", "error-outline", "error", "warning"];
class AlertIcons extends Component {
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

export default withRouter(AlertIcons);
