import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pofile',
  templateUrl: './pofile.component.html',
  styleUrl: './pofile.component.css',
})
export class PofileComponent {
  constructor(
    private api: ApiService,
    private route: Router,
  ) {}

  async onLogout() {
    const res = await this.api.getLogout();
    if (res.status != 200) return console.log('Failed to logout');
    this.route.navigate(['/login']);
    console.log('Logged out', res.status);
  }
}
