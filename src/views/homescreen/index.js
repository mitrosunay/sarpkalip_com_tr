import React from 'react'; 
import Banner from './banner/index';
import { Grid ,makeStyles} from '@material-ui/core';
import { Card } from 'antd';

import pic1 from '../../asset/img/1.jpg';
import pic2 from '../../asset/img/2.png';
import pic3 from '../../asset/img/otomasyon.jpg';
import pic4 from '../../asset/img/engineer.jpg';
import pic5 from '../../asset/img/design.jpg';

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
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                marginTop:50,
                padding:20,
                [theme.breakpoints.down('sm')]:{
                        padding:10,
                        flexDirection:'column',
                       },

        },
        videocontainer:{
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                padding:10,
                backgroundColor:theme.palette.primary.main,
                [theme.breakpoints.down('sm')]:{
                        padding:10,
                        flexDirection:'column',
                       },

        },
        videobody:{
                padding:20,
         }
}))


const CurrentYear   = () =>{

     

        return new Date().getFullYear()-2006
}


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
                                         style={{ width: '100%',margin:10 ,borderRadius:40}}
                                        cover={<img alt="example" src={pic2} style={{borderRadius:40}}/>}
                                        >
                                        <Meta title="Bünyesinde bulunan uzman tasarım ekibi ile profesyonel tasarım süreçlerini uluslararası standartlarda yönetebilmektedir. "   />
                                        </Card>
                                </Grid>
                        </Grid>
                        <Grid container alignItems='center' className={classes.videocontainer}  >
                                <Grid container item  xl={3} lg={3} xs={12} md={12} sm={12}   justify='center'>
                                        <Card
                                         bordered
                                         style={{ width: '90%',height:'350px' ,borderRadius:30  , margin:10,  }}
                                        cover={<img alt="example" src={pic1}    height='200px'  style={{borderRadius:30}}/>}
                                        >
                                        <Meta title="Mühendislik Hizmetleri" 
                                        description={`Sektöründeki  ${CurrentYear()} yıllık bilgi ve birikimi ile kaliteden ödün vermeden müşteri ve 
                                        çözüm odaklı çalışmayı ilke edinmiş olan firmamız ideal mühendislik çözümleri üretir.`}  />
                                        </Card>
                                </Grid>
                                <Grid container item xl={3} lg={3} xs={12} md={12} sm={12} justify='center' >
                                <Card bordered
                                         style={{ width: '90%',height:'350px' ,borderRadius:30  , margin:10,  }}
                                        cover={<img alt="example"  src={pic4}   height='200px' style={{borderRadius:30}}/>}
                                        >
                                        <Meta title="Üretim Planlama" 

                                        description='Üretim sürecinde, tecrübemiz ile zamandan ödün vermeden verimli proje yönetimi gerçekleştirerek etkin sonuçlar alabilirsiniz.'   />
                                        </Card>
                                </Grid>   
                                <Grid container item  xl={3} lg={3} xs={12} md={12} sm={12} justify='center'>
                                <Card bordered
                                         style={{ width: '90%',height:'350px' ,borderRadius:30  , margin:10,  }}
                                        cover={<img alt="example"  src={pic5}   height='200px' style={{borderRadius:30}}/>}
                                        >
                                        <Meta title="Tasarım desteği" 
                                        description='Müşterilerimizin projeleri kapsamında yüksek kaliteli tasarım desteği vermekteyiz.'   />
                                        </Card>
                                </Grid>

                                 <Grid container item xl={3} lg={3} xs={12} md={12} sm={12} justify='center'>
                                <Card bordered
                                         style={{ width: '90%',height:'350px' ,borderRadius:30  , margin:10,  }}
                                        cover={<img alt="example"  src={pic3}   height='200px' style={{borderRadius:30}} />}
                                        >
                                        <Meta title="Otomasyon " 
                                        description='Makine ve ekipmanlarınızı, PLC sistemleri kullanarak en son yeniliklere göre projelendirip, size çalışma rahatlığı katıyor ve zamandan tasarruf sağlıyoruz.'   />
                                        </Card>
                                </Grid>  
                        </Grid>

                        <Grid container alignItems='center' justify='center'  className={classes.container2} spacing={20}  >

                        <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                <iframe  style={{borderRadius:30,}} title='video1' width="450" height="275" src="https://www.youtube.com/embed/bRnPfE8hlXY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                </Grid>
                                <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                <iframe style={{borderRadius:30,}} title='video2' width="450" height="275"  src="https://www.youtube.com/embed/ESNvLynAanQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                </Grid>
                                <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>
                                <iframe  style={{borderRadius:30,}} title='video3' width="450" height="275"   src="https://www.youtube.com/embed/iTL8162qy7c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                                <Grid container item  className={classes.videobody}   xl={3} lg={3} xs={3} md={6} sm={12} justify='center'>  
                                   <iframe  style={{borderRadius:30,}}  title='video4' width="450" height="275"  src="https://www.youtube.com/embed/V-7zXcbgyFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                </Grid>
                      


                                  
                        </Grid>
                </Grid>
            </React.Fragment>
               
       	
 

  
    )
}

export default HomeScreen;