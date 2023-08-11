import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating!: number;
  maxStars: number = 5;
  stars: number[] = [];

  ngOnInit(): void {
    this.getStars();
  }

  getStars(): void {
    const roundedRating = Math.round(this.rating * 10) / 10;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = this.maxStars - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      this.stars.push(1);
    }

    if (hasHalfStar) {
      this.stars.push(0.5);
    }

    for (let i = 0; i < emptyStars; i++) {
      this.stars.push(0);
    }
  }
}
