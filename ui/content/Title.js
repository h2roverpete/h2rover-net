import {useContext} from "react";
import {PageContext} from "./Page";

/**
 * Component to show page title
 *
 * Class: an <h1> element with class name "title"
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Title() {
  const {pageData} = useContext(PageContext)
  return (
        <h1 className="title Title">{pageData ? pageData.PageTitle : (<>&nbsp;</>)}</h1>
  )
}