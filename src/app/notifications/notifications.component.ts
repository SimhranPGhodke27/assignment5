/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    // Add more notifications here...
  ];
}*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    { id: 1, message: 'John commented It was really helpful on your post "5 ways to succeed fully..." in Running', time: '15 Min Before' },
    { id: 2, message: 'John commented It was really helpful on your post "5 ways to succeed fully..." in Running', time: '1 Hour Before' },
    { id: 3, message: 'John commented It was really helpful on your post "5 ways to succeed fully..." in Running', time: 'Yesterday' },
    { id: 4, message: 'John commented It was really helpful on your post "5 ways to succeed fully..." in Running', time: '2 Days Before' }
  ];

  messages = [
    { id: 1, name: 'Remy Daniel', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
    { id: 2, name: 'Paul Brunet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' }
  ];
}
