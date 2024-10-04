import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevAComponent } from "./dev-a/dev-a.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gitFirst';
}
