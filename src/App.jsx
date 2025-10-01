import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  console.log('Aplicación Get Up & Glow iniciada')

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
