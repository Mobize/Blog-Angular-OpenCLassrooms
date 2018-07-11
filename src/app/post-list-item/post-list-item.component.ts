import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  lastUpdate = new Date();

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveItsNumber: number;
  @Input() createdAtDate: Date;

  // Pour afficher les classes Bootstrap en fonction du nombre de likes
   loveItsPositive() {
     if (this.loveItsNumber > 0) {
        return this;
     } else {
        return false;
     }
   }

  //  Augmente le nombre de like
    increaseLoveIts() {
     this.loveItsNumber ++;
   }

   //  Diminue le nombre de like
   decreaseLoveIts() {
     this.loveItsNumber --;
   }

  constructor() { }

  ngOnInit() {
  }
}


