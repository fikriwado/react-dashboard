import './scss/_widgetbar.scss'
import Card from '../card'
import Button from '../button'
import ExpenseIncome from '../widget-expense-income'
import LatestSpending from '../widget-latest-spending'
import { IconX } from '@tabler/icons-react'

const Index = ({ toggle, setWidgetToggle }) => {
  return (
    <div className={`react-widget ${toggle ? 'r-active' : ''}`}>
      <div className='react-widget__close--toggle'>
        <Button color='purple-low' isCircle onClick={setWidgetToggle}>
          <IconX />
        </Button>
      </div>
      <ExpenseIncome />
      <LatestSpending />
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
