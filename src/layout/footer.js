import React from 'react';
import {makeStyles,Grid, Typography,useMediaQuery,useTheme} from '@material-ui/core';
import FooterLogo from '../asset/img/footerlogo.svg';
import { Email, Phone, Phonelink } from '@material-ui/icons';
const useStyles = makeStyles(theme=>({
    footer:{
        // backgroundColor: theme.palette.primary.main,
        padding:0

    },
    container:{
        //  height:'300px',
        width:'100%',
        padding:15,
        position:'absolute',

     },
     text:{
         ...theme.typography.text
     },
     text2:{

        color:'#314770',
        [theme.breakpoints.down('md')]:{
            color:'white'
        }
     },
     footertext:{
        ...theme.typography.text,
            [theme.breakpoints.down('md')]:{
            height:'250px'
        },
    },
    footerlogo:{
        height:'350px',
        [theme.breakpoints.down('lg')]:{
            height:'250px'
        },
        margin:0,
        verticalAlign:'bottom'
  
    }
}))


const Footer = ()=> { 
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const Styles=useStyles();
    return ( 
        <footer className={Styles.footer} > 
                <Grid container  className={Styles.container} alignItems='center' justify='center' spacing={6}>
                    <Grid container item  lg={6} xl={6} md={6} sm={6} xs={6} justify='flex-start' style={{flexDirection:'column'}}>
                         <Typography variant="subtitle1" paragraph className={matches?Styles.text:Styles.text2} >
                        Organize Sanayi Bölgesi 75.Yıl   </Typography>
                        <Typography variant="subtitle1" paragraph  className={matches?Styles.text:Styles.text2} >
                       Bulvarı Demirciler Sanayi Sitesi B Blok No: 39  </Typography>
                        <Typography variant="subtitle2" paragraph  className={matches?Styles.text:Styles.text2} > Nilüfer |  BURSA, Türkiye</Typography>
                    </Grid>
                    <Grid container item  lg={6} xl={6} md={6} sm={6} xs={6} justify='flex-end' style={{flexDirection:'column'}}>
                        <Typography variant="body1" paragraph className={Styles.text2} align='right' > <Phone /> Telefon :  +90 (224) 241 41 82</Typography>
                        <Typography variant="body1" paragraph className={Styles.text2} align='right' > <Phonelink/>  Faks :  +90 (224) 241 41 83</Typography>
                        <Typography variant="body1" paragraph className={Styles.text2} align='right'  >   <Email/> Email :  ekaratepe@sarpkalip.com</Typography>
                        <Typography variant='caption' paragraph className={Styles.text2} align='right'>  {`© ${(new Date()).getFullYear()}. SARP MASTAR APARAT MAKİNA KALIP SAN.TİC.LTD.ŞTİ.`}  </Typography>
                    </Grid>
                </Grid>
                <img src={FooterLogo} className={Styles.footerlogo}  alt='footer'></img>

        </footer>
    )
}

export default Footer;