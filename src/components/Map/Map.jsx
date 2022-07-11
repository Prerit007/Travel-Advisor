import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import mapStyles from "../../mapStyles";
import useStyles from "./styles.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coord = { lat: 100, lng: 100 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDUYXAgCS6u61GE--6iPZStp5jali0kkjc" }}
        defaultCenter={coord}
        center={coord}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
