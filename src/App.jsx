import { useState } from 'react'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className='container mx-auto'>
        <Navbar open={open} setOpen={setOpen} />
       {!open && <>
          <Hero />
          <About />
        </>}
      </div>

    </div>
  )
}

export default App
