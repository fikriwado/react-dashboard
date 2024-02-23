import './scss/_header.scss'
import { IconSearch, IconMenu2 } from '@tabler/icons-react'
import Button from '../button'
import { WidgetContext } from '../../App'
import { useContext } from 'react'

const Index = ({ title, desc }) => {
  const { toggleWidget } = useContext(WidgetContext)

  return (
    <div className='react-header'>
      <div className='react-header__left'>
        <h1 className='react-header__left--title'>{title}</h1>
        <p className='react-header__left--desc'>{desc}</p>
      </div>
      <div className='react-header__right'>
        <Button color='white' isCircle>
          <IconSearch />
        </Button>
        <div className='react-header__right--toggle'>
          <Button color='white' isCircle onClick={toggleWidget}>
            <IconMenu2 />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Index
