import { Component } from '@angular/core';
import { title } from 'process';

let voted = false;
const btnCollection = document.getElementsByClassName('btn');

const voteHandler = (event: any) => {
  event.target.parentElement.firstChild.innerText = 'Chosen!';
   // note [] is shaorthand for Array.protoype
  [].forEach.call(btnCollection, (el: any) => {
   (event.target.name === el.name) ? el.innerText = 'Unvote' : el.disabled = true;
  });
};

const unvoteHandler = (event: any) => {
  const parent = event.target.parentElement;
  const cardTitle = parent.firstChild.dataset.cardTitle;
  parent.firstChild.innerText = cardTitle;
  event.target.innerText = 'Vote';
  // note [] is shaorthand for Array.protoype
  [].forEach.call(btnCollection, (el: any) => {
    el.disabled = false;
  });
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'moviefavs';
  handleClick(event: any) {
    voted ? unvoteHandler(event) : voteHandler(event);
    voted = !voted;
  }
}
