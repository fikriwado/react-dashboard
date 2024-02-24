import { createContext, useState } from 'react'
import './scss/_app.scss'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Widgetbar from './components/widgetbar'

export const WidgetContext = createContext()

function App({ children }) {
  const screenWidth = window.innerWidth
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isWidgetOpen, setIsWidgetOpen] = useState(
    screenWidth >= 1200 ? true : false
  )

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className='react-app'>
      <Navbar setSidebarToggle={toggleSidebar} />
      <Sidebar toggle={isSidebarOpen} />
      <WidgetContext.Provider value={{ toggleWidget }}>
        <div
          className={`react-content ${!isWidgetOpen ? 'r-widget-close' : ''}`}
        >
          {children}
        </div>
      </WidgetContext.Provider>
      <Widgetbar toggle={isWidgetOpen} setWidgetToggle={toggleWidget} />
    </div>
  )
}

export default App
