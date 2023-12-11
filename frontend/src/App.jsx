import { useState } from 'react'

import './App.css'
import UploadPDF from './UploadPDF';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <UploadPDF />
    </div>
    </>
  )
}

export default App
