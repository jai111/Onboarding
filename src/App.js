import { OnboardingSteps } from "./Components/OnboardingSteps";
import { FinalPage } from "./Pages/FinalPage";
import { FormPage1 } from "./Pages/FormPage1";
import { FormPage2 } from "./Pages/FormPage2";
import { PlanningPage } from "./Pages/PlanningPage";
import styles from "./Styles/home.module.css"
import Typography from '@mui/material/Typography';
import { useState } from "react";

function App() {

  let pages = [ <FormPage1/>, <FormPage2/>, <PlanningPage/>, <FinalPage/>]
  const [currentPage, setCurrentPage] = useState(0)

  let onPageChange = (page) =>{
    setCurrentPage(page)
  }

  return (
    <div className={styles.container} style={{padding: '20px'}}>
      <Typography style={{marginBottom: '50px', fontWeight: '900'}} variant="h6" gutterBottom>
        Eden
      </Typography>
      <OnboardingSteps len={pages.length} onPageChange = {onPageChange}/>
      {pages[currentPage]}
    </div>
  );
}

export default App;
