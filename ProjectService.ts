import { Project } from "../entity/Project";
import { User } from "../entity/User";
import { dataBaseSource } from "../data-source";

export class ProjectService {
  private projectRepository = dataBaseSource.getRepository(Project);

  // Méthode pour récupérer tous les projets par UserID
  async getProjectsbyOwnerId(ownerId: number): Promise<Project[]> {
    try {
      const projects = await this.projectRepository.find();
      return projects;
      // filtre via OwnerID
    } catch (error) {
      console.error("Les projets sont introuvables", error(404));
      throw new Error("Les projets sont introuvables");
    }
  }

  // async getAllProjects(): Promise<Project[]> {
  //   try {
  //     const projectRepository = projectRepository(Project);
  //     const projects = await projectRepository.find();
  //     return projects;
  //   } catch (error) {
  //     console.error('Les projets sont introuvables', error(404));
  //     throw new Error('Les projets sont introuvables');
  //   }
  // }

  // récupérer projet par Project ID
  async findProjectById(projectId: number): Promise<Project | undefined> {
    try {
      const project = await this.projectRepository.findOne({});
      return project;
      // filtrer via projectId
    } catch (error) {
      console.error("Projet introuvable", error(404));
      throw new Error("Projet introuvable");
    }
  }

  // Créer un nouveau projet
  async createProject(data: {
    name: string;
    id: number;
    estimatedStartDate: Date;
    estimatedDays: number;
    street1: string;
    street2: string;
    street3: string;
    zipCode: string;
    city: string;
    country: string;
  }): Promise<Project> {
    try {
      const newProject = this.projectRepository.create(data);
      const savedProject = await this.projectRepository.save(newProject);
      return savedProject;
    } catch (error) {
      console.error("Erreur avec la création de projet", error(403));
      throw new Error("Erreur avec la création de projet");
    }
  }

  // Méthode pour mettre à jour un projet existant
  // async get(projectId: number, updatedData: Partial<Project>): Promise<Project | null> {
  //   try {
  //     const projectRepository = dataBaseSource(Project);
  //     const existingProject = await projectRepository.findOne(projectId);

  //     if (!Project) {
  //       return null; // Le projet n'a pas été trouvé
  //     }

  // Meise à jour les propriétés du projet existant avec les nouvelles données
  //     projectRepository.merge(Project, updatedData);

  //     const updatedProject = await projectRepository.save(Project);
  //     return updatedProject;
  //   } catch (error) {
  //     console.error('Error updating project:', error(400));
  //     throw new Error('Unable to update project');
  //   }
  // }

  // suppression du projet
  // async deleteProject(projectId: number): Promise<void> {
  //   try {
  //     const projectRepository = this.dataBaseSource(Project);
  //     await projectRepository.delete(projectId);
  //   } catch (error) {
  //     console.error('Error deleting project:', error(400));
  //     throw new Error('Unable to delete project');
  //   }
  // }
}
