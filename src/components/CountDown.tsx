import { useContext } from 'react';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {

    const {
        minutes,
        seconds,
        hesFinished,
        isActive,
        resetCountDown,
        startCountDown,
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return(
        <div>
            <div className={styles.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span> : </span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hesFinished ? (
                <button disabled className={styles.CountDownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button onClick={resetCountDown} type='button' className={`${styles.CountDownButton} ${styles.CountDownButtonActive}`}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button onClick={startCountDown} type='button' className={styles.CountDownButton}>
                            Iniciar um ciclo 
                        </button>

            ) }
                </>
            )}

        </div>
    );
}