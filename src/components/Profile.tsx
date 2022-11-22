import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/andersonpaivas.png" alt="Anderson Paiva" />
            <div>
                <strong> Anderson Paiva </strong>
                <p> <img src="icons/level-up.png" alt="Level" /> Level {level} </p>
            </div>
        </div>
    )
}