import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Students from './components/Students'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import { Book } from 'react-bootstrap-icons'
import Books from './components/Books'
import Addnewbook from './components/Addnewbook'
import Addstudent from './components/Addstudent'
import Fee from './components/Fee'
import GetBookById from './components/GetBookById'

function App() {
  const [count, setCount] = useState(0);

  // const bookLists = [
  //   {id:1, name:'Rich Dad Poor Dad' , url: '/'},
  //   {id:2, name: 'Attendance' , url: '/attendance'},
  //   {id:3, name: 'Students', url: '/students'},
  //   {id:4, name: 'Fee' , url: '/fee'},
  // ]


  return (
    <>

      <div className="row g-0">
        <div className="col-lg-2 col-md-2 col-cm-2  p-0 left_sidebar">
          <Sidebar />
        </div>

        <div className="col-lg-10 col-md-10 col-sm-10 right_dashboard bg_image">
          <Navbar />

          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/book-list' element={<Books />} />
            <Route path='/add-book' element={<Addnewbook />} />
            <Route path='/view-book-detail/:id' element={<GetBookById />} />
            <Route path='/students-list' element={<Students />} />
            <Route path='/add-student' element={<Addstudent />} />
            <Route path='/fee' element={<Fee />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/sign-in' element={<Signin />} />

          </Routes>

        </div>
      </div>


    </>
  )
}

export default App
