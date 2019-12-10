import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  
  data: Object;
  rawdata: string;

  constructor(private htttp:HttpClient) { }

  ngOnInit() {
   this.getdata();
   //new post from api
   setInterval(x=>{this.getdata()},10000)
  }
  //for geeting the data
  getdata(){
    this.htttp.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe(resp=>{console.log(resp)
    this.data=resp['hits'];
    // console.log(this.data);
   })

  }

  dialog(list){
    this.rawdata=JSON.stringify(list)
  }

}
