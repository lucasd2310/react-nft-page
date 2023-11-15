import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainMenu } from '../pages/MainMenu'

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />}/>
      </Routes>
    </Router>
  )
}
