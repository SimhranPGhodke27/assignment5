/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-feed.component.html',
  styleUrl: './user-feed.component.css'
})
export class UserFeedComponent {
  posts = [
    { id: 1, content: 'This is the first post. Lorem ipsum dolor sit amet.' },
    { id: 2, content: 'This is the second post. Consectetur adipiscing elit.' },
    // Add more posts here...
  ];
}*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent {
  posts = [
    {
      id: 1,
      name: 'Tony Swift',
      image: 'assets/images/expressive-young-boy-posing-studio.jpg', // Link to image
      category: 'Running',
      time: 'Today, 3:39 PM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      name: 'Paul Brunet',
      image: 'assets/images/baseball2024-09-06 115059.jpg', // Link to image
      category: 'Baseball',
      time: 'Yesterday, 6:49 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      name: 'Anne Hathaway',
      image: 'assets/images/fashionable-young-woman-standing-front-blue-backdrop.jpg', // Link to image
      category: 'Running',
      time: 'Today, 3:50 PM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
}
