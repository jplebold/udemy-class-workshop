import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['../servers/servers.component.css']
})
export class ServersComponent{
  private allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    this.serverCreationStatus = "server has been created";
  }
}
