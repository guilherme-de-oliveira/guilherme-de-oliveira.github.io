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
  configPlaceHolder: string = `Config`;
  items: MenuItem[] = [
    { label: `${this.about}`, icon: 'pi pi-fw pi-home', routerLink: '/about' },
    { label: `${this.work}`, icon: 'pi pi-fw pi-file', routerLink: '/work' },
    { label: `${this.experiment}`, icon: 'pi pi-fw pi-pencil', routerLink: '/experiment' },
  ];

  config: MenuItem[] = [
    {
      label: 'Locales',
      items: [
        { 
          label: 'English', disabled: true,
          command: () => { this.changeLocale('en-US') }
        },
        { 
          label: 'Português(Brasil)', disabled: true, 
          command: () => { this.changeLocale('pt-BR') }
        },
      ]
    },
    {
      label: 'Theme',
      items: [
        { label: 'Dark', command: () => {
          this.changeTheme('md-dark-indigo') }},
        { label: 'Light', command: () => {
          this.changeTheme('md-light-indigo') }}
      ]
    }
  ];

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string,
    private themeService: ThemeService
  ) { }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

  changeLocale(locale: string) {
    // When the visitor selects Portuguese, we redirect to `/pt`
    window.location.href = `/${this.activeLocale}`;
  }

}