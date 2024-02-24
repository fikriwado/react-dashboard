import './scss/_latest-spending.scss'
import Card from '../card'
import Button from '../button'
import { IconDotsVertical, IconArrowNarrowRight } from '@tabler/icons-react'
import { store, hospital, ticket } from '../../assets'
import { Link } from 'react-router-dom'

const Index = () => (
  <Card hasBorder>
    <Card.Title size='large' hasAction>
      <p>Latest spending</p>
      <Button
        color='white'
        size='small'
        isCircle
        onClick={() => alert('Latest spending widget clicked')}
      >
        <IconDotsVertical />
      </Button>
    </Card.Title>
    <Card.Body>
      <div className='react-latest-spending'>
        <div className='react-latest-spending__items'>
          <div className='react-latest-spending__item'>
            <img
              src={store}
              alt='store'
              className='react-latest-spending__item--img'
            />
            <div>
              <p className='label'>Online store</p>
              <p className='time'>May 30, 2023 at 08:00pm</p>
            </div>
          </div>
          <div className='react-latest-spending__item'>
            <img
              src={hospital}
              alt='hospital'
              className='react-latest-spending__item--img'
            />
            <div>
              <p className='label'>Pay the hospital</p>
              <p className='time'>May 28, 2023 at 10:00pm</p>
            </div>
          </div>
          <div className='react-latest-spending__item'>
            <img
              src={ticket}
              alt='ticket'
              className='react-latest-spending__item--img'
            />
            <div>
              <p className='label'>Tickets</p>

              <p className='time'>May 10, 2023 at 12:00pm</p>
            </div>
          </div>
        </div>
        <div className='react-latest-spending__link'>
          <Link to='/'>
            <span>View all</span> <IconArrowNarrowRight />
          </Link>
        </div>
      </div>
    </Card.Body>
  </Card>
)

export default Index
