import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { SendmsgComponent } from './sendmsg/sendmsg.component';
import { ReadmsgComponent } from './readmsg/readmsg.component';
import { ReadtopicComponent } from './readtopic/readtopic.component';

const routes: Routes = [
{ path: '', component: WelcomeComponent},
{ path: 'topic', component: ReadComponent},
{ path: 'chatroom', component: ReadmsgComponent },
{ path: 'chattopic', component: ReadtopicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
