import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/levelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeModal } = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header> {level} </header>

                <strong> Parabéns </strong>
                <p> Você alcançou um novo level. </p>

                <button type='button' onClick={closeModal}>
                    <img src="/icons/cancel.png" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}