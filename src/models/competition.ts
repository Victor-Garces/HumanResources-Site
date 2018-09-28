import { CompetitionStatus } from "../enums/competitionStatus";

export class Competition{
    id: string;
    description: string;
    status: CompetitionStatus;
    candidateId: string;
}