import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from '../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  
})

export class RegionComponent implements OnInit {


  constructor(public sidebarservice: SidebarService,
    private router: Router) { }

toggleSidebar() {
this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
}

getSideBarState() {
return this.sidebarservice.getSidebarState();
}

hideSidebar() {
this.sidebarservice.setSidebarState(true);
}

ngOnInit() {
this.router.events.subscribe((evt) => {
if (!(evt instanceof NavigationEnd)) {
    return;
}
window.scrollTo(0, 0)
});
}

}
