import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  public photoData = []
  public err;
  constructor(private _photo: AlbumService) { }

  ngOnInit(): void {
    this._photo.getAlbum().subscribe(data => this.photoData = data,   error => this.err = error)
  }


}
