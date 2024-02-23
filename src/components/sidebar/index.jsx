import './scss/_sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { IconLogout, IconAlertTriangleFilled } from '@tabler/icons-react'
import { menus } from '../../constants'
import { avatar01 } from '../../assets'

const Index = ({ toggle }) => {
  return (
    <div className={`react-sidebar ${toggle ? 'active' : ''}`}>
      <div className='react-sidebar__header'>
        <div className='react-sidebar__header--logo'>
          <Link to='/'>R</Link>
        </div>
      </div>
      <div className='react-sidebar__content'>
        <div className='react-sidebar__content--menus'>
          {menus.length ? (
            menus.map((menu) => {
              const IconComponent = menu.icon
              return (
                <NavLink
                  key={menu.id}
                  to={menu.path}
                  className='react-sidebar__content--item'
                  {...({ isActive }) => (isActive ? 'active' : '')}
                >
                  <IconComponent />
                  <div className='react-sidebar__content--item-name'>
                    {menu.name}
                  </div>
                </NavLink>
              )
            })
          ) : (
            <div className='react-sidebar__content--item'>
              <IconAlertTriangleFilled />
              <div className='react-sidebar__content--item-name'>
                Menu tidak ditemukan
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='react-sidebar__footer'>
        <div className='react-sidebar__footer--menus'>
          <div className='react-sidebar__footer--item'>
            <Link to='/'>
              <img
                src={avatar01}
                alt='avatar'
                className='react-sidebar__footer--item-img'
              />
            </Link>
          </div>
          <Link to='/' className='react-sidebar__footer--item'>
            <IconLogout />
            <div className='react-sidebar__footer--item-name'>Logout</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
