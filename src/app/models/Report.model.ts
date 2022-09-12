export interface Report{
    id: string;
    reportNo: number;
    dateCreated: Date;
    dateEvent: Date; //Date of event
    title: string;
    issuedBy: string;
    description: string;
    isActive: boolean; // Check if the report is active
    closeReport: boolean;
    closedOnDate: Date;
    editOnDate: Date;
    actionNeeded: boolean;
    reportByEmployeeOrVisitor: string;

    
    involvedEmployee: string;
    editByUser: string;
    kindOfReport: string;
    building: string;
}