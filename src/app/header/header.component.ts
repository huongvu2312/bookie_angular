import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();
  isLogin: boolean;

  constructor(private router: Router) {
    // on route change to '/login', set the variable isLogin to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login' || event.url === '/register') {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      }
    });
  }

  ngOnInit() {
  }

  onSelect(option: string) {
    this.optionSelected.emit(option);
  }
}
