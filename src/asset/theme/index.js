import { createMuiTheme } from '@material-ui/core/styles';
 
const PrimaryColor =  "#658acb";
const SecondaryColor = "#82adb9";

const theme = createMuiTheme({
  palette: {
    primary:{
      main:`${PrimaryColor}`
    },
    secondary:{
      main:`${SecondaryColor}`
    },
    common:{
      backgroundColor:`${PrimaryColor}`
    }
},
typography:{
  text:{
    color:'white',
  },
  tab:{
    textTransform:'none',
    fontWeight:550,
    fontSize:"0.9rem",
    minWidth:5,
  }
},
mixins:{
  toolbar:{
    minHeight:80,
   },
  
},
});

export default theme; 

