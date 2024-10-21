import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserInfoComponent } from "../user-info/user-info.component";
import { AddsComponent } from "../adds/adds.component";
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, UserInfoComponent, AddsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
'/src/styles.scss'
  ]
})
export class HomeComponent implements OnInit {
 
  posts: any[] = []; // Define posts array
  PostlikesCount: number = 0
  currentUserId: string = "1"; // Example current user ID
  likedPosts: Set<number> = new Set();

  constructor(private postService: PostService) {} // Inject the PostService

  ngOnInit(): void {
    this.loadPosts(); // Load posts on component initialization
    
  }
  toggleLike(post: any) {
    post.likesCount = post.likesCount === 0 ? 1 : 0; // Toggle likes for the specific post
    this.PostlikesCount = post.likesCount; // Update postLikeCount to reflect the current post's likesCount
  }

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data; // Store the fetched data in posts array
        if (this.posts.length > 0) {
          this.PostlikesCount = this.posts[0].likesCount; // Example: use the first post's likesCount
        }
        console.log('Posts loaded successfully', this.posts); // Log success
      },
      error: (err) => {
        console.error('Error loading posts', err); // Log errors
      }
    });
  }

  navigateToAddPost(){
    window.location.href = '/addPost';  
  }
}
