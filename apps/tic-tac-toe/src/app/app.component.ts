import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoardComponent } from '@boardgames-monorepo/gameboard';
import { BreakpointObserverUtil } from '@boardgames-monorepo/utils';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, BoardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BreakpointObserverUtil {
  title = 'tic-tac-toe';

  constructor() {
    super();
  }
}
