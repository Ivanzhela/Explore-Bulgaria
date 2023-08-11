import {
  Component,
  HostListener,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { User } from 'src/app/feature/user/user-type';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges {
  user: User | null | undefined = null;
  stickyNavPosition: boolean = false;

  constructor(private elementRef: ElementRef, private service: UserService) {
    this.service.getUser().subscribe((u) => {
      this.user = u;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.getUser().subscribe((u) => {
      this.user = u;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const stickyDiv =
      this.elementRef.nativeElement.getElementsByClassName('header')[0];

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      stickyDiv.classList.add('white_theme');
      this.stickyNavPosition = true;
    } else {
      stickyDiv.classList.remove('white_theme');
      this.stickyNavPosition = false;
    }
  }

  onLogout() {
    this.service.logoutUser();
  }
}
