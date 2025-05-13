import styles from '../styles/download.module.css'
import photo from '../assets/app_photo.png'

export const DownloadSection = () => {


    const download = () => {
        const link = document.createElement('a');
        link.href = '/APP.zip';
        link.download = 'APP.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return(
        <div className={styles.main} id='download'>
            <div className={styles.top}>
                <h1>Download</h1>
            </div>
            <div className={styles.bottom}>
                <div>
                    <span>Download the latest version of StudyFlow here</span>
                    <button onClick={download}>Download</button>
                    <div className={styles.img}></div>
                </div>
            </div>
        </div>
    )
}