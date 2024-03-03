import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });
  
  loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });
  }

}
