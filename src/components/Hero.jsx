import styles from '../styles/hero.module.css'

export const HeroSection = () => {
    return(
    <div className={styles.hero} id='hero'>
        <h1>StudyFlow</h1>
        <span>Organize your studies</span>
      </div>
    )
}