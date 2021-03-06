import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employeeList: Employee[];

  constructor(private http: Http) {
  }

  postEmployee(emp: Employee) {
    let body = JSON.stringify(emp);
    let headerOptions = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:52623/api/Employees', body, requestOptions).map(x => x.json());
  }

  putEmployee(id, emp: Employee) {
    let body = JSON.stringify(emp);
    let headerOptions = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('http://localhost:52623/api/Employees/' + id, body, requestOptions).map(x => x.json());
  }

  getEmployeeList() {
    this.http.get('http://localhost:52623/api/Employees')
      .map((data: Response) => {
        return data.json() as Employee[];
      }).toPromise().then(x => {
      this.employeeList = x;
    });
  }

  delecteEmployee(id: number) {
    return this.http.delete('http://localhost:52623/api/Employees/' + id).map(res => res.json());
  }
}
