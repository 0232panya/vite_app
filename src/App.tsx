
import './App.css'
import Form from './Component/Form/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './Component/Detail/Detail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
