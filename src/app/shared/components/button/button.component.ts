import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.sass'
})
export class ButtonComponent {
    @Input() placeholder!: string;
    @Input() type!: string;
}
