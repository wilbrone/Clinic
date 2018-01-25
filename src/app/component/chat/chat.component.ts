import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  newMessage:Message = new Message();

  constructor() { }

  users = [{username:'Sam'},{username:'Cherrly'},{username:'George'}, {username:'Bob'},{username:'Sandra'}]

  staff = [

      {id:1, username:'Sam'},
      {id:2, username:'Cherrly'},
      {id:3, username:'George'},
      {id:4, username:'Bob'},
      {id:5, username:'Sandra'}
  ]



  messages = [
  		{id: 1, user:'me', receiver:'Sam', comment: 'this comment 1', return_ser:'Sam', return_comment: 'return comment 1'},
  		{id: 2, user:'me', receiver:'Sam', comment: 'this comment 2', return_ser:'Sam', return_comment: 'return comment 2'},
  		{id: 3, user:'me', receiver:'Sam', comment: 'this comment 3', return_ser:'Sam', return_comment: 'return comment 3'},
  		{id: 4, user:'me', receiver:'Sam', comment: 'this comment 4', return_ser:'Sam', return_comment: 'return comment 4'},
      {id: 5, user:'me', receiver:'Cherrly', comment: 'this comment 1', return_ser:'Cherrly', return_comment: 'return comment 5'},
      {id: 6, user:'me', receiver:'Cherrly', comment: 'this comment 2', return_ser:'Cherrly', return_comment: 'return comment 6'},
      {id: 7, user:'me', receiver:'Cherrly', comment: 'this comment 3', return_ser:'Cherrly', return_comment: 'return comment 7'},
      {id: 8, user:'me', receiver:'Cherrly', comment: 'this comment 4', return_ser:'Cherrly', return_comment: 'return comment 8'},


  ];

  ngOnInit() {
  }

  onAddReceiver(username){
    this.newMessage.receiver = username;
  }

  onSendMessage() {
    this.newMessage.id = 5;
    this.newMessage.user = 'random_5';
    this.newMessage.return_ser = 'random_51';
    this.newMessage.return_comment = 'return comment 2';
    console.log(this.newMessage)
    this.messages.push(this.newMessage)
    console.log(this.messages)
  }

}

export class Message{
  id:number;
  user:string;
  receiver:string;
  comment:string;
  return_ser:string;
  return_comment:string;
}
