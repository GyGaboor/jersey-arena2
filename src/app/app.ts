import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { JerseyArt, Product } from './jersey-art';

interface Toggle { name: string; on: boolean; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ButtonModule, CarouselModule, JerseyArt],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  years = [1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984];
  selectedYears = new Set<number>([1978, 1979, 1980, 1981, 1982]);
  viewMode: 'grid' | 'carousel' = 'grid';

  clubs: Toggle[] = [
    { name: 'Ferencváros', on: true },
    { name: 'Újpesti Dózsa', on: false },
    { name: 'Budapest Honvéd', on: true },
    { name: 'MTK', on: false },
    { name: 'Vasas', on: false },
  ];
  accessories: Toggle[] = [
    { name: 'Sál', on: false },
    { name: 'Zászló', on: true },
    { name: 'Jelvény', on: false },
    { name: 'Műsorfüzet', on: false },
    { name: 'Sapka', on: false },
  ];
  conditions: Toggle[] = [
    { name: 'Hibátlan', on: true },
    { name: 'Jó', on: false },
    { name: 'Pályán hordott', on: false },
  ];

  products: Product[] = [
    { kind: 'jersey', club: 'Ferencváros', year: 1981, label: 'HAZAI MEZ', price: '24 900 Ft', body: '#0a6b3b', trim: '#ffffff', pattern: 'plain' },
    { kind: 'jersey', club: 'Újpesti Dózsa', year: 1979, label: 'HAZAI MEZ', price: '27 500 Ft', body: '#4b2e83', trim: '#ffffff', pattern: 'plain' },
    { kind: 'jersey', club: 'Budapest Honvéd', year: 1982, label: 'HAZAI MEZ', price: '22 000 Ft', body: '#cc1414', trim: '#ffffff', pattern: 'plain' },
    { kind: 'jersey', club: 'MTK Budapest', year: 1980, label: 'HAZAI MEZ', price: '19 900 Ft', body: '#14387f', trim: '#ffffff', pattern: 'stripes' },
    { kind: 'jersey', club: 'Vasas SC', year: 1978, label: 'HAZAI MEZ', price: '18 500 Ft', body: '#b71c1c', trim: '#14387f', pattern: 'band' },
    { kind: 'pennant', club: 'Magyarország', year: 1978, label: 'ZÁSZLÓ', price: '12 000 Ft', body: '#CE2939', trim: '#ffffff' },
  ];

  responsive = [
    { breakpoint: '1200px', numVisible: 2, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
  ];

  toggleYear(y: number): void {
    if (this.selectedYears.has(y)) this.selectedYears.delete(y);
    else this.selectedYears.add(y);
  }
  isYear(y: number): boolean {
    return this.selectedYears.has(y);
  }
  toggle(t: Toggle): void {
    t.on = !t.on;
  }
}
