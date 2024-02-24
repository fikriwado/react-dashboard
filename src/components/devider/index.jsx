import './scss/_devider.scss'

const Index = ({ hasNoXSpace }) => (
  <div
    className={`react-devider ${hasNoXSpace ? 'r-has-no-x-space' : ''}`}
  ></div>
)

export default Index
