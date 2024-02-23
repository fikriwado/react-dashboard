import './scss/_navbar.scss'
import { Link } from 'react-router-dom'
import { IconMenu2 } from '@tabler/icons-react'

const Index = ({ setSidebarToggle }) => {
  return (
    <div className='react-navbar'>
      <div className='react-navbar__brand'>
        <div className='react-navbar__brand--logo'>
          <Link to='/'>R</Link>
        </div>
      </div>
      <div className='react-navbar__toggle' onClick={setSidebarToggle}>
        <IconMenu2 />
      </div>
    </div>
  )
}

export default Index
