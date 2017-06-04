import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['../servers/servers.component.css']
})
export class ServersComponent{
  private allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = "default_text";
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName + " server has been created";
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
