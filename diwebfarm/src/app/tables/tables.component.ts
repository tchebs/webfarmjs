import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { HttpClient } from '@angular/common/http';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;
    public responsefromHistory: any;

  constructor(private userservice: UserService, private http:HttpClient) { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary', 'Delete Container'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'UserRole', 'City', 'Delete User' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };

      this.tableData3 = {
          headerRow: [ 'ip', 'name', 'path', 'ready', 'total' ],
          dataRows: [this.loadcontainerdata()]
      }

      

      


  }
  loadcontainerdata() {
    this.responsefromHistory = {
        
            "col1":{"Attribute1": "value1", "Attribute2": "value2", "Attribute3": "value3"},
            "col2":{"Attribute1": "value4", "Attribute2": "value5", "Attribute3": "value6"}, 
            "col3":{"Attribute1": "value7", "Attribute2": "value8", "Attribute3": "value9"} 
        };
    
    this.userservice.getExistingContainers()
    .subscribe(x => console.log(this.responsefromHistory))
    
    console.log('we have gotten the subscribed data')
    
    console.log(this.responsefromHistory)

    return this.responsefromHistory

  }


}
