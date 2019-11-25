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
        <Grid item xs={12}>
            To use this app please enter the stock symbol below in the search bar
            <br/>
            Due to resource constraints we are limited to 5 requests/min or 500 requests/day
        </Grid>
        <Grid item xs={4}>
          <Search stocks={stocks} setStocks={setStocks}/>
        </Grid>
        <Grid item xs={8}>
         <Trends stocks={stocks} />
        </Grid>
        <Grid item xs={12}>
            Source code is available on <a href="https://github.com/miyee/StockMarketNews" target="_blank">Github</a>
        </Grid>
      </Grid>
    </div>
  </Layout>)
}

export default IndexPage
