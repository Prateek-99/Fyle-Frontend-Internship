import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { FormsModule, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;
  searchedResponse=[];
  public p: number;
  
  
  constructor(private searchservice:SearchService) {
    this.bookSearch = new FormControl('');
  
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),distinctUntilChanged()
      ).
      subscribe((value: string) =>{
        this.search(value)
      });
  }
  search(value){

    this.searchservice.getAuthorlist(value).subscribe((resp:any)=>{
    
    this.searchedResponse= resp.docs
    console.log('searchedResponse',this.searchedResponse)
    
    })
  }
  clearText(){
    this.bookSearch.reset()
}
}
