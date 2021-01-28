import React from 'react';
import { Grid,makeStyles, Typography,  } from '@material-ui/core';
import {Image,Divider} from 'antd';
import des1 from '../../asset/img/des1.png'
import des7 from '../../asset/img/des7.png'
import des8 from '../../asset/img/des8.png'
import des9 from '../../asset/img/des9.png'
import des10 from '../../asset/img/des10.png'
import des11 from '../../asset/img/des11.png'
import des12 from '../../asset/img/des12.jpg'
import des13 from '../../asset/img/des13.jpg'
import des14 from '../../asset/img/des14.jpg'
import des15 from '../../asset/img/des15.jpg'
import des16 from '../../asset/img/des16.jpg'
import mac1 from '../../asset/img/mac1.jpg'
import mac2 from '../../asset/img/mac2.jpg'
import mac3 from '../../asset/img/mac3.jpg'
import mac4 from '../../asset/img/mac4.jpg'
import mac5 from '../../asset/img/mac5.jpg'
import mac6 from '../../asset/img/mac6.jpg'
import mac7 from '../../asset/img/mac7.jpg'
import mac8 from '../../asset/img/mac8.jpg'
import mac9 from '../../asset/img/mac9.jpg'
import mac10 from '../../asset/img/mac10.jpg'
import mac11 from '../../asset/img/mac11.jpg'
import mac12 from '../../asset/img/mac12.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    item:{
        width:'30%',
        alignItems:'center'
    }
  }));

const Gallery = ()=>{

const classes = useStyles();
const descount =[ des1,des7,des8,des8,des9,des10,des11,des12,des13,des14,des15,des16]
const maccount =[ mac1,mac2,mac3,mac4,mac5,mac6,mac7,mac8,mac9,mac10,mac11,mac12]

 console.log(descount)

return( 
    <React.Fragment>
        <Grid container style={{height:'100%',width:'100%'}} spacing={12} justify='center' alignItems='center'>
            <Divider></Divider>
            <Grid container key={'header1'} item className={classes.item} justify='center' alignItems='center'   lg={12} xl={12} md={12}  xs={12} sm={12}>
                <Typography variant='h4'> - Tasarımlar - </Typography>
            </Grid>
            <Divider></Divider>
            {descount.map((tile,index) => 
                <Grid container key={index}  item className={classes.item} justify='center' alignItems='center'   lg={4} xl={3} md={6}  xs={12} sm={12}>
                        <Image src={tile} alt={index}  width='50%'/>
                </Grid>
                )}
        </Grid>
         <Grid container style={{height:'100%',width:'100%'}} spacing={12} justify='center' alignItems='center'>
            <Divider></Divider>
            <Grid container key={'header1'} item className={classes.item} justify='center' alignItems='center'   lg={12} xl={12} md={12}  xs={12} sm={12}>
                <Typography variant='h4'> - Atölye - </Typography>
            </Grid>
            <Divider></Divider>
            {maccount.map((tile,index) => 
                <Grid container key={index} item className={classes.item} justify='center' alignItems='center'   lg={4} xl={3} md={6}  xs={12} sm={12}>
                        <Image src={tile} alt={index}  width='50%'/>
                </Grid>
                )}


        </Grid>
        <Divider></Divider>
      </React.Fragment> 
       )
}

export default Gallery;