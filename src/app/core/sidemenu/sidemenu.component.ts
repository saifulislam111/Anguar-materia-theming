import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    public menus = menus;

    constructor() { }

    ngOnInit() {
    }

}
