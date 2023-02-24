import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { GetStaticProps } from 'next'
import { Project } from '../types/project'
import { getAllProjects } from '../lib/projects'
import About from '../components/about'
import { Divider } from '@mui/material'
import Projects from '../components/projects'

import styles from '../styles/utils.module.scss';
import WorkExperience from '../components/work-experience'
import Education from '../components/education'
import Publications from '../components/publications'
import Skills from '../components/skills'
import Hobbies from '../components/hobbies'

export default function Home({
  projects
}: {
  projects: Project[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="about"><About /></div>      
      <Divider className={styles.divider} />
      <div id="projects"><Projects projects={projects}/></div>
      <Divider className={styles.divider} />
      <div id="workexperience"><WorkExperience/></div>
      <Divider className={styles.divider} />
      <div id="education"><Education/></div>
      <Divider className={styles.divider} />
      <div id="publications"><Publications/></div>
      <Divider className={styles.divider} />
      <div id="skills"><Skills/></div>
      <Divider className={styles.divider} />
      <div id="hobbies"><Hobbies/></div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects();
  return {
    props: {
      projects
    }
  };
}
