import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  template: `
    <p>
      user-detail works!
    </p>
    <p>You have selected id {{selected}}</p>
    <button (click) = "goPrev()">Prev</button>
    <button (click) = "goNext()">Next</button> <br>
    <button (click) = "goBack()"> Back </button>
  `,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {
  public selected;
  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.activeRoute.snapshot.paramMap.get("id"))
    //this.selected = id

    this.activeRoute.paramMap.subscribe((param: ParamMap)=>{
      let id = parseInt(param.get("id"))
      this.selected = id
    })
  }

  goPrev(){
    let previousId = this.selected-1
    this.route.navigate(['/user', previousId])
  }

  goNext(){
    let nextId = this.selected+1
    this.route.navigate(['/user', nextId])
  }

  goBack(){
    let selectedId = this.selected
    this.route.navigate(['/user', {id: selectedId}])
  }

}
