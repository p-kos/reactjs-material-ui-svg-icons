import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Item from "./Item";
import { withRouter } from "react-router-dom";
import SocialCake from "material-ui/svg-icons/social/cake";
import SocialNotificationsPaused from "material-ui/svg-icons/social/notifications-paused";
import SocialPoll from "material-ui/svg-icons/social/poll";
import SocialDomain from "material-ui/svg-icons/social/domain";
import SocialNotifications from "material-ui/svg-icons/social/notifications";
import SocialPublic from "material-ui/svg-icons/social/public";
import SocialGroupAdd from "material-ui/svg-icons/social/group-add";
import SocialPages from "material-ui/svg-icons/social/pages";
import SocialSchool from "material-ui/svg-icons/social/school";
import SocialGroup from "material-ui/svg-icons/social/group";
import SocialPartyMode from "material-ui/svg-icons/social/party-mode";
import SocialSentimentDissatisfied from "material-ui/svg-icons/social/sentiment-dissatisfied";
import SocialLocationCity from "material-ui/svg-icons/social/location-city";
import SocialPeopleOutline from "material-ui/svg-icons/social/people-outline";
import SocialSentimentNeutral from "material-ui/svg-icons/social/sentiment-neutral";
import SocialMoodBad from "material-ui/svg-icons/social/mood-bad";
import SocialPeople from "material-ui/svg-icons/social/people";
import SocialSentimentSatisfied from "material-ui/svg-icons/social/sentiment-satisfied";
import SocialMood from "material-ui/svg-icons/social/mood";
import SocialPersonAdd from "material-ui/svg-icons/social/person-add";
import SocialSentimentVeryDissatisfied from "material-ui/svg-icons/social/sentiment-very-dissatisfied";
import SocialNotificationsActive from "material-ui/svg-icons/social/notifications-active";
import SocialPersonOutline from "material-ui/svg-icons/social/person-outline";
import SocialSentimentVerySatisfied from "material-ui/svg-icons/social/sentiment-very-satisfied";
import SocialNotificationsNone from "material-ui/svg-icons/social/notifications-none";
import SocialPerson from "material-ui/svg-icons/social/person";
import SocialShare from "material-ui/svg-icons/social/share";
import SocialNotificationsOff from "material-ui/svg-icons/social/notifications-off";
import SocialPlusOne from "material-ui/svg-icons/social/plus-one";
import SocialWhatshot from "material-ui/svg-icons/social/whatshot";

const components = [
  "cake",
  "notifications-paused",
  "poll",
  "domain",
  "notifications",
  "public",
  "group-add",
  "pages",
  "school",
  "group",
  "party-mode",
  "sentiment-dissatisfied",
  "location-city",
  "people-outline",
  "sentiment-neutral",
  "mood-bad",
  "people",
  "sentiment-satisfied",
  "mood",
  "person-add",
  "sentiment-very-dissatisfied",
  "notifications-active",
  "person-outline",
  "sentiment-very-satisfied",
  "notifications-none",
  "person",
  "share",
  "notifications-off",
  "plus-one",
  "whatshot"
];

class SocialIcons extends Component {
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

export default withRouter(SocialIcons);
