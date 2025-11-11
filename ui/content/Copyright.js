/**
 * Insert a copyright element.
 *
 * Style: A <div> element with class name "copyright"
 *
 * @param siteData{SiteData}
 * @returns {JSX.Element}
 * @constructor
 */
function Copyright({siteData}) {
    return (
        <>
          {siteData && (
              <div className="copyright">
                  Copyright {new Date().getFullYear()} {siteData.SiteName}. All rights reserved.
              </div>
          )}
        </>
    )
}

export default Copyright;