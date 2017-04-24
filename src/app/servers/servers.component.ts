import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated: string = 'Server is not created';
  serverName = 'Test';

  constructor() { 
    setTimeout( ()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
      this.serverCreated = 'Server is created with name: '+this.serverName;
  }

  ngOnInit() {
  }

}
