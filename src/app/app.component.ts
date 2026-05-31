import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

const LEGAL_ROUTES = ['/terms-of-service', '/privacy-policy'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  isLegalRoute = false;
  private routerSub?: Subscription;

  constructor(
    private router: Router,
    private pageTitle: Title
  ) {}

  ngOnInit(): void {
    this.updateLegalRoute(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateLegalRoute(event.urlAfterRedirects));
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  private updateLegalRoute(url: string): void {
    const path = url.split('?')[0].split('#')[0];
    this.isLegalRoute = LEGAL_ROUTES.includes(path);
    if (!this.isLegalRoute) {
      this.pageTitle.setTitle('GuilhermeDeOliveira');
    }
  }

  scrollToItem(data: string) {
    document.getElementById(data)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
