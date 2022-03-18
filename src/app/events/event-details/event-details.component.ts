import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventList: any;

  constructor(private repo: RepositoryService) { }

  ngOnInit(): void {
    this.repo.getEvents().subscribe(
      (response) => {this.eventList = response}
    )
  }

}
