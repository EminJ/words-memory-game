import { useState } from 'react'
import Navbar from '../components/Navbar'

import Words from './assets/Words.json'

function App() {
  const [startGame, setStartGame] = useState(false)
  const [endGame, setEndGame] = useState(false)

  const [userScore, setUserScore] = useState(0)
  const [userLives, setUserLives] = useState(3)
  const [userDifficulty, setUserDifficulty] = useState(1)

  const [wordsArray, setWordsArray] = useState([])
  const [oldWords, setOldWords] = useState('')
  const [words, setWords] = useState('')

  const handleStartButton = () => {
    setStartGame(true)
    setEndGame(false)
    setUserLives(3)
    setWordsArray([])
    setOldWords('')
    setWords('')
    setUserScore(0)
    setUserDifficulty(1)
    handleStartGame()
  }

  const newWordAdd = () => {
    let condition = true
    while (condition) {
      let word = Words.Words[Math.floor(Math.random() * 3200)]
      if(wordsArray.indexOf(word) === -1 && word != oldWords){
        setWords(word)
        setOldWords(word)
        condition = false
      }
    }
  }

  const handleStartGame = () => {
    if(Math.floor(Math.random() * userDifficulty) >= 5){
      let condition = true
      while (condition) {
        let word = wordsArray[Math.floor(Math.random() * wordsArray.length)]  
        if(word != oldWords){
          setWords(word)
          setOldWords(word)
          condition = false
        }
      }
      
    }
    else newWordAdd()

    if(userScore>=20) setUserDifficulty(10)
  }

  const handleNewButton = () => {
    if(userLives<=0) return
    if(wordsArray.indexOf(words) == -1){
      setUserScore(userScore+10)
      setWordsArray(arr => [...arr, words])
      handleStartGame()
    }
    else{
      if(userLives<=1){
        setUserLives(userLives-1)
        return setEndGame(true)
      }
      setUserLives(userLives-1)
      handleStartGame()
    }
  }

  const handleSeenButton = () => {
    if(userLives<=0) return
    if(wordsArray.indexOf(words) > -1){
      setUserScore(userScore+10)
      handleStartGame()
    }
    else{
      if(userLives<=1){
        setUserLives(userLives-1)
        setOldWords(words)
        return setEndGame(true)
      }
      setUserLives(userLives-1)
      handleStartGame()
    }
  }

  return (
    <>
      <Navbar/>
      <div className='w-screen h-screen bg-gray-50 dark:bg-gray-800 flex justify-center items-center'>
        <div className='w-[50rem] h-[30rem] bg-gray-200 dark:bg-gray-600 rounded-md p-8 dark:text-white'>
          { !startGame ? <>
            <h2 className='text-4xl'>Words Memory Test</h2>
            <h4 className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatibus voluptate! Ea necessitatibus facere dolor...</h4>
            
            <div className='w-full flex justify-end'>
              <div onClick={() => handleStartButton()} className='btn dark:bg-gray-800 dark:text-white dark:border-gray-600 px-5 text-base mt-5'>Start Game</div>
            </div>
          </>
          : 
          <>
            <div className='flex justify-center items-center w-full h-full'>
              {!endGame ? <div>
                <div className='flex flex-col items-center justify-center'>
                  <div className='text-lg mb-5'>
                    Lives : {userLives} | Score : {userScore}
                  </div>
                  <div className='text-4xl font-bold'>{words}</div>
                </div>
                <div className='w-full flex justify-center space-x-4 mt-2'>
                  <div className='btn px-5 text-base mt-5' onClick={()=>{handleSeenButton()}}>SEEN</div>
                  <div className='btn px-5 text-base mt-5' onClick={()=>{handleNewButton()}}>NEW</div>
                </div>
              </div>
            : 
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-4xl font-bold mb-2'>Good Game! Reply?</h1>
              <p>Your Score : {userScore}  <a href="/" className='text-xs text-blue-500 font-bold'>Share</a></p>
              <button className='btn mt-5' onClick={() => handleStartButton()}>Replay</button>
            </div>  
            }
            </div>
          </>
          }
        </div>
      </div>
    </>
  )
}

export default App
