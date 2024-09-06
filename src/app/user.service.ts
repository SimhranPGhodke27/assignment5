import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getPosts() {
    return [
      {
        author: 'Paul Brunet',
        activity: 'Running',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        author: 'Paul Brunet',
        activity: 'Baseball',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ];
  }

  getNotifications() {
    return [
      {
        message: 'John commented on your post',
        time: '15 min ago'
      },
      {
        message: 'Anne commented on your post',
        time: 'Yesterday'
      }
    ];
  }
}

