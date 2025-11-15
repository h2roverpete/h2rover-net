import {useContext} from "react";
import {SiteContext} from "./Site";
import {PageContext} from "./Page";
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown} from "react-bootstrap";

export default function NavBar(props) {

  const {siteData, outlineData, getChildren} = useContext(SiteContext);
  const {setPageId, pageData} = useContext(PageContext);

  function RecursiveDropdown(props) {
    return (
      <NavDropdown title={props.pageData.NavTitle} id="basic-nav-dropdown">
        <>{getChildren(props.pageData.PageID).map((item) => (
          <>{item.HasChildren ? (
            <RecursiveDropdown pageData={item}/>
          ) : (
            <NavDropdown.Item
              onClick={() => setPageId(item.PageID)}
            >
              {item.NavTitle}
            </NavDropdown.Item>
          )}</>
        ))}</>
      </NavDropdown>
    );
  }

  const children = getChildren?.(0);
  console.debug(`Navbar found ${children.length} items.`);
  return (
    <>
      {outlineData && (
        <Navbar expand="sm" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">{siteData.SiteName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {getChildren(0).map((item) => (
                  <>{item.HasChildren ? (
                    <RecursiveDropdown pageData={item}/>
                  ) : (
                    <Nav.Link onClick={() => setPageId(item.PageID)}>{item.NavTitle}</Nav.Link>
                  )}</>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  )
}
