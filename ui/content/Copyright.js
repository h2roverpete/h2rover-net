import {useContext} from "react";
import {SiteContext} from "./Site";

/**
 * Insert a copyright element.
 *
 * Style: A <div> element with class name "copyright"
 *
 * @param siteData{SiteData}
 * @returns {JSX.Element}
 * @constructor
 */
function Copyright(props) {

    const {siteData} = useContext(SiteContext);

    return (
        <>
          {siteData && (
              <div className="Copyright">
                  &copy;{props.startYear?props.startYear:''}-{new Date().getFullYear()} {siteData.SiteName}. All rights reserved.
              </div>
          )}
        </>
    )
}

export default Copyright;