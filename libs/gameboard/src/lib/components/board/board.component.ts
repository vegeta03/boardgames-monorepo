import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../../services';

@Component({
  selector: 'lib-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  rows = 3;
  columns = 3;

  boardService = Inject(BoardService);

  ngOnInit(): void {
    this.boardService;
  }
}
