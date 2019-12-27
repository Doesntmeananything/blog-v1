import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AnimatedHero from "../components/animatedHero";
import Button from "../components/button";

const IndexPage = ({ location }) => {
  const siteTitle = "Doesn't mean anything";

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <AnimatedHero />
      <ButtonRow>
        <Link to="/blog/" style={{ boxShadow: "none" }}>
          <Button>Blog</Button>
        </Link>
        <StyledLink
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Twitter</Button>
        </StyledLink>
        <StyledLink
          href="https://github.com/Doesntmeananything"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>GitHub</Button>
        </StyledLink>
      </ButtonRow>
    </Layout>
  );
};

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
`;

const StyledLink = styled.a`
  box-shadow: none;
`;

export default IndexPage;
