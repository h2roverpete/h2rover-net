import './App.css';


import RestAPI from './framework/api/api';
import Site from "./framework/ui/content/Site";
import MyPage from "./MyPage";

/**
 * Display navigation bar.
 *
 * @param db{[RestAPI]}              Content Database.
 * @param pageId{Number}        Current navigation page.
 * @param setPageId{Function}   Callback for changing page ID.
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * Main component
 *
 * @returns {
 JSX.Element
 }
 * @constructor
 */
export default function App() {

  const restApi = new RestAPI(
    241,
    "https://prod.api.h2rover.net",
    "blahblahblah123"
  );
  return (
    <Site
      restApi={restApi}
      googleId={'G-L4CKYJ846Z'}
      pageElement={MyPage}
    />
  );
}