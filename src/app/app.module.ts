import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { MenuNavComponent } from '../app/shared/components/menu-nav/menu-nav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MusicComponent } from './components/music/music.component';
import { ShowsComponent } from './components/shows/shows.component';
import { VideosComponent } from './components/videos/videos.component';
import { ListMusicComponent } from "./components/music/list-music/list-music.component";
import { CreateMusicComponent } from "./components/music/create-music/create-music.component";
import { EditMusicComponent } from './components/music/edit-music/edit-music.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ModalComponent } from './shared/components/modal/modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    MusicComponent,
    ShowsComponent,
    VideosComponent,
    ListMusicComponent,
    ModalComponent,
    CreateMusicComponent,
    EditMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
