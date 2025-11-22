import './App.css';
import './GuestBook.css'

import Head from './framework/ui/content/Head'
import Copyright from './framework/ui/content/Copyright'
import RestAPI from './framework/api/api';
import Site from "./framework/ui/content/Site";
import Page from "./framework/ui/content/Page";
import PageContent from "framework/ui/content/PageContent";
import NavBar from "framework/ui/content/NavBar";
import Breadcrumbs from "framework/ui/content/Breadcrumbs";
import PageTitle from "framework/ui/content/PageTitle";
import PageSections from "framework/ui/content/PageSections";
import GuestBook from "framework/ui/guestbook/GuestBook";
import Logo from "./Logo";

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
    "https://dev.h2rover.net",
    "blahblahblah123"
  );
  return (
    <Site restApi={restApi} googleId={'G-L4CKYJ846Z'}>
      <Page>
        <Head/>
        <Logo/>
        <NavBar expand={'sm'} theme={'dark'}/>
        <PageContent>
          <Breadcrumbs/>
          <PageTitle/>
          <PageSections/>
          <GuestBook guestBookId={229} pageId={8678}/>
        </PageContent>
        <Copyright startYear={'2010'}/>
      </Page>
    </Site>
  );
}