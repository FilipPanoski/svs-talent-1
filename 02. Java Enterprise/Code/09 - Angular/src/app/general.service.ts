import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GeneralService {


  constructor(private http:Http) { }

  url:string = "https://jsonplaceholder.typicode.com/";

  getUsers()
  { //"https://jsonplaceholder.typicode.com/users";
      return this.http.get(this.url+'users')
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  getUserById(id:number)
  {
      this.http.get(this.url+'users/'+id)
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  getPosts()
  {
      return this.http.get(this.url+'posts')
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  getPostById(id:number)
  {
      return this.http.get(this.url+'posts/'+id)
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  getPostComments(id:number)
  {
      return this.http.get(this.url+'posts/'+id+'/comments')
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  postNewPost(userId:number, title:string, body:string)
  {
      return this.http.post(this.url+'posts', {'userId': userId, 'title':title, 'body':body})
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  putPost(postId:number, title:string, body:string)
  {
      return this.http.put(this.url+'posts', {'postId':postId,'title':title, 'body':body})
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }

  deletePost(postId:number)
  {
      return this.http.delete(this.url+'posts/'+postId)
      .map((res:Response) => res.json())
      .catch((err:Response) => {
          return Observable.throw(err);
      });
  }
}
