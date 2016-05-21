import {DetailsPage} from "../details-page/details-page";
import {GitHubService} from "../../providers/git-hub-service/git-hub-service";
import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username:string;

  constructor(private _gitHubService: GitHubService,
              private _navController: NavController) {
  }

  goToDetails(repo:any){
    this._navController.push(DetailsPage, { repo: repo });
  }

  getRepos() {
    this._gitHubService.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.log(err),
      () => console.log('getRepos completed')
    );
  }

}
