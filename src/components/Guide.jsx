import styles from '../styles/guide.module.css'

export const GuideSection = () => {

    

    return(
    <div className={styles.main} id='guide'>
        <div className={styles.top}>
            <span>Guide</span>
        </div>
        <div className={styles.bottom}>
            <div>
                <span>View the guide on how to use StudyFlow here!</span>
                <a href='https://github.com/23DP1EMozg/StudyFlow'>
                <button>View</button>
                </a>
            </div>
        </div>
    </div>
)
}