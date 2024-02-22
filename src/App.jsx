import './scss/_app.scss'
import Sidebar from './components/sidebar'
import Widgetbar from './components/widgetbar'

function App({ children }) {
  return (
    <div className='react-app'>
      <Sidebar />
      <div className='react-content'>{children}</div>
      <Widgetbar />
    </div>
  )
}

export default App
