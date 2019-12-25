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
      <Link to="/blog/">
        <Button marginTop="35px">Go to Blog</Button>
      </Link>
    </Layout>
  );
};

export default IndexPage;
