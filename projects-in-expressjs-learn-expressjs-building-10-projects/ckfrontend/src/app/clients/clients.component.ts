import { Component, OnInit } from '@angular/core';

import { ClientService } from './services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public constructor(private clientService: ClientService) { }

  public ngOnInit(): void {
    this.clientService.getClients().subscribe((data) => {});
  }

}
