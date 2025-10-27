
import './Heading.css'

export default function Heading({
    children,
    as: Tag = 'h2',
    className = '',
    baseClassName = 'heading',
    fontVariant = 'default',
    color,
  }) {

  const fontVariants = {
    default: 'Mulish, sans-serif',
    amatic: '"Amatic SC", cursive',
  };

  const style = {
    fontFamily: fontVariants[fontVariant],
    ...(color && { color }),
  };

  return <Tag className={`${baseClassName} ${className}`} style={style}>{children}</Tag>
}
