import './scss/_button.scss'

const Index = ({
  children,
  color,
  size = 'medium',
  isCircle = false,
  ...props
}) => {
  const buttonClasses = []

  if (size) buttonClasses.push(`r-${size}`)
  if (isCircle) buttonClasses.push('r-circle')
  if (color) buttonClasses.push(`r-${color}`)

  const classNames = buttonClasses.join(' ')

  return (
    <button {...props} className={`react-button ${classNames}`}>
      {children}
    </button>
  )
}

export default Index
