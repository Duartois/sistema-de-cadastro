import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import ListarUsuarios from './pages/Lista'

function App() {

  return (
    <div>
      <BrowserRouter>
      <header className='bg-blue-600 text-white p-4 shadow-md'>
        <h1 className='text-2xl font-bold text-center'>Sistema de Cadastro de Usuários</h1>
      </header>
        <Routes>
          <Route path='/' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/listar-usuarios' element={<ListarUsuarios />} />
        </Routes>
      </BrowserRouter>

    </div>
  )

}


export default App

// VITE + REACT CONFIGURATIONS MODEL 


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
