import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskaddService {
  private donetasks: { taskname: string, owner: string, description: string }[] = [
   
  ];
  private inprogresstasks: { taskname: string, owner: string, description: string }[] = [
   
  ];
  private todotasks: { taskname: string, owner: string, description: string }[] = [
    { taskname: "ala", owner: "owner1", description: "description1" },
    { taskname: "sarra", owner: "owner2", description: "description2" },
    { taskname: "bhiri", owner: "owner3", description: "description3" }
  ];
  
  addDoneTasks(taskn:string,own:string,descrip:string):void{
    const item = { taskname: taskn, owner: own, description: descrip };
    this.donetasks.push(item);
  }
  addtodoTasks(taskn:string,own:string,descrip:string):void{
    const item = { taskname: taskn, owner: own, description: descrip };
    this.todotasks.push(item);
  }
  addinprogressTasks(taskn:string,own:string,descrip:string):void{
    const item = { taskname: taskn, owner: own, description: descrip };
    this.inprogresstasks.push(item);
  }
  getAlldonetasks():{ taskname: string, owner: string, description: string }[]{
    return this.donetasks;
  }
  getAllinprogresstasks():{ taskname: string, owner: string, description: string }[]{
    return this.inprogresstasks;
  }
  getAlltodotasks():{ taskname: string, owner: string, description: string }[]{
    return this.todotasks;
  }
  constructor() { }
}
