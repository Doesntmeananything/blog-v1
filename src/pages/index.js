import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AnimatedHero from "../components/animatedHero";
import Button from "../components/button";

const IndexPage = ({ data, location }) => {
  const siteTitle = "Doesn't mean anything";

  const { github, twitter } = data.site.siteMetadata.social;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <AnimatedHero />
      <ButtonRow>
        <Link to="/blog/" style={{ boxShadow: "none" }}>
          <Button>Blog</Button>
        </Link>
        <StyledLink
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Twitter</Button>
        </StyledLink>
        <StyledLink
          href={`https://github.com/${github}`}
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

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default IndexPage;
