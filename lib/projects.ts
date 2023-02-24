import fs from 'fs'
import path from 'path'
import { Project } from '../types/project'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getAllProjects(): Project[] {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames.map(fileName => {
        const id = fileName.replace(/\.json$/, '');
        return getProject(id);
    });
}

export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.json$/, '')
        }
      }
    })
  }

export function getProject(id: string): Project {
    const fullPath = path.join(projectsDirectory, `${id}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents) as Project;
}