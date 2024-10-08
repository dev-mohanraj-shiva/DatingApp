import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members/members.component';
import { MemberdetailComponent } from './members/memberdetail/memberdetail.component';
import { ListComponent } from './lists/list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { guardGuard } from './_guards/guard.guard';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path:"",
    canActivate:[guardGuard],
    children:
    [
      {path:"members",component:MembersComponent},
      {path:"members/:id",component:MemberdetailComponent},
      {path:"lists",component:ListComponent},
      {path:"messages",component:MessagesComponent},
    ]
  },
  {path:"**",component:HomeComponent},
];
