import './scss/_card.scss'

const Index = ({ children, hasBorder }) => (
  <div className={`react-card ${hasBorder ? 'r-has-border' : ''}`}>
    {children}
  </div>
)

const Title = ({ children, size = 'medium', align }) => {
  const cardTitleClasses = []

  if (size) cardTitleClasses.push(`r-${size}`)
  if (align) cardTitleClasses.push(`r-text-${align}`)

  const classNames = Object.values(cardTitleClasses).join(' ')

  return <div className={`react-card__title ${classNames}`}>{children}</div>
}

const Body = ({ children }) => (
  <div className='react-card__body'>{children}</div>
)

Index.Title = Title
Index.Body = Body

export default Index
