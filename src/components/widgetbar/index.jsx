import './scss/_widgetbar.scss'
import Button from '../button'
import ExpenseIncome from '../widget-expense-income'
import LatestSpending from '../widget-latest-spending'
import GoPremium from '../widget-go-premium'
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
      <GoPremium />
    </div>
  )
}

export default Index
