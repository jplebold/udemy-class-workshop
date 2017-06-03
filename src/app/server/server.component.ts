import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../server/server.component.css']
})
export class ServerComponent {
  private serverId: number = 10;
  private serverStatus: string = 'offline';

  public getStatus() {
    return this.serverStatus;
  };
}
