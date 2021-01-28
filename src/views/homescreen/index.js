import React from 'react'; 
import Banner from './banner/index';
import { Grid ,makeStyles} from '@material-ui/core';
import { Card } from 'antd';

import pic1 from '../../asset/img/1.jpg';
import pic2 from '../../asset/img/2.png';
import pic3 from '../../asset/img/3.jpg';
 
const { Meta } = Card;

const useStyles = makeStyles(theme=>({
        container:{
                marginTop:20,
                marginBottom:20,
                // ...theme.breakpoints.down('md')
        },
        cardbody:{
                padding:50,
                alignItems:'center',
                justifyContent:'center',
         },
        container2:{
                flexDirection:'row',
                marginTop:50,
        },
        videocontainer:{
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                padding:20,
                backgroundColor:theme.palette.primary.main,
                [theme.breakpoints.down('sm')]:{
                        padding:10,
                        flexDirection:'column',

                       },

        }
}))

const HomeScreen = () =>{
        const classes = useStyles()

    return( 
            <React.Fragment>

                <Grid container alignItems='center' justify='center'>
                        <Grid container item   justify='center' alignItems='center'>
                                <Banner/>
                        </Grid>
                </Grid>
                <Grid container alignItems='center' className={classes.container} >
                        <Grid container alignItems='center' justify='center'>
                                <Grid container item  className={classes.cardbody}>
                                        <Card bordered
                                         style={{ width: '100%',margin:10}}
                                        cover={<img alt="example" src={pic2} />}
                                        >
                                        <Meta title="GENİŞ MAKİNA PARKURU"   />
                                        </Card>
                                </Grid>
                        </Grid>
                        <Grid container alignItems='center' className={classes.videocontainer} spacing={6}>
                                <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                <iframe title='video1' width="560" height="315" src="https://www.youtube.com/embed/bRnPfE8hlXY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                </Grid>
                                <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                <iframe  title='video2' width="560" height="315" src="https://www.youtube.com/embed/ESNvLynAanQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                </Grid>
                                <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                <iframe  title='video3' width="560" height="315" src="https://www.youtube.com/embed/iTL8162qy7c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                                   <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                   <iframe  title='video4' width="560" height="315" src="https://www.youtube.com/embed/V-7zXcbgyFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                </Grid>
                        </Grid>

                        <Grid container alignItems='center' justify='center'  className={classes.container2} spacing={20}>
                                <Grid container item  xl={6} lg={6} xs={12} md={12} sm={12}   justify='center'>
                                        <Card
                                         bordered
                                         style={{ width: '90%'   }}
                                        cover={<img alt="example" src={pic1}   />}
                                        >
                                        <Meta title="Mühendislik Hizmetleri" description='Sektöründeki 10 yılı aşkın birikimi ile kaliteden ödün vermeden müşteri ve çözüm odaklı çalışmayı ilke edinmiş olan SARP KALIP ideal mühendislik çözümleri üretir.'   />
                                        </Card>
                                </Grid>
                                <Grid container item  xl={6} lg={6} xs={12} md={12} sm={12} justify='center'>
                                <Card bordered
                                        style={{ width: '90%'   }}
                                        cover={<img alt="example"  src={pic3}   />}
                                        >
                                        <Meta title="Tasarım desteği" description='Müşterilerimizin projeleri kapsamında yüksek kaliteli destek verme.'   />
                                        </Card>
                                </Grid>   

                        </Grid>
                </Grid>
            </React.Fragment>
               
       	
 

  
    )
}

export default HomeScreen;