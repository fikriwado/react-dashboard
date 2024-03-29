import './scss/_dashboard.scss'
import App from '../../App'
import Header from '../../components/header'
import Card from '../../components/card'
import Button from '../../components/button'
import Devider from '../../components/devider'
import { creditCard, logoCreditCard, balance, avatar01 } from '../../assets'
import {
  IconChevronDown,
  IconPlus,
  IconDotsVertical,
  IconMoodSmile,
  IconPaperclip
} from '@tabler/icons-react'
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
                <Card.Title>LIst of items to buy</Card.Title>
                <div className='react-dashboard__items-buy'>
                  <div className='react-dashboard__items-buy--times'>
                    <div className='items-buy__times--time'>
                      <div className='items-buy__times--time-clock'>02:00</div>
                      <div className='items-buy__times--time-date'>
                        Sat, August 12
                      </div>
                    </div>
                    <div className='items-buy__times--time'>
                      <div className='items-buy__times--time-clock'>05:00</div>
                      <div className='items-buy__times--time-date'>
                        Sat, September 12
                      </div>
                    </div>
                  </div>
                  <div className='react-dashboard__items-buy--lists'>
                    <div className='items-buy__lists--total'>
                      <div className='items-buy__lists--total-label'>
                        <span className='label-count'>0/3</span> Shipping
                      </div>
                      <div className='items-buy__lists--total-action'>
                        <Button
                          color='white'
                          size='small'
                          onClick={() => alert('Add an item clicked')}
                        >
                          <IconPlus /> <span>Add an item</span>
                        </Button>
                      </div>
                    </div>
                    <div className='items-buy__lists--items'>
                      <div className='items-buy__lists--items-list'>
                        <div className='list-checkbox'>
                          <input id='mackbook' type='checkbox' />
                          <label htmlFor='mackbook'>Mackbook</label>
                        </div>
                        <div className='list-action'>
                          <Button
                            color='purple-low'
                            size='small'
                            isCircle
                            onClick={() =>
                              alert('Latest spending widget clicked')
                            }
                          >
                            <IconDotsVertical />
                          </Button>
                        </div>
                      </div>
                      <div className='items-buy__lists--items-list'>
                        <div className='list-checkbox'>
                          <input id='bicycle' type='checkbox' />
                          <label htmlFor='bicycle'>Bicycle</label>
                        </div>
                        <div className='list-action'>
                          <Button
                            color='purple-low'
                            size='small'
                            isCircle
                            onClick={() =>
                              alert('Latest spending widget clicked')
                            }
                          >
                            <IconDotsVertical />
                          </Button>
                        </div>
                      </div>
                      <div className='items-buy__lists--items-list'>
                        <div className='list-checkbox'>
                          <input id='motorcycle' type='checkbox' />
                          <label htmlFor='motorcycle'>Motorcycle</label>
                        </div>
                        <div className='list-action'>
                          <Button
                            color='purple-low'
                            size='small'
                            isCircle
                            onClick={() =>
                              alert('Latest spending widget clicked')
                            }
                          >
                            <IconDotsVertical />
                          </Button>
                        </div>
                      </div>
                      <div className='items-buy__lists--items-list'>
                        <div className='list-checkbox'>
                          <input id='iphone' type='checkbox' />
                          <label htmlFor='iphone'>Iphone 14 pro max</label>
                        </div>
                        <div className='list-action'>
                          <Button
                            color='purple-low'
                            size='small'
                            isCircle
                            onClick={() =>
                              alert('Latest spending widget clicked')
                            }
                          >
                            <IconDotsVertical />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <Card.Title>Esther Howards</Card.Title>
                <div className='react-dashboard__chat'>
                  <div className='react-dashboard__chat--message'>
                    <div className='react-dashboard__chat--message-right'>
                      <div className='chat-message'>Are you ready?</div>
                      <div className='chat-profile'>
                        <img src={avatar01} alt='profile' />
                      </div>
                    </div>
                    <div className='react-dashboard__chat--message-left'>
                      <div className='chat-profile'>
                        <img src={avatar01} alt='profile' />
                      </div>
                      <div className='chat-message'>
                        I have prepared everything
                      </div>
                    </div>
                  </div>
                  <div className='react-dashboard__chat--typing'>
                    <textarea
                      className='react-dashboard__chat--typing-input'
                      placeholder='Type your message'
                    ></textarea>
                    <div className='react-dashboard__chat--typing-footer'>
                      <div className='footer-left'>
                        <Button color='transparent' size='small' isCircle>
                          <IconMoodSmile />
                        </Button>
                        <Button color='transparent' size='small' isCircle>
                          <IconPaperclip />
                        </Button>
                      </div>
                      <Button color='purple' size='small'>
                        Send now
                      </Button>
                    </div>
                  </div>
                </div>
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
