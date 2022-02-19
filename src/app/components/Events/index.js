import React from "react";
import EventsWeb from "./Web/WebView";
import EventsMob from "./Mobile/MobView";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";

const Events = () => {
  const [width] = useWidthAndHeight();

  return (
    <React.Fragment>
      {width > 1150 ? <EventsWeb/> : <EventsMob/>}
    </React.Fragment>
  );
};

export default Events;