import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";
import { Music } from 'src/app/shared/models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

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

  getSingleMusic(id:Music) : Observable<Music>
  {
    return this.afs.doc<Music>(`musics/${id}`).valueChanges();
  }

  public createMusic(music:Music)
  {
      const musicObj = {
          name : music.name,
          album : music.album,
        //   image : music.image,
        //   spotifyUrl : music.spotifyUrl,
        //   deezerUrl : music.deezerUrl,
        //   appleMusicUrl : music.appleMusicUrl,
        //   googlePlayUrl : music.googlePlayUrl,
        //   amazonMusicUrl : music.amazonMusicUrl
      };

      if(music.id)
      {
        return this.afs.collection<Music>('musics').doc(music.id).update(musicObj);
      }

      return this.afs.collection<Music>('musics').add(musicObj);
  }
}