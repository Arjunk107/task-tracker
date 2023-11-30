import { Component, OnInit } from '@angular/core';
import { TaskManagementService } from '../task-management.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public taskForm: any = {
    name: '',
    description: '',
    status: ''
  }
  taskData: any[] = [{
    'name': '', 'description': '', 'status': ''
  }];

  constructor(private taskdetails: TaskManagementService) { }

  ngOnInit(): void {
    this.taskData = this.taskdetails.showdata();

  }
  onaddTask(form: any, taskdata: any) {
    console.log(taskdata);
    let uname = taskdata.name;
    let udescription = taskdata.description;
    let ustatus = taskdata.status;
    this.taskdetails.addTask(uname, udescription, ustatus)
  }
  deleteData(index: any) {
    this.taskData.splice(index, 1)
  }
  updateStatus(data: any, index: any) {
    if (data == 'active') {
      this.taskData[index].status = 'in-active';
    }
    else if (data == 'in-active') {
      this.taskData[index].status = 'Unknown';
    }
    else {
      this.taskData[index].status = 'active';
    }
  }

}
