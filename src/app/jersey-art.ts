import { Component, Input } from '@angular/core';

export interface Product {
  kind: 'jersey' | 'pennant';
  club: string;
  year: number;
  label: string;
  price: string;
  body: string;
  trim: string;
  pattern?: 'plain' | 'stripes' | 'band' | 'halves';
}

@Component({
  selector: 'app-jersey-art',
  standalone: true,
  template: `
    <svg viewBox="0 0 124 128" preserveAspectRatio="xMidYMid meet" class="art" aria-hidden="true">
      @if (product.kind === 'pennant') {
        <rect x="26" y="20" width="4" height="88" fill="#8a6d3b" />
        <path d="M30 26 L104 41 L30 46 Z" [attr.fill]="hu[0]" stroke="rgba(0,0,0,0.14)" stroke-width="1" />
        <path d="M30 46 L104 41 L104 51 L30 58 Z" [attr.fill]="hu[1]" stroke="rgba(0,0,0,0.14)" stroke-width="1" />
        <path d="M30 58 L104 51 L30 70 Z" [attr.fill]="hu[2]" stroke="rgba(0,0,0,0.14)" stroke-width="1" />
      } @else {
        <path
          d="M44 20 L62 30 L80 20 L104 34 L96 52 L86 48 L86 108 L38 108 L38 48 L28 52 L20 34 Z"
          [attr.fill]="product.body" stroke="rgba(0,0,0,0.14)" stroke-width="1.5" />
        @if (product.pattern === 'stripes') {
          <rect x="42" y="34" width="8" height="74" [attr.fill]="product.trim" />
          <rect x="58" y="34" width="8" height="74" [attr.fill]="product.trim" />
          <rect x="74" y="34" width="8" height="74" [attr.fill]="product.trim" />
        }
        @if (product.pattern === 'band') {
          <rect x="34" y="58" width="56" height="14" [attr.fill]="product.trim" />
        }
        @if (product.pattern === 'halves') {
          <path d="M62 30 L62 108 L34 108 L34 44 Z" [attr.fill]="product.trim" opacity="0.9" />
        }
        <path d="M54 22 Q62 32 70 22" fill="none" [attr.stroke]="product.trim" stroke-width="3" />
      }
    </svg>
  `,
  styles: [`
    :host { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
    .art { width: 58%; height: 78%; }
  `],
})
export class JerseyArt {
  @Input({ required: true }) product!: Product;
  hu = ['#CE2939', '#FFFFFF', '#477050'];
}
