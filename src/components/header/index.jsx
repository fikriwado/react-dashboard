import './scss/_header.scss'
import { IconSearch, IconMenu2 } from '@tabler/icons-react'
import Button from '../button'

const Index = ({ title, desc }) => {
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
        <Button color='white' isCircle>
          <IconMenu2 />
        </Button>
      </div>
    </div>
  )
}

export default Index
