import { ContactContainer, ContactLayout } from './ContactMe.style'

export function ContactMe() {
  return (
    <ContactLayout>
      <ContactContainer>
        <h1>Faça um orçamento!</h1>
        <div>
          <a
            href="https://wa.me/5568981141671"
            target="_blank"
            rel="author noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/michelhoffmann-/"
            target="_blank"
            rel="author noreferrer"
          >
            Linkedin
          </a>
          <a
            href="mailto:mic.hoff.jr@gmail.com"
            target="_blank"
            rel="author noreferrer"
          >
            Gmail
          </a>
          <a
            href="https://github.com/MichelHoffmann"
            target="_blank"
            rel="author noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://discord.com/users/michelzinmj"
            target="_blank"
            rel="author noreferrer"
          >
            Discord
          </a>
        </div>
      </ContactContainer>
    </ContactLayout>
  )
}
