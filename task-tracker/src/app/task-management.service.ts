import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  taskdata = [{
    'name': 'Driving', 'description': 'Drive from Kannur to kasargod', 'status': 'active'
  }];

  addTask(name: string, description: string, status: string) {
    alert("Successfully Added")
    this.taskdata.push({ name: name, description: description, status: status })

  }
  showdata() {
    return this.taskdata;
  }
}
