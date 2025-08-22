import { Div, HeaderComponent } from './Header.style'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderComponent>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <Div>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact-me">Contact me</NavLink>
      </Div>
    </HeaderComponent>
  )
}
