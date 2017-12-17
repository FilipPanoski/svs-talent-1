import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApproutingModule } from './approuting.module';

import { AppComponent } from './app.component';
import { GeneralService } from './general.service';
import { NavigationComponent } from './navigation/navigation.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { DefaultComponent } from './default/default.component';
import { SingleComponent } from './posts/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsComponent,
    UsersComponent,
    CommentsComponent,
    DefaultComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApproutingModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
