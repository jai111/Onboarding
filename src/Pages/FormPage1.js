import styles from '../Styles/FormPage.module.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let FormPage1 = () => {
    return (
        <div className={styles.Container}> 
            <Typography style={{ fontWeight: '600'}} variant="h5" gutterBottom>
                Welcome! Frist things first...
            </Typography>
            <Typography style={{ fontWeight: '500', fontSize: '13px', opacity: '0.5' }} variant="h8" gutterBottom>
                you can always change them later
            </Typography>
            <div className={styles.Container} style={{width: '100%'}}>
                <Typography style={{ fontWeight: '500', width: '100%', opacity: '0.7', fontSize: '13px'}} variant="h8" gutterBottom>
                    Full Name
                </Typography>
                <TextField
                    style={{opacity: '0.5', width: '100%'}}
                    defaultValue="Steve Jobs"
                />
            </div>
            <div className={styles.Container} style={{width: '100%', marginTop: '25px'}}>
                <Typography style={{ fontWeight: '500', width: '100%', opacity: '0.7', fontSize: '13px'}} variant="h8" gutterBottom>
                    Display Name
                </Typography>
                <TextField
                    style={{opacity: '0.5', width: '100%'}}
                    defaultValue="Steve "
                />
            </div>
            <Button style={{background: '#6A5ACD', width: '100%', marginTop: '25px'}} variant="contained">Create Workspace</Button>
        </div>
    )
}
export {FormPage1}