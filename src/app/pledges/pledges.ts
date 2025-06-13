import {Component, OnInit} from '@angular/core';
import {MemberService} from '../services/member.service';
import {MemberTO} from '../models/MemberTO';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-pledges',
  imports: [
    JsonPipe
  ],
  templateUrl: './pledges.html',
  styleUrl: './pledges.css'
})
export class Pledges implements OnInit {

  members: MemberTO[] = [];

  constructor(private memberService: MemberService) {

  }

  ngOnInit(): void {
    this.memberService.list().subscribe(data => {
      alert(data);
      this.members = data;
    })
  }
}
