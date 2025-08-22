import { WhatsappLogo } from '@phosphor-icons/react'
import { WhatsLink } from './WhatsLink.styled'

export function WhatsButton() {
  return (
    <WhatsLink
      href="https://wa.me/5568981141671"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsappLogo size={18} /> Vamos conversar
    </WhatsLink>
  )
}
