import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let CountDownTimeout: NodeJS.Timeout;

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hesFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider( {children} : CountDownProviderProps) {

    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hesFinished, setHesFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown() {
        clearTimeout(CountDownTimeout)
        setIsActive(false)
        setHesFinished(false)
        setTime(25 * 60)
    }

    useEffect(() => {

        if(isActive == true && time > 0){
            CountDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)

        } else if(isActive && time == 0) {
            setHesFinished(true)
            setIsActive(false)
            startNewChallenge();
        }

    }, [isActive, time])

    return(
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hesFinished,
            isActive,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountDownContext.Provider>
    )
}