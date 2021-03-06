import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Toggle from "../components/toggle";

import { rhythm } from "../utils/typography";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const blogPath = `${__PATH_PREFIX__}/blog/`;
  let header;

  if (location.pathname === rootPath || location.pathname === blogPath) {
    header = (
      <>
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontSize: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
        <Toggle />
      </>
    );
  } else {
    header = (
      <>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
        <Toggle />
      </>
    );
  }
  return (
    <Wrapper>
      <LayoutWrapper>
        <Header>{header}</Header>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()}, Andrey Krasnov</Footer>
      </LayoutWrapper>
    </Wrapper>
  );
};

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
  overflow: hidden auto;
`;

const Header = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
