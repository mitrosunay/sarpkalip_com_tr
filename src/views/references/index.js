import React from 'react';
import { Grid ,makeStyles, Typography} from '@material-ui/core';
import {Card} from 'antd';
import pic from '../../asset/img/references.png'
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
const References = ()=>{
const classes = useStyles();


return( 
        <Grid container alignItems='center' className={classes.container} >
            <Grid container alignItems='center' justify='center'>
                <Card bordered
                    hoverable
                    style={{ width: '100%',padding:10}}
                    cover={<img alt="example" src={pic}  style={{width:'80%',alignSelf:'center',marginLeft:'10%'}}/>}
                    >
                    <Meta title={
                         <Typography variant='h6' align='center' style={{wordWrap:'inherit'}} >Referanslarımız.  </Typography>
                    }
                     />
                    </Card>
            </Grid>
        </Grid>
    )
}

export default References;