import React, { useState } from "react"
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Tabs, Tab} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from "../components/layout"
import Search from "../components/search-components/search"
// import Trends from "../components/trend-components/Trends"
import SEO from "../components/seo"

import styles from './index.module.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const MainPage = () => {
    const [stocks, setStocks] = useState([]);
    const [currentTab, setTab] = useState('News');

    // Handles setting the tab value on change
    const handleTabsChange = (event, newTabValue) => {
        setTab(newTabValue);
    };

    return (
        <Layout>
          <SEO title="Home" />
          <div className={styles.titleContainer}>
            <h1>Stock Market News</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    To use this app please enter the stock symbol below in the search bar<br/>
                    Due to resource constraints we are limited to 5 requests/min or 500 requests/day
                </Grid>
                <Grid item xs={4}>
                    <Search stocks={stocks} setStocks={setStocks}/>
                </Grid>
                <Grid item xs={8}>
                    <Tabs
                        value={currentTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleTabsChange}
                        aria-label="news and trends tabs"
                        centered
                    >
                        <Tab label="News" />
                        <Tab label="Trends" />
                    </Tabs>
                    {/* <Trends stocks={stocks} /> */}
                    <TabPanel value={currentTab} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={currentTab} index={1}>
                        Item Two
                    </TabPanel>
                </Grid>
                <Grid item xs={12}>
                    Source code is available on <a href="https://github.com/miyee/StockMarketNews" target="_blank">Github</a>
                </Grid>
            </Grid>
          </div>
        </Layout>
    )
}

export default MainPage;