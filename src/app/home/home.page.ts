import { Filesystem, Directory, Encoding, GetUriOptions, StatResult, FileInfo, ReaddirResult, ReadFileResult } from '@capacitor/filesystem';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraResultType, GalleryImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photo:any;

  position:number=0;

  constructor(private loader:LoadingController,) {}

  ngOnInit(){
      this.loadFiles();
  }

  async next(){
    if(this.position>100)
      return;
    this.position++;
    this.photo = await this.getFile();
  }
  async back(){
    if(this.position<=1)
      return;
    this.position--;
    this.photo = await this.getFile();
  }

  async poolNext(){
    if(this.position>100)
      return;
    this.position++;
    this.photo = this.photos[this.position];
  }
  async poolBack(){
    if(this.position<=1)
      return;
    this.position--;
    this.photo = this.photos[this.position];
  }

  photos:string[]=[];
  private async loadFiles(){
    for(let i of [1,2,3,4,5,6,7,8,9,10]) {
      let result= await Filesystem.readFile({
        path: `ebookfile/${i}.txt`,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });
      this.photos.push(result.data);
    }
  }

  private async getFile(){
    let result= await Filesystem.readFile({
      path: `ebookfile/${this.position}.txt`,
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    });
    return result.data;
  }

}
