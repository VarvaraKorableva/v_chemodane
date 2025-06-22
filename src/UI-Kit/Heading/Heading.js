
import './Heading.css'

export default function Heading({
  children,
  as: Tag = 'h2',
  className = '',
  baseClassName = 'heading'
}) {

  return <Tag className={`${baseClassName} ${className}`}>{children}</Tag>
}
