import { Header } from '../componets/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './DefaultLayout'
import { Footer } from '../componets/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
