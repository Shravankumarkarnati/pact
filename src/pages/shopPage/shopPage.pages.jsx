import React from "react";
import "./shopPage.styles.scss";
import ShopOverview from "../../components/shopOverview/shop-overview.component";
import ShopCollection from "../shopCollectionPage/shopCollection.page";
import { Route } from "react-router-dom";

const Homepage = ({ match }) => {
  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={ShopOverview} />
      <Route path={`${match.path}/:collectionId`} component={ShopCollection} />
    </div>
  );
};

export default Homepage;
