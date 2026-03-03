import Head from "framework/ui/content/Head";
import NavBar from "framework/ui/content/NavBar";
import PageContent from "framework/ui/content/PageContent";
import PageTitle from "framework/ui/content/PageTitle";
import PageSections from "framework/ui/content/PageSections";
import React from "react";
import Breadcrumbs from "framework/ui/content/Breadcrumbs";
import Logo from "framework/ui/content/Logo";

import logo from "./assets/logo.png"
import PageNavigation from "framework/ui/content/PageNavigation";
import PageSwiper from "framework/ui/content/PageSwiper";

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
  return (<>
    <Head/>
    <Logo src={logo}/>
    <NavBar expand={'sm'}/>
    <div className={`PageArea`}>
      <PageSwiper {...props} >
        <PageContent>
          <Breadcrumbs/>
          <PageTitle/>
          <PageSections/>
        </PageContent>
      </PageSwiper>
    </div>
    <PageNavigation/>
  </>)
    ;
}