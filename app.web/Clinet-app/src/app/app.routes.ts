import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';

export const routes: Routes = [

    {path: '', component: HomeComponent },
    {path: 'addPost', component: AddPostComponent}

];
