import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const ContactStuff = (props) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    
    minHeight: `100px`,
    color: 'black',
    textAlign: 'left'

  }));

 
  return (
   
    <Item >
  	<Typography variant="h5" component="p" gutterBottom>
  		<p>Email: Bob at bgulian@gmail.com</p>
    </Typography>
     </Item>
     
  	
  	
  	)
}

export default ContactStuff;