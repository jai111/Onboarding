import styles from '../Styles/FormPage.module.css'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let FormPage2 = () => {
    return (
        <div className={styles.Container}> 
            <Typography style={{ fontWeight: '600'}} variant="h5" gutterBottom>
                Let's setup a home for all your work
            </Typography>
            <Typography style={{ fontWeight: '500', fontSize: '13px', opacity: '0.5' }} variant="h8" gutterBottom>
                you can always ccreate another workspace later
            </Typography>
            <div className={styles.Container} style={{width: '75%'}}>
                <Typography style={{ fontWeight: '500', width: '100%', opacity: '0.7', fontSize: '13px'}} variant="h8" gutterBottom>
                    Workspace Name
                </Typography>
                <TextField
                    style={{opacity: '0.5', width: '100%'}}
                    defaultValue="Eden"
                />
            </div>
            <div className={styles.Container} style={{width: '75%', marginTop: '25px'}}>
                <Typography style={{ fontWeight: '500', width: '100%', opacity: '0.7', fontSize: '13px'}} variant="h8" gutterBottom>
                    Workspace URL<span style={{opacity: '0.5'}}>(optional)</span>
                </Typography>
                <div className={styles.row}>
                    <TextField
                        style={{opacity: '0.5', width: '100%'}}
                        defaultValue="www.eden.com/"
                    />
                    <TextField
                        style={{opacity: '0.5', width: '100%'}}
                        defaultValue="Example"
                    />
                </div>
            </div>
            <Button style={{background: '#6A5ACD', width: '75%', marginTop: '25px'}} variant="contained">Create Workspace</Button>
        </div>
    )
}
export {FormPage2}