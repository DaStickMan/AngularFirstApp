import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  serverName = 'Test';
  servers = ["testserver, testserver 2"];

  constructor() { 
    setTimeout( ()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server is created with name: '+this.serverName;
  }

  ngOnInit() {
  }

}
