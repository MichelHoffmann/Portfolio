import { ArrowRight } from '@phosphor-icons/react'
import { AllProjects } from '../../componets/AllProjects'
import { ProjectsContainer } from './Projects.style'
import { WhatsButton } from '../../componets/WhatsButton'

export function Projects() {
  return (
    <ProjectsContainer>
      <div className="h1">
        <h1>
          Trabalhos e <br />
          projetos
        </h1>
      </div>
      <AllProjects />
      <p className="vejaMais">
        Veja mais <ArrowRight />
      </p>
      <div className="divWhats">
        <WhatsButton />
      </div>
    </ProjectsContainer>
  )
}
