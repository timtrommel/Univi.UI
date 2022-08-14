export interface Report{
    id: string;
    reportNo: number;
    dateCreated: string;
    timeCreated: string;
    title: string;
    issuedBy: string;
    description: string;
    isActive: boolean; // Check if the report is active
    closeReport: boolean;
    closedOnDate: string;
    closedOnTime: string;
    editOnDate: string;
    editOnTime: string;
    actionNeeded: boolean;
    reportByEmployeeOrVisitor: string;

    
    involvedEmployee: number;
    editByUser: number;
    kindOfReportId: number;
    buildingId: number;
}