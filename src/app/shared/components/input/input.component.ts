import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.sass'
})
export class InputComponent {
    @Input() type!: string;
    @Input() placeholder!: string;
    @Input() label?: string;
}
