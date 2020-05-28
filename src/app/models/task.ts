export class Task {
          // caseId:string;
  // taskName:string;
  // priority:Number;
  // startDate:string;
  // outDate:string;
  // followUpDate:string;
  constructor(
    public id:string,
    public processInstanceId:string,
    public priority:Number,
    public assigne:string,
    public created:Date,
    public due:string,
    public followUp:string
  ){  }
}
