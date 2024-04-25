import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { BoardService } from '../../services';

@Component({
  selector: 'lib-board',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  rows = 3;
  columns = 3;

  boardService = Inject(BoardService);

  ngOnInit(): void {
    this.boardService.createBoard(this.rows, this.columns);
  }
}
