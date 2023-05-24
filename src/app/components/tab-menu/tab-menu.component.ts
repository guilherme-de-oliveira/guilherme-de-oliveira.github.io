import { Inject, Component, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})

export class TabMenuComponent {
  @Output() outputFromChild : EventEmitter<string> = new EventEmitter();
  // Menu Items
  about: string = `About`;
  work: string = `Work`;
  experiment: string = `Experiment`;
  configPlaceHolder: string = `Config`;
  contact: string = `Contact`;
  items: MenuItem[] = [
    { label: `${this.about}`, icon: 'pi pi-fw pi-home', command: () => { this.sendScrollTo("description")}},
    { label: `${this.work}`, icon: 'pi pi-fw pi-file', command: () => { this.sendScrollTo("experience")} },
    { label: `${this.experiment}`, icon: 'pi pi-fw pi-pencil', command: () => { this.sendScrollTo("experiment")} },
    { label: `${this.contact}`, icon: 'pi pi-fw pi-users', command: () => { this.sendScrollTo("contact")} },
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

  sendScrollTo(route: string) {
    console.log(route)
    this.outputFromChild.emit(route);
  }
}