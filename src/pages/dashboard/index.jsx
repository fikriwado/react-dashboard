import './scss/_dashboard.scss'
import App from '../../App'
import Header from '../../components/header'
import Card from '../../components/card'
import Button from '../../components/button'
import Devider from '../../components/devider'
import { creditCard, logoCreditCard, balance } from '../../assets'
import { IconChevronDown } from '@tabler/icons-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const Dashboard = () => {
  const data = [
    { name: 'Oct', balance1: 60, balance2: 50 },
    { name: 'Nov', balance1: 30, balance2: 25 },
    { name: 'Dec', balance1: 30, balance2: 20 },
    { name: 'Jan', balance1: 25, balance2: 18 },
    { name: 'Feb', balance1: 20, balance2: 15 }
  ]

  return (
    <App>
      <Header
        title='Hello, Fikri'
        desc='View and control your finances here!'
      />
      <div className='react-dashboard'>
        <div className='react-row tablet-column'>
          <div className='react-dashboard__balance-statistics'>
            <Card fullHeight>
              <Card.Title hasAction>
                <p>Balance statistics</p>
                <Button
                  color='light'
                  onClick={() => alert('Filter clicked')}
                  className='stats-btn-filter'
                >
                  <span>Filter</span> <IconChevronDown />
                </Button>
              </Card.Title>
              <Card.Body>
                <div className='balance-statistics'>
                  <div className='balance-statistics__info'>
                    <p className='balance-statistics__info--total'>$564</p>
                    <div className='balance-statistics__total'>
                      <img
                        src={balance}
                        alt='balance'
                        className='balance-statistics__total-img'
                      />
                      <p className='balance-statistics__total-label'>
                        Your total balance
                      </p>
                    </div>
                    <Devider hasNoXSpace />
                    <p className='balance-statistics__desc'>
                      Always see your update earnings updates.
                    </p>
                  </div>
                  <div className='balance-statistics__bar'>
                    <ResponsiveContainer
                      width='100%'
                      height='100%'
                      className='balance-statistics__wrapper'
                    >
                      <BarChart width={150} height={40} data={data}>
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Bar
                          dataKey='balance1'
                          className='statistics__bar--primary'
                        />
                        <Bar
                          dataKey='balance2'
                          className='statistics__bar--secondary'
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='react-dashboard__credit-card'>
            <Card backgroundImage={creditCard} fullHeight>
              <Card.Body hasNoSpace>
                <div className='credit-card__content'>
                  <img
                    src={logoCreditCard}
                    alt='logo credit card'
                    className='credit-card__logo'
                  />
                  <div className='credit-card__info'>
                    <div>
                      <p className='credit-card__info--number'>****1234</p>
                      <p className='credit-card__info--name'>
                        Moch Fikri Khoirurrizal
                      </p>
                    </div>
                    <div>
                      <p className='credit-card__info--expired'>08/12</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className='react-row'>
          <Card>
            <Card.MultiBody>
              <Card.Body>
                <Card.Title>Example</Card.Title>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                suscipit mollitia facere debitis ut minus porro. Vitae quas
                quibusdam placeat. Porro perferendis laboriosam unde, non
                dolores rem aut reprehenderit. Porro!
              </Card.Body>
              <Card.Body>
                <Card.Title>Example</Card.Title>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                suscipit mollitia facere debitis ut minus porro. Vitae quas
                quibusdam placeat. Porro perferendis laboriosam unde, non
                dolores rem aut reprehenderit. Porro!
              </Card.Body>
            </Card.MultiBody>
          </Card>
        </div>

        <div className='react-row'>
          <div className='react-dashboard__transaction'>
            <Card>
              <Card.Title>Example</Card.Title>
              <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                suscipit mollitia facere debitis ut minus porro. Vitae quas
                quibusdam placeat. Porro perferendis laboriosam unde, non
                dolores rem aut reprehenderit. Porro!
              </Card.Body>
            </Card>
          </div>
          <div className='react-dashboard__analytics'>
            <Card>
              <Card.Title>Example</Card.Title>
              <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
                suscipit mollitia facere debitis ut minus porro. Vitae quas
                quibusdam placeat. Porro perferendis laboriosam unde, non
                dolores rem aut reprehenderit. Porro!
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </App>
  )
}

export default Dashboard
