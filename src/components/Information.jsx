import { useState } from 'react'
import styles from '../styles/information.module.css'
import { useEffect } from 'react';

export const InformationSection = () => {

    
    return(
        <div className={styles.information} id='information'>
            <div className={styles.top}>
                <h1>Information</h1>
            </div>
            <div className={styles.bottom}>
                <span>StudyFlow is a helpful program that makes organizing schoolwork easier and more efficient. It allows students and teachers to manage assignments, keep track of deadlines, and work together in a simple way. Whether you're a student trying to stay on top of your work or a teacher looking to organize your classroom, StudyFlow gives you the tools to succeed.</span>
            </div>
        </div>
    )
}