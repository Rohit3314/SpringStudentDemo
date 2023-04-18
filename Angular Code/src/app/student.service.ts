import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  inserturl = "http://localhost:9005/insertstudent";
  updateurl = "http://localhost:9005/updatestudent";
  deleteurl = "http://localhost:9005/deletestudent";
  viewurl =   "http://localhost:9005/viewstudent";

  constructor(private h1 : HttpClient) { }

  insertservice(data:any)
  {
     return this.h1.post(this.inserturl,data);
  }

  updateservice(data:any)
  {
     return this.h1.post(this.updateurl,data);
  }

  deleteservice(data:any)
  {
     return this.h1.post(this.deleteurl,data);
  }

  viewservice()
  {
   return this.h1.get(this.viewurl);
  }
}
