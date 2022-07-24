export interface Report{
    id: string;
    reportNo: number;
    dateCreated: string;
    timeCreated: string;
    title: string;
    issuedBy: string;
    description: string;
    isActive: boolean;
    closedOnDate: string;
    closedOnTime: string;
    editOnDate: string;
    editOnTime: string;
    
    involvedEmployee: number;
    editByUser: number;
    kindOfReportId: number;
    buildingId: number;
}