import styles from '../Styles/FormPage.module.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

let FinalPage = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.checkmark}>
                <CheckCircleIcon style={{width: '50px', height: '50px', color: '6A5ACD'}}/>
            </div> 
            <Typography style={{ fontWeight: '600'}} variant="h5" gutterBottom>
               Congratulations, Eren!
            </Typography>
            <Typography style={{ fontWeight: '500', fontSize: '13px', opacity: '0.5' }} variant="h8" gutterBottom>
                you have completed onboarding, you can start using the Eden!
            </Typography>
            <Button style={{background: '#6A5ACD', width: '80%', marginTop: '25px', fontSize: '10px'}} variant="contained">Launch Eden</Button>
        </div>
    )
}
export {FinalPage}