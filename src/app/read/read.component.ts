import { Component, OnInit } from '@angular/core';
import { Topic } from '../classes/topic';
import { TopicService } from '../services/topic.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  topic: Topic;
  topics: any;
titre: string;
description: string;
cle: string;
  constructor(private topicService: TopicService) { }

  ngOnInit() {
    
    this.topicService.read_Topics().subscribe(data => {

      this.topics = data.map(e => {
        return {
         id: e.payload.doc.id,

         titre: e.payload.doc.data()['titre'],
         description: e.payload.doc.data()['description'],
         cle: e.payload.doc.data()['cle'],

         //prix: e.payload.doc.data().description,

       // photo: e.payload.doc.data().cle,

        };
      });
      console.log(this.topics);

    });
  }

}
