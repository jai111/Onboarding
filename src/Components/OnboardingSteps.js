import styles from "../Styles/OnboardingSteps.module.css"
import {useState} from 'react'


let OnboardingSteps = (props)=> {

    const [pageNumber, setPageNumber] = useState(0);

    let onPageChange = (page)=>{
        setPageNumber(page)
        props.onPageChange(page-1)
    }

    return(
        <div className={styles.container}>
            <span className={styles.bluecircle} onClick = {() => onPageChange(1)} >
                <div style={{marginTop: '7px', fontSize: '15px'}}>1</div>
            </span>
            <span className={styles.blueline}/>
            
            {
                [...Array(props.len-1)].map( (circle, ind) => {
                    console.log(pageNumber)
                    if(ind+2 <= pageNumber){
                        return(
                            <span className={styles.container} key = {ind} >
                                <span className={styles.blueline}/>
                                <span className={styles.bluecircle} onClick = {() => onPageChange(ind+2)}>
                                    <div style={{marginTop: '7px', fontSize: '15px'}}>
                                        {ind+2}
                                    </div>
                                </span>
                                {ind+2 !== props.len ? <span className={styles.blueline}/> : null}
                            </span>
                        )
                    }
                    return(
                        <span className={styles.container} key = {ind}>
                                <span className={styles.line}/>
                                <span className={styles.circle} onClick = {() => onPageChange(ind+2)}>
                                    <div style={{marginTop: '7px', fontSize: '15px'}}>
                                        {ind+2}
                                    </div>
                                </span>
                                {ind+2 !== props.len ? <span className={styles.line}/> : null}
                        </span>
                    )
                    
                })
            }
        </div>
    )
}

export {OnboardingSteps}