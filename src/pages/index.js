import React, { useState, useEffect } from "react"
//import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import Search from "../components/SearchComponent/search"
import Trends from "../components/trend-components/Trends"
import SEO from "../components/seo"

import styles from './index.module.scss'


const IndexPage = () => {
  const [stocks, setStocks] = useState([]);
  
  return (
  <Layout>
    <SEO title="Home" />
    <div className={styles.titleContainer}>
      <h1>Stock Market News</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Search stocks={stocks} setStocks={setStocks}/>
        </Grid>
        <Grid item xs={8}>
         <Trends stocks={stocks} />
        </Grid>
        <Grid item xs={12}>
          COOL STUFF GOES HERE
        </Grid>
      </Grid>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>)
}

export default IndexPage
