import React from "react"
//import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import Search from "../components/SearchComponent/search"
import SEO from "../components/seo"

import styles from './index.module.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.titleContainer}>
      <h1>Stock Market News</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Search />
        </Grid>
        <Grid item xs={8}>
          WHAT IS GOOD MY DUDE
        </Grid>
      </Grid>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
