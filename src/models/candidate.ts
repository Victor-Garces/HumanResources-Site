import { WorkExperience } from "./work-experience";

export interface Candidate {
    id?:string;
    identification: string;
    name: string;
    positionId: string;
    department: string;
    aspiratedSalary: string;
    workExperiences: WorkExperience[]
}