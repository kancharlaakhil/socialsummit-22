import React from "react";
import FooterWeb from "./WebView";
import FooterMob from "./MobileView";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";

const FooterHome = () => {
  const [width] = useWidthAndHeight();

  return (
    <React.Fragment>
      {width > 1150 ? <FooterWeb width={width} /> : <FooterMob width={width} />}
    </React.Fragment>
  );
};

export default FooterHome;