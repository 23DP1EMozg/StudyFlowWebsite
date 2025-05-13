import { Link } from 'react-scroll'
import styles from '../styles/header.module.css'

export const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.left}>
            <span><Link to='hero' smooth={true} style={{cursor: 'pointer'}}>StudyFlow</Link></span>
            </div>
            <div className={styles.right}>
                <span><Link to={'information'} smooth={true}>Information</Link></span>
                <span><Link to='guide' smooth={true}>Guide</Link></span>
                <span><Link to='download' smooth={true}>Download</Link></span>
            </div>
        </header>
    )
}