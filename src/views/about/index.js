import React from 'react';
import { Grid ,makeStyles, Typography} from '@material-ui/core';
import {Card} from 'antd';
import pic from '../../asset/img/sarp.jpeg'
const { Meta }= Card;

const useStyles = makeStyles(theme=>({
    container:{
            marginTop:20,
            marginBottom:20,
            // ...theme.breakpoints.down('md')
    },
    cardbody:{
            padding:50,
            alignItems:'center',
            justifyContent:'center'
    },
    container2:{
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row'
    },
}))
const About = ()=>{
const classes = useStyles();
const description = ()=>{
    return ( 
    <>
            <Typography variant='body1' align='center'>
            Sarp Mastar Aparat Makina Kalıp San. Tic. Ltd. Şti. 2006 yılında Bursa'nın Küçük Sanayi Sitesinde ticari faaliyetine başlamıştır. 
            2008 yılından itibaren Organize Sanayi Bölgesinde faaliyetlerine devam etmektedir.
            </Typography>
            <Typography variant='body1' align='center'>
            Sektöre başladığı ilk günden bugüne kadar büyüme ve değişen, gelişen teknolojiye en hızlı şekilde uyum sağlamayı 
            kendisine kurumsallık çerçevesi içinde bir amaç edinmiştir.
            </Typography>
            <Typography variant='body1' align='center'>
            Gerekli tüm teknik eğitim ve bilgi donanımına sahip çalışanları ile sektörde öncü hizmet verdiği sanayi kuruluşlarına destek olmayı 
            bir prensip edinmiş ve bu doğrultuda rotasını belirlemiştir.
            </Typography>
    </>
    )
}

return( 
        <Grid container alignItems='center' className={classes.container} justify='center' >
            <Grid container item alignItems='center' justify='center'>
                <Card bordered
                     
                    style={{ width: '75%',margin:10,padding:20}}
                    cover={<img alt="example" src={pic}  style={{width:'30%',marginLeft:'35%'}}/>}
                    >
                    <Meta 
                    description={description()} />
                    </Card>
            </Grid>
        </Grid>
    )
}

export default About;