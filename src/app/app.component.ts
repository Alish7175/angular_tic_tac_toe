import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  itemArray: String[] = new Array(9).fill('empty')

  constructor(private toastr: ToastrService){
    
  }
//checking winner of the game
  checkWinner = () => {
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won the game!!`
    }

    else if (
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[3] === this.itemArray[5] &&
      this.itemArray[3] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[3]} won the game!!`
    }

    else if (
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8] &&
      this.itemArray[6] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won the game!!`
    }

    else if (
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won the game!!`
    }

    else if (
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6] &&
      this.itemArray[2] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} won the game!!`
    }

  }

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }

}
