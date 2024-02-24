import './scss/_go-premium.scss'
import Card from '../card'
import Button from '../button'
import { crown } from '../../assets'

const Index = () => (
  <Card hasBorder>
    <Card.Title size='small' align='center'>
      Go to premium
    </Card.Title>
    <Card.Body>
      <div className='react-go-premium'>
        <img src={crown} alt='crown' className='react-go-premium__img' />
        <div className='react-go-premium__text'>
          <p className='label'>Update Need more feature?</p>
          <p className='desc'>
            Update your account to premium to get more features.
          </p>
        </div>
        <Button color='purple'>Button</Button>
      </div>
    </Card.Body>
  </Card>
)

export default Index
