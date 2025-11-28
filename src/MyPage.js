import Head from "framework/ui/content/Head";
import NavBar from "framework/ui/content/NavBar";
import PageContent from "framework/ui/content/PageContent";
import PageTitle from "framework/ui/content/PageTitle";
import PageSections from "framework/ui/content/PageSections";
import GuestBook from "framework/ui/guestbook/GuestBook";
import Copyright from "framework/ui/content/Copyright";
import Page from "framework/ui/content/Page";
import React from "react";
import Breadcrumbs from "framework/ui/content/Breadcrumbs";
import Logo from "framework/ui/content/Logo";

import './css/GuestBook.css'
import logo from "./assets/logo.png"

/**
 * @typedef MyPageProps
 *
 * @property {number} [pageId]  Specific page ID to display.
 */

/**
 * Component for site-specific page contents.
 *
 * @param props {MyPageProps}
 * @returns {JSX.Element}
 * @constructor
 */
export default function MyPage(props) {
  return (
    <Page {...props}>
      <Head/>
      <Logo src={logo}/>
      <NavBar expand={'sm'} theme={'dark'}/>
      <PageContent>
        <Breadcrumbs/>
        <PageTitle/>
        <PageSections/>
        <GuestBook guestBookId={229} pageId={8678}/>
      </PageContent>
      <Copyright startYear={'2010'}/>
    </Page>
  );
}