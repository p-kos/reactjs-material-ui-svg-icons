import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import PlacesAcUnit from "material-ui/svg-icons/places/ac-unit";
import PlacesCasino from "material-ui/svg-icons/places/casino";
import PlacesGolfCourse from "material-ui/svg-icons/places/golf-course";
import PlacesRvHookup from "material-ui/svg-icons/places/rv-hookup";
import PlacesAirportShuttle from "material-ui/svg-icons/places/airport-shuttle";
import PlacesChildCare from "material-ui/svg-icons/places/child-care";
import PlacesHotTub from "material-ui/svg-icons/places/hot-tub";
import PlacesSmokeFree from "material-ui/svg-icons/places/smoke-free";
import PlacesAllInclusive from "material-ui/svg-icons/places/all-inclusive";
import PlacesChildFriendly from "material-ui/svg-icons/places/child-friendly";
import PlacesKitchen from "material-ui/svg-icons/places/kitchen";
import PlacesSmokingRooms from "material-ui/svg-icons/places/smoking-rooms";
import PlacesBeachAccess from "material-ui/svg-icons/places/beach-access";
import PlacesFitnessCenter from "material-ui/svg-icons/places/fitness-center";
import PlacesPool from "material-ui/svg-icons/places/pool";
import PlacesSpa from "material-ui/svg-icons/places/spa";
import PlacesBusinessCenter from "material-ui/svg-icons/places/business-center";
import PlacesFreeBreakfast from "material-ui/svg-icons/places/free-breakfast";
import PlacesRoomService from "material-ui/svg-icons/places/room-service";

const components = [
  "ac-unit",
  "casino",
  "golf-course",
  "rv-hookup",
  "airport-shuttle",
  "child-care",
  "hot-tub",
  "smoke-free",
  "all-inclusive",
  "child-friendly",
  "kitchen",
  "smoking-rooms",
  "beach-access",
  "fitness-center",
  "pool",
  "spa",
  "business-center",
  "free-breakfast",
  "room-service"
];

class PlacesIcons extends Component {
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

export default withRouter(PlacesIcons);
