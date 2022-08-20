import styles from '../Styles/FormPage.module.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

let PlanningPage = () => {
    return (
        <div className={styles.Container}> 
            <Typography style={{ fontWeight: '600'}} variant="h5" gutterBottom>
                How are you planning to use Eden?
            </Typography>
            <Typography style={{ fontWeight: '500', fontSize: '13px', opacity: '0.5' }} variant="h8" gutterBottom>
                We'll streamline your setup experience accordingly.
            </Typography>
            <div className={styles.row}>
                <div className={styles.card} >
                    <div style={{marginBottom: '10px', width: '100%'}}><PersonIcon style={{color: '6A5ACD'}}/></div>
                    <Typography style={{ fontWeight: '500', width: '100%', opacity: '0.7', fontSize: '13px'}} variant="h8" gutterBottom>
                        For myself
                    </Typography>
                    <Typography style={{ fontWeight: '500', fontSize: '13px', opacity: '0.5' }} variant="h8" gutterBottom>
                        Write better.Think more clearly.Stay organized.
                    </Typography>
                </div>
                <div className={styles.whitecard} >
                    <div style={{marginBottom: '10px', width: '100%'}}><GroupsIcon/></div>
                    <Typography style={{ fontWeight: '500', width: '100%', opacity: '0.7', fontSize: '13px'}} variant="h8" gutterBottom>
                        With my team
                    </Typography>
                    <Typography style={{ fontWeight: '500', fontSize: '13px', opacity: '0.5' }} variant="h8" gutterBottom>
                        Wikis,docs,tasks and projects, all in one plcae.
                    </Typography>
                </div>
            </div>
            <Button style={{background: '#6A5ACD', width: '50%', marginTop: '25px'}} variant="contained">Create Workspace</Button>
        </div>
    )
}
export {PlanningPage}