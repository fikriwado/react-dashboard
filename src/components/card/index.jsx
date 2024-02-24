import './scss/_card.scss'

const Index = ({ children, hasBorder, backgroundImage, ...props }) => {
  const cardClasses = []

  if (hasBorder) cardClasses.push('r-has-border')
  if (backgroundImage) cardClasses.push('r-background-image')

  const classNames = Object.values(cardClasses).join(' ')

  return (
    <div
      {...props}
      className={`react-card ${classNames}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  )
}

const Title = ({ children, size = 'medium', align, hasAction }) => {
  const cardTitleClasses = []

  if (size) cardTitleClasses.push(`r-${size}`)
  if (align) cardTitleClasses.push(`r-text-${align}`)
  if (hasAction) cardTitleClasses.push(`r-has-action`)

  const classNames = Object.values(cardTitleClasses).join(' ')

  return <div className={`react-card__title ${classNames}`}>{children}</div>
}

const Body = ({ children, hasNoSpace }) => (
  <div className={`react-card__body ${hasNoSpace ? 'r-has-no-space' : ''}`}>
    {children}
  </div>
)

const MultiBody = ({ children }) => (
  <div className='react-card__multibody'>{children}</div>
)

Index.Title = Title
Index.Body = Body
Index.MultiBody = MultiBody

export default Index
