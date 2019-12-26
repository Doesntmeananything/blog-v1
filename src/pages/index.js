import React from "react";
import { Link } from "gatsby";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "35px",
        }}
      >
        <Link to="/blog/" style={{ boxShadow: "none" }}>
          <Button>Go to Blog</Button>
        </Link>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ boxShadow: "none" }}
        >
          <Button>Go to Twitter</Button>
        </a>
        <a
          href="https://github.com/Doesntmeananything"
          target="_blank"
          rel="noopener noreferrer"
          style={{ boxShadow: "none" }}
        >
          <Button>Go to GitHub</Button>
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
