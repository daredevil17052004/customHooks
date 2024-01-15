import { useState } from 'react'
import './App.css'
import useLocalStorage from './useStoarge'

function App() {

  const [content,setContent] = useLocalStorage('content','')

  return (
    <div>
      <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} />
    </div>
  )
}

export default App
