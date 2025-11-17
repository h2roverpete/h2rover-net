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
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
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
        <Navbar
          expand="sm"
          className="NavBar"
          data-bs-theme="dark"
          fixed="top"
        >
          <Container className="NavBarContents">
            <Navbar.Brand href={'#'} onClick={() => {
              setPageId(outlineData?.[0].PageID)
            }}>
              <>{props.icon && (
                <img
                  src={props.icon}
                  alt={siteData?.SiteName}
                  height={45}
                  style={{marginRight: '10px'}}
                />
              )}</>
              <span className={'NavBarBrand'}>{props.brand && (
                <>
                  {props.brand}
                </>
              )}</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="MainNavigation">
              <Nav className="me-auto">
                {getChildren(0).map((item) => (
                  <>{item.HasChildren ? (
                    <RecursiveDropdown pageData={item}/>
                  ) : (
                    <Nav.Link
                      onClick={() => setPageId(item.PageID)}
                    >
                      {item.NavTitle}
                    </Nav.Link>
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
