import { useState } from 'react'
import './App.css'
import fortuneCs from "./db/fortuneCookies.json"
import { getRandomElement } from './utils/random'
import FortuneCCard from './components/FortuneCCard'

const backgrounds = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7"]

function App() {

  const [fortuneC, setForuneC] = useState(getRandomElement(fortuneCs))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))
  
  const handleChangeFC = () => {
    setForuneC(getRandomElement(fortuneCs))
    setCurrentBg(getRandomElement(backgrounds))
  };

  return (
    <main className={`app ${currentBg}`}>
      <FortuneCCard 
      fortuneC={fortuneC} 
      handleChangeFC={handleChangeFC}
      />
    </main>
  )
}

export default App
