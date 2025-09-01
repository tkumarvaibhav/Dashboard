import { Routes, Route, Navigate } from 'react-router-dom'
import MainScreen from './screen/MainScreen'
import Agents from './screen/Agents'
import CommonLayout from './Layout/CommonLayout'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CommonLayout>
            <MainScreen />
          </CommonLayout>
        }
      />
      <Route
        path="/agents"
        element={
          <CommonLayout>
            <Agents />
          </CommonLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App