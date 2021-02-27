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
        <Grid container alignItems='center' className={classes.container}  justify='center'>
            <Grid item    justify='center'>
                <Card bordered
                     style={{ width: '100%',padding:30,alignSelf:'center'}}
                    cover={<img alt="example" src={pic1}  style={{width:'100%'  }}/>}
                    >
                    <Meta title={
                         <Typography variant='h6' align='center' >Ürün Geliştirme </Typography>
                    }
                    description={
                        <>
                            <Typography variant='body1' align='left'  style={{marginTop:10}} >
                            Mevcut ürünler küresel pazarın rekabeya üretime yardımcı ekipmanların geliştirilmesi, yenilikçi fikirler ile donatılıp yeniden tasarlanması projelerini gt baskısı yüzünden müşterilerin ihtiyaçlarına tam cevap verememe, yenilenmeme, yüksek üretim ve malzeme maliyeti sebebi ile pazar payının düşme riski taşımaktadır. Mevcut ürünlerin yaratıcı fikirler ile yeni konsept ile geliştirilmesi, mekanik alt yapısının yenilenmesi, daha düşük maliyet ile üretilebilmesini sağlamak amacıyla mühendislik projeleri gerçekleştirmektedir.                            </Typography>
                         </>
                    } 

                    />
                    </Card>
            </Grid>
            <Grid item >
                <Card bordered
                     
                    style={{ width: '100%',padding:30,alignSelf:'center'}}
                    cover={<img alt="example" src={pic2}  style={{width:'100%'  }}/>}
                    >
                    <Meta title={
                         <Typography variant='h6' align='center' >Ürün Tasarımı </Typography>
                    }
                    description={
                        <>
 
                            <Typography variant='body1' align='left'  style={{marginTop:10}}>
                            Konsept tasarımdan başlayarak ürünün seri üretimine kadar olan Tasarım, Geliştirme, Mühendislik, Prototip ve seri üretim hazırlık aşamalarını içeren yol haritası üzerinden proje gerçekleştirmek.
                            </Typography>
                            <Typography variant='body1' align='left'  style={{marginTop:10}}>
                            Endüstriyel ürün konsept tasarımından başlayarak ürünün geliştirilmesi, detaylı mekanik tasarım oluşturulması, seri üretime uygun tasarımlar geliştirilmektedir.                     
                            </Typography>
                            <Typography variant='body1' align='left'  style={{marginTop:10}}>
                            Firmamız gerek mevcut Ar-Ge alt yapıları olan firmalara destek vererek gerekse projeyi tamamen üstlenerek uzmanlığı ve tecrübesi ile firmalara destek vermektedir. 
                            </Typography> 
                        </>
                    } 

                    />
                    </Card>
            </Grid>
            <Grid item >
                <Card bordered
                    style={{ width: '100%',padding:30,alignSelf:'center'}}
                    cover={<img alt="example" src={pic3}  style={{width:'100%'  }}/>}
                    >
                    <Meta title={
                                                  <Typography variant='h6' align='center' >İmalat </Typography>

                    }
                    description={
                        <>
                        <Typography variant='body1' align='left'  style={{marginTop:10}}> 
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
            <Grid item >
                <Card bordered
                    style={{ width: '100%',padding:30,alignItems:'center'}}
                    cover={<img alt="example" src={pic4}  style={{width:'100%'  }}/>}
                    >
                    <Meta title={
                          <Typography variant='h6' align='center' > Tersine Mühendislik</Typography>

                    }
                    description={
                        <>
                            <Typography variant='body1' align='left'  style={{marginTop:10}}>
                            Ürünün konsept aşamasından başlayıp mekanik tasarımının nasıl, ne amaçlanarak, hangi üretim yöntemleri ile ve ne şekilde yapıldığını ortaya çıkarmak amacıyla geriye dönük olarak incelenmesidir.                            </Typography>
                            <Typography variant='body1' align='left'  style={{marginTop:10}}>
                            Bu metodu “Geriye Dönük” olarak tanımlamamızın sebebi; ürünün konsept aşamasından başlayıp mekanik tasarımının nasıl, ne amaçlanarak, hangi üretim yöntemleri ile ve ne şekilde yapıldığını ortaya çıkarmak için geriye dönük olarak incelenmesidir. Reverse Engineering olarak tanımlanan metotun öncelikli amacı, ürününün tasarım ve üretim geçmişini detayları ile ortaya çıkarmaktır. Geriye Dönük Mühendislik metodu mevcut ürünlerin incelenmesinin yanı sıra yeni bir konsept oluşturmada, daha farklı bir yaklaşım ile aynı amaca yönelik daha iyi bir ürünün çıkarılmasında kullanılmaktadır. Mevcut ürünlere farklı bakış açıları sağlanması kaliteli, ileri teknoloji içeren, daha efektif ve düşük maliyetli ürünlerin oluşturulmasına yardımcı olan bu yöntem yeni ürün geliştirecek firmaların yol haritalarını çıkarmada hız ve kolaylık sağlamaktadır.                            </Typography>
                            <Typography variant='body1' align='left' style={{marginTop:10}}>
                            Mühendisliğin konstrüksiyon, tasarım, geliştirme, analiz ve malzeme gibi farklı uzmanlıklarının bir araya gelerek bir ekip çalışmasının gerçekleştiği projeler de uzmanlığımız ve tecrübelerimiz müşterilerimize doğru, kaliteli ve hızlı çözümler sağlamamıza olanak vermektedir.                            </Typography> 
                        </>
                    } 

                    />
                    </Card>
            </Grid>
        </Grid>
    )
}

export default Services;