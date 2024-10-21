import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from "../user-info/user-info.component";
import { AddsComponent } from "../adds/adds.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule, UserInfoComponent, AddsComponent, NavbarComponent],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {
  onFileChange(event: any) {
  }

  onSubmit() {
  }
}
