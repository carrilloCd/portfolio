import { ReactNode } from 'react'
import './Button.scss'

interface IButtonProps {
  url?: string;
  icon?: ReactNode;
  text?: string;
  variant?: 'primary' | 'icon' | 'link';
}
export const Button: React.FC<IButtonProps> = ({ icon, text, variant, url }) => {
  const ButtonContent = (
    <>
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </>
  )

  if (url) {
    return (
      <a href={url} className={`button button--${variant}`} target='_blank'>
        {ButtonContent}
      </a>)
  }

  return (
    <button className={`button ${variant}`}>
      {ButtonContent}
    </button>
  )

}
