import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

/*
  Generated class for the GitHubService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GitHubService {

  constructor(public http: Http) {}

  getRepos(name:string) {
    return this.http.get(`https://api.github.com/users/${name}/repos`);
  }

  getDetails(repo) {
    let headers = new Headers();
    headers.append('Accept','application/vnd.github.VERSION.html');

    return this.http.get(`${repo.url}/readme`, { headers: headers });
  }
}
