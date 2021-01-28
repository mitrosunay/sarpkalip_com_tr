import React,{useState}from 'react';
import {Slide,useScrollTrigger,AppBar,Toolbar,Tabs,makeStyles,Tab,useMediaQuery,useTheme,IconButton,Menu,MenuItem} from '@material-ui/core';
import Logo from '../asset/img/sarplogo.png';
import { MenuOutlined } from '@material-ui/icons';


function HideOnScroll(props) {
    const { children, window } = props; 
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const NavBar = (props)=>{
const Styles= useStyles();
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.up('md'));
 

 const [AnchorEl,SetAnchorEl] =useState(null);
const  [Open,SetOpen] = useState(false);


const MenuOpen =(event) =>{
     SetAnchorEl(event.currentTarget);
     SetOpen(true);
}
const MenuClose =(event) =>{
    SetAnchorEl(null)    ;    
    SetOpen(false);
}


const TabOptions = [ 
  {
    key:0,
    href : '/',
    label:'AnaSayfa'
  },  
  {
    key:1,
    href : '/about',
    label:'Hakkımızda'
  },  
  {
    key:2,
    href : '/hizmetlerimiz',
    label:'Hizmetlerimiz'
  },
  
  {
    key:4,
    href : '/galeri',
    label:'Galeri'
  },
 
  
  {
    key:8,
    href : '/iletisim',
    label:'İletişim'
  },
]


    return  ( 
        <HideOnScroll {...props}>
        <AppBar  >
          <Toolbar disableGutters={true} >
          <img src={Logo} className={Styles.logo} width={'auto'} height={80} onClick={()=>window.location.href='/'} alt='test'/>
          {matches?
           <Tabs  className={Styles.tabcontainer} indicatorColor={'primary'}>
              
                {TabOptions.map((row,index)=>{
                           return(
                            <Tab  key={row.key}  onClick={()=>window.location.href=row.href} label={row.label}  className={Styles.tab}  />
                             )
                       })
                }
               
           </Tabs>
            :
            <>
            <IconButton  aria-owns={AnchorEl?'menu': undefined}  aria-haspopup={AnchorEl?'true': undefined}  className={Styles.SearchBtn} onClick={MenuOpen}> <MenuOutlined className={Styles.menuicon}/> </IconButton>
            <Menu  id='menu1' anchorEl={AnchorEl} 
                     elevation={0}
                     open={Open} 
                     onClose={MenuClose}  
                     classes={{paper:Styles.menu}} 
                     onMouseLeave={()=>SetAnchorEl(null)} 
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
       
                       MenuListProps={{onMouseLeave:MenuClose}} >
                       {TabOptions.map((row,index)=>{
                           return(
                                 <MenuItem  key={row.key} classes={{root:Styles.menuItem}} onClick={()=>window.location.href=row.href} >   {row.label}   </MenuItem>
                           )
                       })}
                    </Menu>
            </>

          }
           </Toolbar>
        </AppBar>
      </HideOnScroll>
    )
}

export default NavBar;

const useStyles = makeStyles(theme=>({
logo:{
  left:0
 },
 tabcontainer:{
  marginLeft:'auto',
  marginRight:30,
},
tab:{
  ...theme.typography.tab,
  color:'white',
  opacity:1,
  marginLeft:'5px',
},
SearchBtn:{
  ...theme.typography.searchbtn,
  [theme.breakpoints.down('sm')]:{
      height:'35px',
      width:50,
       marginLeft:'auto',
      marginRight:'5px',
      fontSize:12
     },
 },
 menuicon:{
  color:'white',
  height:'35px',
  width:'35px',
},
}))