import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import Compare from './pages/Compare'
import Learn from './pages/Learn'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="planet/:id" element={<Detail />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="compare" element={<Compare />} />
        <Route path="learn" element={<Learn />} />
      </Route>
    </Routes>
  )
}

export default App
