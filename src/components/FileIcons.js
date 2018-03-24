import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import FileAttachment from "material-ui/svg-icons/file/attachment";
import FileCloudOff from "material-ui/svg-icons/file/cloud-off";
import FileCreateNewFolder from "material-ui/svg-icons/file/create-new-folder";
import FileFolderShared from "material-ui/svg-icons/file/folder-shared";
import FileCloudCircle from "material-ui/svg-icons/file/cloud-circle";
import FileCloudQueue from "material-ui/svg-icons/file/cloud-queue";
import FileFileDownload from "material-ui/svg-icons/file/file-download";
import FileFolder from "material-ui/svg-icons/file/folder";
import FileCloudDone from "material-ui/svg-icons/file/cloud-done";
import FileCloudUpload from "material-ui/svg-icons/file/cloud-upload";
import FileFileUpload from "material-ui/svg-icons/file/file-upload";
import FileCloudDownload from "material-ui/svg-icons/file/cloud-download";
import FileCloud from "material-ui/svg-icons/file/cloud";
import FileFolderOpen from "material-ui/svg-icons/file/folder-open";

const components = [
  "attachment",
  "cloud-off",
  "create-new-folder",
  "folder-shared",
  "cloud-circle",
  "cloud-queue",
  "file-download",
  "folder",
  "cloud-done",
  "cloud-upload",
  "file-upload",
  "cloud-download",
  "cloud",
  "folder-open"
];
class FileIcons extends Component {
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
export default withRouter(FileIcons);
