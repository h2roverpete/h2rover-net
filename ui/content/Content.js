import Section from './Section';
import React, {useContext, useEffect, useState} from "react";
import {PageContext} from "./Page";
import PageTitle from "./PageTitle";

/**
 * Element to show page content
 *
 * A <div> element with class names "content container"
 *
 * @param children{[JSX.Element]}   Elements to add at the end of page content.
 * @constructor
 */
export default function Content({children}) {

  const {pageData, sectionData} = useContext(PageContext);

  return (
    <div className="Content">
      <PageTitle/>
      {pageData && sectionData && (
        <div style={{padding: '0'}}>
          {pageData && sectionData && sectionData.map(section => (
            <Section sectionData={section} key={section.PageSectionID}/>
          ))}
          {children}
        </div>
      )}
    </div>
  )
}