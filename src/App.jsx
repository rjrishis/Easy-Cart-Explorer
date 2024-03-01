import React from 'react'
import Home from './Components/Home'
import Create from './Components/Create'
import { Routes,Route, Link, useLocation } from 'react-router-dom'
import Detail from './Components/Detail'
import Edit from './Components/Edit'

const App = () => {
  const {search , pathname} = useLocation();
  console.log(search)
  console.log(pathname)
  return (
    <div className='w-full h-screen flex'>
      {(pathname != '/' || search.length>0)&&(
      <Link to={'/'} className='border-2 text-red-500 border-red-500 font-bold absolute left-[17%] top-[1.5%] px-5 py-2' >Home</Link>
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    
    </div>
  )
}

export default App