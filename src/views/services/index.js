import React from 'react';
import { Grid ,makeStyles, Typography} from '@material-ui/core';
import {Card} from 'antd';
 import pic1 from '../../asset/img/1.jpg';
import pic2 from '../../asset/img/2.png';
import pic3 from '../../asset/img/3.jpg';
import pic4 from '../../asset/img/reverse.png';

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

const Services = ()=>{
const classes = useStyles();
 

return( 
        <Grid container alignItems='center' className={classes.container}  justify='center' spacing={4}>
            <Grid container item    justify='center' xl={6} lg={6} xs={12} md={6} sm={12} >
                <Card bordered
                     style={{ width: '90%',padding:30,alignSelf:'center',height:'800px'}}
                    cover={<img alt="example" src={pic1}  style={{width:'100%',height:'400px'  }}/>}
                    >
                    <Meta title={
                         <Typography variant='h6' align='center' >Ürün Geliştirme </Typography>
                    }
                    description={
                        <>
                            <Typography variant='body1' align='left'  style={{marginTop:10,textAlign:'center'}} >
                            Mevcut ürünler küresel pazarın rekabeya üretime yardımcı ekipmanların geliştirilmesi, yenilikçi fikirler ile donatılıp yeniden tasarlanması projelerini gt baskısı yüzünden müşterilerin ihtiyaçlarına tam cevap verememe, yenilenmeme, yüksek üretim ve malzeme maliyeti sebebi ile pazar payının düşme riski taşımaktadır. Mevcut ürünlerin yaratıcı fikirler ile yeni konsept ile geliştirilmesi, mekanik alt yapısının yenilenmesi, daha düşük maliyet ile üretilebilmesini sağlamak amacıyla mühendislik projeleri gerçekleştirmektedir.                            </Typography>
                         </>
                    } 

                    />
                    </Card>
            </Grid>
            <Grid container item xl={6} lg={6} xs={12} md={6} sm={12} >
                <Card bordered
                     
                    style={{ width: '90%',padding:30,alignSelf:'center',height:'800px'}}
                    cover={<img alt="example" src={pic2}  style={{width:'100%',height:'400px'  }}/>}
                    >
                    <Meta title={
                         <Typography variant='h6' align='center' >Ürün Tasarımı </Typography>
                    }
                    description={
                        <>
 
                            <Typography variant='body1' align='left'  style={{marginTop:10,textAlign:'center'}}>
                            Konsept tasarımdan başlayarak ürünün seri üretimine kadar olan Tasarım, Geliştirme, Mühendislik, Prototip ve seri üretim hazırlık aşamalarını içeren yol haritası üzerinden proje gerçekleştirmek.
                            </Typography>
                            <Typography variant='body1' align='left'  style={{marginTop:10,textAlign:'center'}}>
                            Endüstriyel ürün konsept tasarımından başlayarak ürünün geliştirilmesi, detaylı mekanik tasarım oluşturulması, seri üretime uygun tasarımlar geliştirilmektedir.                     
                            </Typography>
                            <Typography variant='body1' align='left'  style={{marginTop:10,textAlign:'center'}}>
                            Firmamız gerek mevcut Ar-Ge alt yapıları olan firmalara destek vererek gerekse projeyi tamamen üstlenerek uzmanlığı ve tecrübesi ile firmalara destek vermektedir. 
                            </Typography> 
                        </>
                    } 

                    />
                    </Card>
            </Grid>
            <Grid container item xl={6} lg={6} xs={12} md={6} sm={12}>
                <Card bordered
                    style={{ width: '90%',padding:30,alignSelf:'center',height:'800px'}}
                    cover={<img alt="example" src={pic3}  style={{width:'100%',height:'400px'  }}/>}
                    >
                    <Meta title={
                                                  <Typography variant='h6' align='center' >İmalat </Typography>

                    }
                    description={
                        <>
                        <Typography variant='body1' align='left'  style={{marginTop:10,textAlign:'center'}}> 
                            Makina imalat sanayii, hemen hemen bütün üretim sektörlerine girdi sağlamakta olup, bu sektörlerin itici gücüdür.
                            Makine ve aksamları, kullanacak sektör ve kullanıcının taleplerine ve ürünün fonksiyonlarına göre tasarım ve proje 
                            aşamasından geçer, yeniden planlanır ve üretilir. Şirketimiz bu üretim proseslerinde ve de makinaların kullanımı 
                            sonrası doğan yedek parça ihtiyaçları için,
                            ciddi bir tedarikçi konumundadır.
                        </Typography>

                            
                        </>
                    } 

                    />
                    </Card>
            </Grid>
            <Grid container item xl={6} lg={6} xs={12} md={6} sm={12}>
                <Card bordered
                    style={{ width: '90%',padding:30,alignItems:'center',height:'800px'}}
                    cover={<img alt="example" src={pic4}  style={{width:'100%',height:'400px'  }}/>}
                    >
                    <Meta title={
                          <Typography variant='h6' align='center' > Tersine Mühendislik</Typography>

                    }
                    description={
                        <>
                            <Typography variant='body1' align='left'  style={{marginTop:10,textAlign:'center'}}>
                            Ürünün konsept aşamasından başlayıp mekanik tasarımının nasıl, ne amaçlanarak, hangi üretim yöntemleri ile ve ne şekilde yapıldığını ortaya çıkarmak amacıyla geriye dönük olarak incelenmesidir.  
                            Bu metodu “Geriye Dönük” olarak tanımlamamızın sebebi; ürünün konsept aşamasından başlayıp mekanik tasarımının nasıl, ne amaçlanarak, hangi üretim yöntemleri ile ve ne şekilde yapıldığını ortaya çıkarmak için geriye dönük olarak incelenmesidir.
                            Reverse Engineering olarak tanımlanan metotun öncelikli amacı, ürününün tasarım ve üretim geçmişini detayları ile ortaya çıkarmaktır.
                            Geriye Dönük Mühendislik metodu mevcut ürünlerin incelenmesinin yanı sıra yeni bir konsept oluşturmada, daha farklı bir yaklaşım ile aynı amaca yönelik daha iyi bir ürünün çıkarılmasında kullanılmaktadır.                             
                            Mühendisliğin konstrüksiyon, tasarım, geliştirme, analiz ve malzeme gibi farklı uzmanlıklarının bir araya gelerek bir
                             ekip çalışmasının gerçekleştiği projeler de uzmanlığımız ve tecrübelerimiz müşterilerimize doğru, kaliteli ve hızlı çözümler sağlamamıza olanak vermektedir.                            </Typography> 
                        </>
                    } 

                    />
                    </Card>
            </Grid>
        </Grid>
    )
}

export default Services;