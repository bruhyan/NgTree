import { Component, OnInit } from '@angular/core';
import { AngularD3TreeLibService } from 'angular-d3-tree';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit() {
  }

title = '';
   type = 'OrgChart';
   // 'name of person', 'name of boss', 'title'
   data = [
    [{v:'A', f:'A<div style="color:red; font-style:italic">President</div>'},
       '', 'The President'],
    [{v:'B', f:'B<div style="color:red; font-style:italic">Vice President</div>'},
       'A', 'VP'],
    ['C', 'A', ''],
    ['D', 'A', ''],
    ['E', 'B', ''],
    ['F', 'B', 'Bob Sponge'],
    ['G', 'F', ''],
    ['H', 'F', 'the man'],
    ['I', 'F', ''],
    ['J', 'D', ''],
    ['K', 'D', ''],
    ['L', 'D', '']
 ];
 data2 = [
  ['Organisation', '', ''],
  ['Attendance Group 1', 'Organisation', ''],
  ['Attendance Group 2', 'Organisation', ''],
  ['Attendance Group 3', 'Organisation', ''],
  ['Member 1', 'Attendance Group 1', ''],
  ['Member 2', 'Attendance Group 1', ''],
  ['Member 3', 'Attendance Group 1', ''],
  ['Member 6', 'Attendance Group 2', ''],
  ['Member 7', 'Attendance Group 3', ''],
  ['Member 8', 'Attendance Group 3', ''],
];

//original code for reference, not used
data3 = [
  [{v:'A', f:'A<div style="color:red; font-style:italic">President</div>'},
     '', 'The President'],
  [{v:'B', f:'B<div style="color:red; font-style:italic">Vice President</div>'},
     'A', 'VP'],
  ['C', 'A', ''],
  ['D', 'A', ''],
  ['E', 'B', ''],
  ['F', 'B', 'Bob Sponge'],
  ['G', 'F', ''],
  ['H', 'F', 'the man'],
  ['I', 'F', ''],
  ['J', 'D', ''],
  ['K', 'D', ''],
  ['L', 'D', '']
];

 columnNames = ["Name","Manager","Tooltip"];
 options = {   
    allowHtml: true
 };
 width = 550;
 height = 400;
  constructor(private treeService: AngularD3TreeLibService) {
      
   }

  

  

  

}
