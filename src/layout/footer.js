import React from 'react';
import {makeStyles,Grid, Typography,useMediaQuery,useTheme} from '@material-ui/core';
import FooterLogo from '../asset/img/footerlogo.svg';
import { Email, Phone, Phonelink } from '@material-ui/icons';
import Link from '@material-ui/core/Link';

import { Layout } from 'antd';

const { Footer} = Layout;


const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor: theme.palette.primary.main,
        padding:0,
        width:'100%'
    },
    container:{
        //  height:'300px',
        width:'100%',
        padding:15,
 
     },
     text:{
        color:'white'


     },
     text2:{

        color:'white'

     },
    //  footertext:{
    //     ...theme.typography.text,
    //         [theme.breakpoints.down('md')]:{
    //         height:'250px'
    //     },
    // },
    footerlogo:{
        height:'300px',
        width:'100%',
        [theme.breakpoints.down('lg')]:{
            height:'250px'
        },
        margin:0,
        // verticalAlign:'bottom'
  
    }
}))


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{color:'white'}}>
        {'Design By  '}
        <Link color="inherit" href="http://mitrotech.net/">
          MitroTech DTC
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Footers = ()=> { 
 
      

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const Styles=useStyles();
    return ( 
        <>
        <footer className={Styles.footer} > 
                <Grid container  className={Styles.container} alignItems='center' justify='center'  >
                    <Grid container item  lg={6} xl={6} md={6} sm={12} xs={12} justify='center' style={{flexDirection:'column'}}>
                         <Typography variant="subtitle1" paragraph className={matches?Styles.text:Styles.text2} >
                        Organize Sanayi Bölgesi 75.Yıl Bulvarı</Typography>
                        <Typography variant="subtitle1" paragraph  className={matches?Styles.text:Styles.text2} >
                        Demirciler Sanayi Sitesi B Blok No: 39  </Typography>
                        <Typography variant="subtitle2" paragraph  className={matches?Styles.text:Styles.text2} > NİLÜFER - BURSA, TÜRKİYE</Typography>
                        <Typography variant='caption' paragraph className={Styles.text2} align='left'>  {`© ${(new Date()).getFullYear()}. SARP MASTAR APARAT MAKİNA KALIP SAN.TİC.LTD.ŞTİ.`}  </Typography>

                    </Grid>
                    <Grid container item  lg={6} xl={6} md={6} sm={12} xs={12}  justify='center' style={{flexDirection:'column'}}>
                        <Typography variant="body1" paragraph className={Styles.text2} align='right' > <Phone /> Telefon :  +90 (224) 241 41 82</Typography>
                        <Typography variant="body1" paragraph className={Styles.text2} align='right' > <Phonelink/>  Faks :  +90 (224) 241 41 83</Typography>
                        <Typography variant="body1" paragraph className={Styles.text2} align='right' >   Nilüfer Vergi Dairesi : 7510399185</Typography>

                        <Typography variant="body1" paragraph className={Styles.text2} align='right'  >   <Email/> Email :  ekaratepe@sarpkalip.com</Typography>
                    </Grid>
                    <Grid container item  lg={12} xl={12} md={12} sm={12} xs={12}  justify='center' style={{flexDirection:'column'}}>
                    {Copyright()}
                    </Grid>

                </Grid>
                {/* <img src={FooterLogo} className={Styles.footerlogo}  alt='footer'></img> */}
        </footer>
        {/* <Footer>{Copyright()}</Footer> */}
        </>

    )
}

export default Footers;