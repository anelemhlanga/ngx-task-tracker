import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  public action: string = 'Click';
  @Input() text: string;
  @Input() color: string;
  @Output() buttonClick = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
