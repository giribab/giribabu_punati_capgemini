import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit{
  readingList: ReadingListItem[];

  constructor(private readonly store: Store) {}
  ngOnInit(){
    this.store.select(getReadingList).subscribe((item)=>{
      this.readingList = item;
    })
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }
  finished(book){
    const item:ReadingListItem = {
      'bookId':book.bookId,
      'finished' : true,
      'finishedDate': (new Date()).toISOString(),
      'title': book.title,
      'authors': book.authors,
      'description': book.description,
      'publisher': book?.publisher,
      'publishedDate': book?.publishedDate,
      'coverUrl': book?.coverUrl
    };
    this.store.dispatch(UpdateReadingList({ item }));
    this.readingList.map((x:any,i:number)=>{
      if(x.bookId === item.bookId){
        this.readingList[i] = item;
      }
    })
  }

}
