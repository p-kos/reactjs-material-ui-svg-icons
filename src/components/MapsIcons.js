import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import MapsAddLocation from "material-ui/svg-icons/maps/add-location";
import MapsLocalCarWash from "material-ui/svg-icons/maps/local-car-wash";
import MapsLocalTaxi from "material-ui/svg-icons/maps/local-taxi";
import MapsBeenhere from "material-ui/svg-icons/maps/beenhere";
import MapsLocalConvenienceStore from "material-ui/svg-icons/maps/local-convenience-store";
import MapsMap from "material-ui/svg-icons/maps/map";
import MapsDirectionsBike from "material-ui/svg-icons/maps/directions-bike";
import MapsLocalDining from "material-ui/svg-icons/maps/local-dining";
import MapsMyLocation from "material-ui/svg-icons/maps/my-location";
import MapsDirectionsBoat from "material-ui/svg-icons/maps/directions-boat";
import MapsLocalDrink from "material-ui/svg-icons/maps/local-drink";
import MapsNavigation from "material-ui/svg-icons/maps/navigation";
import MapsDirectionsBus from "material-ui/svg-icons/maps/directions-bus";
import MapsLocalFlorist from "material-ui/svg-icons/maps/local-florist";
import MapsNearMe from "material-ui/svg-icons/maps/near-me";
import MapsDirectionsCar from "material-ui/svg-icons/maps/directions-car";
import MapsLocalGasStation from "material-ui/svg-icons/maps/local-gas-station";
import MapsPersonPinCircle from "material-ui/svg-icons/maps/person-pin-circle";
import MapsDirectionsRailway from "material-ui/svg-icons/maps/directions-railway";
import MapsLocalGroceryStore from "material-ui/svg-icons/maps/local-grocery-store";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";
import MapsDirectionsRun from "material-ui/svg-icons/maps/directions-run";
import MapsLocalHospital from "material-ui/svg-icons/maps/local-hospital";
import MapsPinDrop from "material-ui/svg-icons/maps/pin-drop";
import MapsDirectionsSubway from "material-ui/svg-icons/maps/directions-subway";
import MapsLocalHotel from "material-ui/svg-icons/maps/local-hotel";
import MapsPlace from "material-ui/svg-icons/maps/place";
import MapsDirectionsTransit from "material-ui/svg-icons/maps/directions-transit";
import MapsLocalLaundryService from "material-ui/svg-icons/maps/local-laundry-service";
import MapsRateReview from "material-ui/svg-icons/maps/rate-review";
import MapsDirectionsWalk from "material-ui/svg-icons/maps/directions-walk";
import MapsLocalLibrary from "material-ui/svg-icons/maps/local-library";
import MapsRestaurantMenu from "material-ui/svg-icons/maps/restaurant-menu";
import MapsDirections from "material-ui/svg-icons/maps/directions";
import MapsLocalMall from "material-ui/svg-icons/maps/local-mall";
import MapsRestaurant from "material-ui/svg-icons/maps/restaurant";
import MapsEditLocation from "material-ui/svg-icons/maps/edit-location";
import MapsLocalMovies from "material-ui/svg-icons/maps/local-movies";
import MapsSatellite from "material-ui/svg-icons/maps/satellite";
import MapsEvStation from "material-ui/svg-icons/maps/ev-station";
import MapsLocalOffer from "material-ui/svg-icons/maps/local-offer";
import MapsStoreMallDirectory from "material-ui/svg-icons/maps/store-mall-directory";
import MapsFlight from "material-ui/svg-icons/maps/flight";
import MapsLocalParking from "material-ui/svg-icons/maps/local-parking";
import MapsStreetview from "material-ui/svg-icons/maps/streetview";
import MapsHotel from "material-ui/svg-icons/maps/hotel";
import MapsLocalPharmacy from "material-ui/svg-icons/maps/local-pharmacy";
import MapsSubway from "material-ui/svg-icons/maps/subway";
import MapsLayersClear from "material-ui/svg-icons/maps/layers-clear";
import MapsLocalPhone from "material-ui/svg-icons/maps/local-phone";
import MapsTerrain from "material-ui/svg-icons/maps/terrain";
import MapsLayers from "material-ui/svg-icons/maps/layers";
import MapsLocalPizza from "material-ui/svg-icons/maps/local-pizza";
import MapsTraffic from "material-ui/svg-icons/maps/traffic";
import MapsLocalActivity from "material-ui/svg-icons/maps/local-activity";
import MapsLocalPlay from "material-ui/svg-icons/maps/local-play";
import MapsTrain from "material-ui/svg-icons/maps/train";
import MapsLocalAirport from "material-ui/svg-icons/maps/local-airport";
import MapsLocalPostOffice from "material-ui/svg-icons/maps/local-post-office";
import MapsTram from "material-ui/svg-icons/maps/tram";
import MapsLocalAtm from "material-ui/svg-icons/maps/local-atm";
import MapsLocalPrintshop from "material-ui/svg-icons/maps/local-printshop";
import MapsTransferWithinAStation from "material-ui/svg-icons/maps/transfer-within-a-station";
import MapsLocalBar from "material-ui/svg-icons/maps/local-bar";
import MapsLocalSee from "material-ui/svg-icons/maps/local-see";
import MapsZoomOutMap from "material-ui/svg-icons/maps/zoom-out-map";
import MapsLocalCafe from "material-ui/svg-icons/maps/local-cafe";
import MapsLocalShipping from "material-ui/svg-icons/maps/local-shipping";

const components = [
  "add-location",
  "local-car-wash",
  "local-taxi",
  "beenhere",
  "local-convenience-store",
  "map",
  "directions-bike",
  "local-dining",
  "my-location",
  "directions-boat",
  "local-drink",
  "navigation",
  "directions-bus",
  "local-florist",
  "near-me",
  "directions-car",
  "local-gas-station",
  "person-pin-circle",
  "directions-railway",
  "local-grocery-store",
  "person-pin",
  "directions-run",
  "local-hospital",
  "pin-drop",
  "directions-subway",
  "local-hotel",
  "place",
  "directions-transit",
  "local-laundry-service",
  "rate-review",
  "directions-walk",
  "local-library",
  "restaurant-menu",
  "directions",
  "local-mall",
  "restaurant",
  "edit-location",
  "local-movies",
  "satellite",
  "ev-station",
  "local-offer",
  "store-mall-directory",
  "flight",
  "local-parking",
  "streetview",
  "hotel",
  "local-pharmacy",
  "subway",
  "layers-clear",
  "local-phone",
  "terrain",
  "layers",
  "local-pizza",
  "traffic",
  "local-activity",
  "local-play",
  "train",
  "local-airport",
  "local-post-office",
  "tram",
  "local-atm",
  "local-printshop",
  "transfer-within-a-station",
  "local-bar",
  "local-see",
  "zoom-out-map",
  "local-cafe",
  "local-shipping"
];

class MapsIcons extends Component {
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

export default withRouter(MapsIcons);
