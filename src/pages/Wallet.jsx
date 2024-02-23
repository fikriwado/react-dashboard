import App from '../App'
import Header from '../components/header'
import Card from '../components/card'

const Wallet = () => {
  return (
    <App>
      <Header
        title='Hello, Fikri'
        desc='View and control your finances here!'
      />
      <Card>
        <Card.Title>Wallet</Card.Title>
        <Card.Body>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
          suscipit mollitia facere debitis ut minus porro. Vitae quas quibusdam
          placeat. Porro perferendis laboriosam unde, non dolores rem aut
          reprehenderit. Porro!
        </Card.Body>
      </Card>
    </App>
  )
}

export default Wallet
