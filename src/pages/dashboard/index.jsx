import App from '../../App'
import Header from '../../components/header'
import Card from '../../components/card'
import './scss/_dashboard.scss'

const Dashboard = () => {
  return (
    <App>
      <Header
        title='Hello, Fikri'
        desc='View and control your finances here!'
      />
      <div className='react-dashboard'>
        <div className='react-row'>
          <div className='react-dashboard__balance-statistics'>
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
          <div className='react-dashboard__credit-card'>
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

        <div className='react-row'>
          <Card hasOtherBody>
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
