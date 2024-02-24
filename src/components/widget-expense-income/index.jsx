import './scss/_expense-income.scss'
import Card from '../card'

const Index = () => (
  <Card hasBorder>
    <Card.Title size='large'>Expenses and income</Card.Title>
    <Card.Body>
      <div className='react-expanse-income'>
        <div className='react-expanse-income__percentage'>
          <div className='react-expanse-income__percentage--expanse'>
            <p className='label'>Expanse</p>
            <p className='percentage'>75%</p>
            <p className='total'>5,653</p>
          </div>
          <div className='react-expanse-income__percentage--income'>
            <p className='label'>Income</p>
            <p className='percentage'>40%</p>
            <p className='total'>2,656</p>
          </div>
        </div>
        <div className='react-expanse-income__progressbar'>
          <div
            className='react-expanse-income__progressbar--item r-purple'
            style={{ '--progressbar-width': '75%' }}
          ></div>
          <div
            className='react-expanse-income__progressbar--item r-orange'
            style={{ '--progressbar-width': '40%' }}
          ></div>
        </div>
      </div>
    </Card.Body>
  </Card>
)

export default Index
