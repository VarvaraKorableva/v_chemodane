import './Heading.css'

export default function EventIntroHeading({
  children,
  as: Tag = 'h1',
  className = '',
  baseClassName = 'EventIntroHeading'
}) {

  return <Tag className={`${baseClassName} ${className}`}>{children}</Tag>
}
