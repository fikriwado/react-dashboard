import './scss/_app.scss'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Widgetbar from './components/widgetbar'
import { useState } from 'react'

function App({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='react-app'>
      <Navbar setSidebarToggle={toggleSidebar} />
      <Sidebar mobileToggle={isSidebarOpen} />
      <div className='react-content'>{children}</div>
      <Widgetbar />
    </div>
  )
}

export default App
