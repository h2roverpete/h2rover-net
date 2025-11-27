import './App.css';


import RestAPI from './framework/api/api';
import Site from "./framework/ui/content/Site";
import MyPage from "./MyPage";

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
    parseInt(process.env.REACT_APP_SITE_ID),
    process.env.REACT_APP_BACKEND_HOST,
    process.env.REACT_APP_API_KEY
  );
  return (
    <Site
      restApi={restApi}
      googleId={process.env.REACT_APP_GOOGLE_ID}
      pageElement={MyPage}
    />
  );
}