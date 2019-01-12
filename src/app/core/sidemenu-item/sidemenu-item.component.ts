import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cdk-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {

    @Input() menu;

    constructor() { }

    ngOnInit() {
    }

}
