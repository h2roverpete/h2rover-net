import {useContext} from "react";
import {SiteContext} from "./Site";

/**
 * @typedef CopyrightProps
 *
 * @property {string} [startYear]
 */

/**
 * Insert a copyright element.
 *
 * Style: A <div> element with class name "Copyright"
 *
 * @param props{CopyrightProps}
 * @returns {JSX.Element}
 * @constructor
 */
function Copyright(props) {

  const {siteData} = useContext(SiteContext);

  return (
    <div className="Copyright">
      &copy;{props.startYear ? `${props.startYear}-` : ''}{new Date().getFullYear()} {siteData?.SiteName}. All rights
      reserved.
    </div>
  )
}

export default Copyright;