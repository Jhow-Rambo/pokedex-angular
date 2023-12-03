import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.sass',
})
export class InputComponent {
    @Input() type!: string;
    @Input() placeholder!: string;
    @Input() label?: string;
    @Input() value: any;
    @Input() error: string = '';
    @Output() valueChange = new EventEmitter<string>();

    onInputChange(event: Event): void {
        const inputValue = (event.target as HTMLInputElement).value;
        this.valueChange.emit(inputValue);
    }
}
