import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoardComponent } from '@boardgames-monorepo/gameboard';

@Component({
  standalone: true,
  imports: [RouterModule, BoardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tic-tac-toe';
}
