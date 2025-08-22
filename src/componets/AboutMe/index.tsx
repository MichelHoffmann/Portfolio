import {
  AboutMeMain,
  HeaderInformations,
  MyInformations,
  TechContainer,
  TechIcon,
} from './AboutMe.style'
import avatar from '../../assets/avatar.svg'
import ts from '../../assets/typescript-logo.svg'
import react from '../../assets/react-logo.svg'
import tailwind from '../../assets/tailwind-logo.svg'
import next from '../../assets/next-logo.svg'
import CurriculoMichel from '../../assets/curriculo-michel.pdf'

import { NavLink } from 'react-router-dom'
import { WhatsButton } from '../WhatsButton'
import { ArrowLineDown } from '@phosphor-icons/react'

export function AboutMe() {
  return (
    <AboutMeMain>
      <HeaderInformations>
        <img src={avatar} alt="desenho do michel com oculos e blusa preta" />
        <p>OLÁ 👋🏽 EU SOU O</p>
        <h1>
          MICHEL <br />
          <span>HOFFMANN</span>
        </h1>
        <h3>Front-end Developer</h3>
        <TechContainer>
          <TechIcon>
            <img src={ts} alt="" />
          </TechIcon>
          <TechIcon>
            <img src={react} alt="" />
          </TechIcon>
          <TechIcon>
            <img src={tailwind} alt="" />
          </TechIcon>
          <TechIcon>
            <img src={next} alt="" />
          </TechIcon>
        </TechContainer>
      </HeaderInformations>
      <MyInformations>
        <div className="baixar-cv animation">
          <a className="curriculo" href={CurriculoMichel}>
            Baixar CV <ArrowLineDown size={18} />
          </a>
          <WhatsButton />
        </div>
        <p className="text">
          Sou um desenvolvedor Front-End apaixonado por tecnologia. Iniciei
          minha jornada na programação web em 2022 estudando através da Udemy,
          Youtube e a comunidade Dev. Atualmente desenvolvo meus projetos
          utilizando Typescript, React, Next, Styled Components e Tailwind e
          estou iniciando os meus estudos voltados para o back-end seguindo a
          mesma stack usando node JS.
        </p>
        <NavLink to="/projects" className="projects">
          {' '}
          Meus projetos
        </NavLink>
      </MyInformations>
    </AboutMeMain>
  )
}
