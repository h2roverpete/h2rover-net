import {useContext} from "react";
import {SiteContext} from "./Site";
import {PageContext} from "./Page";

/**
 * Simple navigation bar, top level only.
 *
 * @constructor
 */
export default function SimpleNavBar() {

  const {outlineData, getChildren} = useContext(SiteContext);
  const {pageData, setPageId} = useContext(PageContext);

  return (
    <div className="SimpleNavBar Navbar">
      {outlineData && getChildren(0).map(page => (
        <span
          key={page.PageID}
          className={'NavItem' + (page.PageID === pageData?.PageID ? ' current' : '')}
          onClick={() => setPageId(page.PageID)}
          style={{cursor:'pointer'}}
        >
          {page.NavTitle}
        </span>
      ))}
    </div>)
}