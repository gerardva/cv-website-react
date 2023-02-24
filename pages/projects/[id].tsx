import Layout from '../../components/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Project } from '../../types/project'
import { getAllProjectIds, getProject } from '../../lib/projects'
import { Chip, Typography } from '@mui/material'
import { Slide } from 'react-slideshow-image';

export default function ProjectDetail({ project }: { project: Project }) {
  const slideProperties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "ease"
  };

  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '400px'
  }

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <div className="slide-container">
            <Slide {...slideProperties}>
              {project.images.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...slideStyle, 'backgroundImage': `url(${project.assetsFolder}${slideImage})` }}>
                </div>
              </div>
            ))} 
            </Slide>
          </div>
          <Typography variant="h5" gutterBottom>{project.title}</Typography>
          <Typography variant="body2" gutterBottom>{project.content}</Typography>
          <div className="my-4">Gebruikte technieken</div>
          {project.techniques.map((t, index) => (<Chip key={index} className='me-2' label={t} />))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getProject(params?.id as string);
  return {
    props: {
      project
    }
  };
}
