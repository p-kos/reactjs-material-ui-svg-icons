import React, { Component } from "react";
import { ListItem } from "material-ui/List";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }
  componentDidMount() {
    const { path } = this.props;
    import(`${path}`).then(module => this.setState({ module: module.default }));
  }
  render() {
    let name = this.props.path.replace("material-ui/svg-icons/", "");
    let pattern = name.match(/\/[a-z]/g)[0];
    name = name.replace(pattern, pattern.toUpperCase()).replace(/\//g, "");
    name = name.substr(0, 1).toUpperCase() + name.substr(1);
    const dash = name.match(/-[a-z]/g);
    if (dash) {
      dash.map(p => {
        name = name.replace(p, p.toUpperCase());
      });
    }
    name = name.replace(/-/g, "");
    const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    return (
      <ListItem
        leftIcon={Component && <Component />}
        primaryText={name}
        secondaryText={this.props.secondaryText}
      />
    );
  }
}
export default Item;
