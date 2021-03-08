import logo from './logo.svg';
import './App.css';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';



const darkGrey = grey[900];

function Navbar() {
    return (
    <AppBar style={{background: darkGrey}} position="static"  >
        <Toolbar>
            <div style={styles.buttonContainer}>
                <IconButton color="inherit"><FacebookIcon/></IconButton>
                <IconButton color="inherit"><InstagramIcon/></IconButton>
                <IconButton color="inherit"><TwitterIcon/></IconButton>
                <Button color="inherit">About</Button>
                <Button color="inherit">Download</Button>
            </div>
        </Toolbar>
    </AppBar>

    );
  }


  const styles = {
    buttonContainer: {
        marginLeft: 'auto',

    },
    button: {
        
    }

  }

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

  export default Navbar;