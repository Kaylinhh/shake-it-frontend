import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

ngOnInit(): void {
  this.items = [
    {label: 'Home', icon: 'pi pi-home', routerLink: 'home'},
    { label: 'Story Mode', icon: 'pi pi-fw pi-book', routerLink: 'story' },
    { label: 'Arcade Mode', icon: 'pi pi-fw pi-palette', routerLink: 'arcade' },
    { label: 'Manage Cocktails', icon: 'pi pi-fw pi-pencil', routerLink: 'manage' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' }
  ]

  this.activeItem = this.items[0];

}


}
