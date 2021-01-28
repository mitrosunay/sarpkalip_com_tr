import React from 'react';
 import {Grid, Typography,makeStyles, Divider} from '@material-ui/core';
import { Email, Phone, Phonelink } from '@material-ui/icons';
import pic from '../../asset/img/sarpmac.jpeg'
import pic2 from '../../asset/img/sarp.jpeg'

const useStyles = makeStyles(theme=>({
    footer:{
        // backgroundColor: theme.palette.primary.main,
        padding:0

    },
   
     text2:{
        color:'#314770',
        marginTop:10,
     },
     footertext:{
        ...theme.typography.text,
         
    },
    textcontainer:{
        flexDirection:'column'
    }
}))



const Contact = ()=>{
     const Styles = useStyles();
    return( 
        <Grid container align='center' justify='center' style={{padding:50}}>
            <Grid container item  justify='center'  lg={6} xl={6} md={12} sm={12} xs={12} className={Styles.textcontainer}>


                        <img alt="example" src={pic}  style={{width:'30%',marginLeft:'35%',marginBottom:30}}/>
                        <img alt="example" src={pic2} style={{width:'30%',marginLeft:'35%',marginBottom:30}}/>

            <Divider></Divider>
                        <Typography variant="h6" paragraph className={Styles.text2} >  Adres :</Typography>
                        <Typography variant="subtitle1" paragraph className={Styles.text2} >
                        Organize Sanayi Bölgesi 75.Yıl   </Typography>
                        <Typography variant="subtitle1" paragraph className={Styles.text2} >
                       Bulvarı Demirciler Sanayi Sitesi B Blok No: 39  </Typography>
                        <Typography variant="subtitle2" paragraph className={Styles.text2} > Nilüfer |  BURSA, Türkiye</Typography>

                <Divider></Divider>

                <Typography variant="body1" paragraph className={Styles.text2} align='center' > <Phone /> Telefon :  +90 (224) 241 41 82</Typography>
                <Typography variant="body1" paragraph className={Styles.text2} align='center' > <Phonelink/>  Faks :  +90 (224) 241 41 83</Typography>
                <Typography variant="body1" paragraph className={Styles.text2} align='center'  >   <Email/> Email :  ekaratepe@sarpkalip.com</Typography>

             </Grid>
            <Grid container item  align='center' justify='center'  lg={6} xl={6} md={12} sm={12} xs={12}>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.265150079713!2d28.942628152114782!3d40.225406475073605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca13fbbda3c825%3A0x7eaf0c6b358424cf!2sSarp%20Mastar%20Aparat%20Maki%CC%87na%20Kalip%20San.%20Ti%CC%87c.%20Ltd.%20%C5%9Eti%CC%87.!5e0!3m2!1str!2str!4v1611839671092!5m2!1str!2str" width="650" height="550"     /> 
            </Grid>
        </Grid> 
    )
}

export default Contact;