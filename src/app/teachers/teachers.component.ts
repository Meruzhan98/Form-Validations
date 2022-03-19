import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {ReplaySubject, Subject} from "rxjs";
import {MatSelect} from "@angular/material/select";
import {take, takeUntil} from "rxjs/operators";


interface Region{
  name: string;
}

interface City{
  name: string;
}

interface School{
  name: string;
}

interface Website{
  name: string;
}




@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, AfterViewInit {
  nameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$')]);
  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);


  regionControl = new FormControl('', Validators.required);

  regions: Region[] = [
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'},
    {name: 'Lorem Ipsum'}
  ];

  cityControl = new FormControl('', Validators.required);

  cities: City[] = [
    {name: 'City 1'},
    {name: 'City 2'},
    {name: 'City 3'},
    {name: 'City 4'},
    {name: 'City 5'},
    {name: 'City 6'},
    {name: 'City 7'},
    {name: 'City 8'}
  ];



  schoolControl = new FormControl('', Validators.required);

  schools: School[] = [
    {name: 'School 1'},
    {name: 'School 2'},
    {name: 'School 3'},
    {name: 'School 4'},
    {name: 'School 5'},
    {name: 'School 6'},
    {name: 'School 7'},
    {name: 'School 8'}
  ];

  gradeControl = new FormControl('', Validators.required);




  hide: boolean = true;

  constructor() { }

  toppings = new FormControl('', Validators.required);



  toppingList1: string[] = ['1', '2', '3', '4', '5', '6'];

  toppingList2: string[] = ['1', '2', '3', '4', '5', '6'];

  ngOnInit(): void {
    this.websiteMultiCtrl.setValue(this.websites[1]);
    this.filteredWebsitesMulti.next(this.websites.slice());

    this.websiteMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterWebsiteMulti();
      });
  }



  subjectControl = new FormControl('', Validators.required);

  protected websites: Website[] = [
    { name: 'Subject 1'},
    { name: 'Subject 2'},
    { name: 'Subject 3'},
    { name: 'Subject 4'},
    { name: 'Subject 5'},
    { name: 'Subject 6'},
    { name: 'Subject 7'},
    { name: 'Subject 8'}
  ];



  public websiteMultiCtrl: FormControl = new FormControl();
  public websiteMultiFilterCtrl: FormControl = new FormControl();
  public filteredWebsitesMulti: ReplaySubject<any> = new ReplaySubject(1);


  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect | undefined;

  protected _onDestroy = new Subject();






  ngAfterViewInit() {
    this.setInitialValue();
  }


  protected setInitialValue() {
    this.filteredWebsitesMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // @ts-ignore
        this.multiSelect.compareWith = (a: Website, b: Website) => a && b && a.id === b.id;
      });
  }


  protected filterWebsiteMulti() {
    if (!this.websites) {
      return;
    }

    let search = this.websiteMultiFilterCtrl.value;
    if (!search) {
      this.filteredWebsitesMulti.next(this.websites.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredWebsitesMulti.next(
      this.websites.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  signInButton() {
    console.log(this.emailFormControl.value);
  }

}








