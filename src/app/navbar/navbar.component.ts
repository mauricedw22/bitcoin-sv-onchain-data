import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loading: string = "Loading data... Please wait.";

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {

      this.loading = "Data load complete!"

    }, 35000)
  }

}
