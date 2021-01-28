
import React  from 'react';
import { Carousel } from 'antd';
import {makeStyles,Typography,Grid,Button,useMediaQuery,useTheme} from '@material-ui/core';

import banner1 from '../../../asset/img/banner1.jpg'
import banner2 from '../../../asset/img/banner2.jpg'

 
const useStyles = makeStyles(theme=>({
    content1:{
        height: '600px',
        width:'100%',
        color: 'black',
        opacity:0.9,
        backgroundImage:   `url(${banner1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat  : 'no-repeat',
        overflow: 'hidden',

    },
    content2:{
        height: '400px',
        width:'100%',
        color: 'black',
        opacity:0.8,
        backgroundImage:  `url(${banner2})`,
        backgroundSize:'100%',
        backgroundRepeat:'none'
    },
    body:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        padding:20
    },
    paragraph:{
        padding:50,
        backgroundColor:'white',
        opacity:0.7,
        height:'60%',
        flexDirection:'column',
        [theme.breakpoints.down('lg')]:{
            flexDirection:'row',
            justify:'space-around',
            height:'40%',

        }
    },
    title:{
        color:'black',
        margin:5    
    },
    btn:{
        marginLeft:'30%',
        color:'white',
        borderColor:'white'
     }
    }))

const  Banner  = ()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
     
    
 return (   
    
             <div className={classes.content1} >
                <Grid container className={classes.body}  alignItems='center' justify='center' spacing={12}>
                    <Grid container item  xl={8} md={8} lg={8} xs={12} sm={12}  justify='center' alignItems='center' className={classes.paragraph} >
                        <Typography align='center' variant={matches?'h3':'h5'}  className={classes.title}>SARP MASTAR APARAT MAKİNA KALIP  </Typography>

                       {matches ? <Typography  paragraph align='left' variant='subtitle1'  className={classes.title}> Kurucu ortaklarının talaşlı imalat konusundaki bilgi ve tecrübelerini bir araya getirerek daha verimli bir şekilde sanayinin hizmetine sunmak amacıyla 2006 yılında kurulmuştur.</Typography>
                       :
                       <Button color='primary'  variant='contained'  onClick={()=>window.location.href='/iletisim' }  > İletişime Geç</Button>
                       }

                      </Grid>
                      {matches &&    <Grid item alignItems='right' xl={2} md={2} lg={2} xs={12} sm={12} >
                        <Button size='large' variant='outlined' className={classes.btn} onClick={()=>window.location.href='/iletisim'}> İletişime Geç</Button>
                    </Grid> }
                </Grid>
                {/* <Typography align='left' variant={matches?'h3':'h5'}  className={classes.title}>SARP MASTAR APARAT MAKİNA KALIP  </Typography> */}
            </div>

   )

}
export default Banner;


            // {/* <div className={classes.content2} >
            //     {/* <Grid container className={classes.body}  alignItems='center' justify='space-around' spacing={12}>
            //         <Grid container item  xl={10} md={10} lg={10} xs={12} sm={12}  className={classes.paragraph} >
            //             <Typography align='left'  variant={matches?'h3':'h5'}   className={classes.title}>SARP MASTAR APARAT MAKİNA KALIP  </Typography>
            //             {matches &&  <Typography align='left' variant='subtitle1'  className={classes.title}> Kurucu ortaklarının talaşlı imalat konusundaki bilgi ve tecrübelerini bir araya getirerek daha verimli bir şekilde sanayinin hizmetine sunmak amacıyla 2006 yılında kurulmuştur.</Typography>}
            //         </Grid>
            //         <Grid item alignItems='right' xl={2} md={2} lg={2} xs={12} sm={12} >
            //             <Button size='large' variant='outlined' className={classes.btn} onClick={()=>window.location.href='/iletisim'}> İletişime Geç</Button>
            //         </Grid>
            //     </Grid> */}
            //     <Typography align='left' variant={matches?'h3':'h5'}  className={classes.title}>SARP MASTAR APARAT MAKİNA KALIP  </Typography>
            // </div> */}