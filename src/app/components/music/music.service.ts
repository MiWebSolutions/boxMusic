import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";
import { Music } from 'src/app/shared/models/music.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private filePath;
  private downloadURL : Observable<string>;

  constructor(private afs:AngularFirestore,
              private storage:AngularFireStorage) { }

  public getAllMusic() : Observable<Music[]>
  {
      return this.afs.collection('musics').snapshotChanges()
                  .pipe(
                      map(res => 
                          res.map(el => {
                              const data = el.payload.doc.data() as Music;
                              const id = el.payload.doc.id;
                              return {id, ...data}
                          })
                      )
                  )
  }

  public getSingleMusic(id:Music) : Observable<Music>
  {
    return this.afs.doc<Music>(`musics/${id}`).valueChanges();
  }

  public createMusic(music:Music)
  {
      const musicObj = {
          name : music.name,
          album : music.album,
          image : this.downloadURL,
          spotifyUrl : music.spotifyUrl,
          deezerUrl : music.deezerUrl,
          appleMusicUrl : music.appleMusicUrl,
          googlePlayUrl : music.googlePlayUrl,
          amazonMusicUrl : music.amazonMusicUrl,
          youtubeUrl : music.youtubeUrl,
          soundCloud : music.soundCloudUrl
      };

      if(music.id)
      {
        return this.afs.collection<Music>('musics').doc(music.id).update(musicObj);
      }

      return this.afs.collection<Music>('musics').add(musicObj);
  }

  public editMusicById(music:Music, newImage?:File)
  {
    if(newImage)
    {
      this.uploadImage(music, newImage);
    }
    else
    {
      return this.afs.collection<Music>('musics').doc(music.id).update(music);
    }
  }

  public setMusic(music:Music, imageFile:File)
  {
    this.uploadImage(music, imageFile);
  }

  private uploadImage(music:Music, image:File)
  {
    this.filePath = `musics-images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(imageUrl => {
              this.downloadURL = imageUrl;

              this.createMusic(music);
            })
          })
        ).subscribe();
  }

  public deleteMusicById(music: Music)
  {
    return this.afs.collection('musics').doc(music.id).delete();
  }
}