import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    { label: 'Início', icon: 'pi pi-fw pi-home' },
    { label: 'Criar Currículo', icon: 'pi pi-fw pi-file-edit' },
    { label: 'Entrar', icon: 'pi pi-fw pi-sign-in' },
  ];
  activeItem: MenuItem = this.menuItems[0];

  constructor() { }

  ngOnInit(): void {
  }

  onActiveItemChange(item) {
    this.activeItem = item;
  }
}
