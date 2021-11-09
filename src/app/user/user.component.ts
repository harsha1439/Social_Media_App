import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users = []
  public err;
  test  = new Date(2009, 2, 12)
  constructor(public _userS: AlbumService, private route: Router) { }

  ngOnInit(): void {
    this._userS.getUser().subscribe(data =>this.users = data,
      error => this.err = error)
  }

  onselect(item){
      this.route.navigate(['user', item.id])
  }

}
