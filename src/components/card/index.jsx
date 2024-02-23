import './scss/_card.scss'

const Index = ({ children }) => <div className='react-card'>{children}</div>

const Title = ({ children, size = 'medium', align }) => {
  const headingSize = `react-card__title--${size}`
  return (
    <div className='react-card__title'>
      <h1 className={`${headingSize} ${align ? `r-text-center` : ''}`}>
        {children}
      </h1>
    </div>
  )
}

const Body = ({ children }) => (
  <div className='react-card__body'>{children}</div>
)

Index.Title = Title
Index.Body = Body

export default Index
