import { useState, useRef, useEffect} from 'react'

function MutableRef() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<number | undefined>(undefined)

  const stopTimer = () => {
    window.clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(()=> {
        setTimer((timer)=> timer+1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])
  
  return (
    <div>
        <div>Timer: {timer}</div>
        <button onClick={()=> stopTimer()}>Stop Timer</button>
    </div>
  )
}

export default MutableRef