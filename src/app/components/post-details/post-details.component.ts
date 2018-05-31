import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../domain/ipost';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  idPost: number;
  post: IPost;
  constructor(private _route: ActivatedRoute, private _service: PostsService) { }

  ngOnInit() {
    // Using a snapshot
    // this.idPost = +this._route.snapshot.params['id'];
    // Using an observable
    this._route.params.subscribe(pam => this.idPost = pam['id']);
    this._service.getPostById(this.idPost).subscribe(res => this.post = res);
  }

}
