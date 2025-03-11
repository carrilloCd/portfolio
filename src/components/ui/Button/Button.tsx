import { ReactNode } from 'react'
import './Button.scss'

interface IButtonProps {
  url?: string;
  icon?: ReactNode;
  text?: string;
  variant?: 'primary' | 'icon' | 'link' | 'secondary';
  blank?: boolean;
  onClick?: () => void;
}
export const Button: React.FC<IButtonProps> = ({ icon, text, variant, url, blank, onClick }) => {
  const ButtonContent = (
    <>
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </>
  )

  if (url) {
    return (
      <a href={url} className={`button button--${variant}`} onClick={onClick} target={blank ? '_blank' : '_self'} rel="noopener noreferrer">
        {ButtonContent}
      </a>)
  }

  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {ButtonContent}
    </button>
  )

}
