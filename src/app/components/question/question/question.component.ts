import { QuestionService } from './../../../services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name:String;
  public points:number;
  public currentQuestion:number;
  public questions:any=[];
  public counter:number=30;
  public quizComplete:boolean=false;
  public correctAnswer:number=0;

  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('name');
    this.points=0;
    this.currentQuestion=0;
    this.questions= this.questionService.getQuestion().subscribe((qst)=>{
      this.questions=qst.questions;
    })

    
  }
  answer(currentQuestion:number,option:any){
    console.log(currentQuestion,option);

    if(currentQuestion == this.questions.length){
      this.quizComplete=true;
    }

    if(option.correct){
      this.points +=5;
      this.correctAnswer++;


    }
    this.currentQuestion++;
  }

}
