import { Inject, Component, LOCALE_ID } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})

export class TabMenuComponent {
  // Menu Items
  about: string = `About`;
  work: string = `Work`;
  experiment: string = `Experiment`;

  items: MenuItem[] = [
    {label: `${this.about}`, icon: 'pi pi-fw pi-home', routerLink: '/about'},
    {label: `${this.work}`, icon: 'pi pi-fw pi-file', routerLink: '/work'},
    {label: `${this.experiment}`, icon: 'pi pi-fw pi-pencil', routerLink: '/experiment'},
  ];

  locales = [
    { code: 'en-US', name: 'English' },
    { code: 'pt-BR', name: 'Português(Brasil)' },
  ];
  
  // Theme Definitions
  stateOptions: any[] = [
    {label: 'Dark', value: 'md-dark-indigo'}, 
    {label: 'Light', value: 'md-light-indigo'}
  ];;
  value: string = "md-dark-indigo";

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string,
    private themeService: ThemeService
  ) {}

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

  onChange() {
    // When the visitor selects Arabic, we redirect
    // to `/ar`
    window.location.href = `/${this.activeLocale}`;
  }

}