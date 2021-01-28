import React from 'react';
import NavBar from './navbar';
import Route from '../router/Route.main';
import {makeStyles,Grid} from '@material-ui/core';
import Footer from './footer';

const Landing = ()=> { 
    const Styles = useStyles();
 
    return ( 
        <React.Fragment>
            <NavBar/>
            <div className={Styles.toolbarMargin}></div>
                <Grid  container style={{  minHeight:'100% '  ,width:'100%' ,padding:10}} alignItems='center' justify='center' >
                    <Grid container item  className={Styles.grid_item}>
                        <Route/>
                    </Grid>
                </Grid>
            <Footer/>
        </React.Fragment>
    )
}

export default Landing;

const useStyles = makeStyles((theme) => ({
    toolbarMargin:{
        ...theme.mixins.toolbar,
     },
     grid_item:{
        height:'100%',
        width:'100%',
      }
}))
