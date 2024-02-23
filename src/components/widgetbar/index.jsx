import './scss/_widgetbar.scss'
import Card from '../card'

const Index = () => {
  return (
    <div className='react-widget'>
      <Card hasBorder>
        <Card.Title size='large'>Expenses and income</Card.Title>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          enim.
        </Card.Body>
      </Card>

      <Card hasBorder>
        <Card.Title size='large'>Latest spending</Card.Title>
        <Card.Body>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          laboriosam, odio nihil ex facilis sed similique dignissimos rem sequi
          tempore!
        </Card.Body>
      </Card>

      <Card hasBorder>
        <Card.Title size='small' align='center'>
          Go to premium
        </Card.Title>
        <Card.Body>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          laboriosam, odio nihil ex facilis sed similique dignissimos rem sequi
          tempore!
        </Card.Body>
      </Card>
    </div>
  )
}

export default Index
