import React from 'react';
import Landing from './layout';
import { ThemeProvider } from '@material-ui/styles';
import theme from './asset/theme';
import 'antd/dist/antd.css';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <Landing/>
    </ThemeProvider>
  );
}

export default App;
