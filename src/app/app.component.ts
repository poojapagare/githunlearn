import { Component, OnInit } from '@angular/core';


interface Pockemon{
  id: number,
  name: string,
  type:string,
  isCool: boolean,
  isStylish: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title: string;
   num1 :number;
   num2: number;
   isPockeMon : boolean;
   lorem: string="Lorem Ipsum is simply dummy text of the printing and typesetting ";
   imgSrc : string="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";
   fname :string="pooja";
   tempStr :string=''; 
  
   pockemon: Pockemon[] = [
    {
      id: 1,
      name:'Jira',
      type:'Water',
      isCool: true,
      isStylish: true
    },
    {
      id: 2,
      name:'mango',
      type:'Water',
      isCool: false,
      isStylish: false
    },
    {
      id: 3,
      name:'strowberry',
      type:'Water',
      isCool: true,
      isStylish :true
    }
   ];


constructor(){
    this.title="Pooja Pagare";
    this.num1 = 10;
    this.num2 = 20;
    this.isPockeMon = true;
  }
  ngOnInit(): void {
    
  }
  onClickTemplate(value :any): void{
    console.log("Enter String is " + value);
  }
}
