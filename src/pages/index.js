import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AniamtedIcons from "../components/animatedIcons";
import Button from "../components/button";

const IndexPage = ({ location }) => {
  const siteTitle = "Welcome to my Thoughts, Ideas & Work.";

  return (
    <Layout location={location} title={siteTitle}>
      <AniamtedIcons />
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Link to="/blog/">
        <Button marginTop="35px">Go to Blog</Button>
      </Link>
    </Layout>
  );
};

export default IndexPage;
