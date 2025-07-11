import {Component, OnInit} from '@angular/core';
import {MemberService} from '../services/member.service';
import {MemberTO} from '../models/MemberTO';
import {JsonPipe, NgForOf} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-pledges',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './pledges.html',
  styleUrl: './pledges.css'
})
export class Pledges implements OnInit {

  members: MemberTO[] = [{"id": "90989980",
    "firstName": "juriel",
    "middleName": "juriel",
    "lastName": "juriel",
    "nickName": "juriel",
    "sb": "juriel",
    "pb": "juriel",
    "gender": "juriel",
    "ministry": "juriel",
    "zone": "juriel",
    "bibleTalk": "juriel",
    "designation": "juriel",
    "status": "juriel",

  }];

  constructor(private memberService: MemberService) {

  }

  ngOnInit(): void {
    // this.memberService.list().subscribe(data => {
    //   alert(data);
    //   this.members = data;
    // })
  }

  selectChangeHandler($event: Event) {

  }
}
