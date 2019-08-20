import React from "react"
//import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import styles from './index.module.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.titleContainer}>
      <h1>Stock Market News</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          HELLO
        </Grid>
      </Grid>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
