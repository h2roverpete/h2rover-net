import {PageContext} from "./Page";
import {useContext} from "react";

export default function PageTitle() {
  const pageContext = useContext(PageContext);
  return (
    <h1 className="PageTitle">{pageContext.pageData?.PageTitle}</h1>
  )
}