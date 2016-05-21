import {GitHubService} from "../../providers/git-hub-service/git-hub-service";
import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the DetailsPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/details-page/details-page.html',
  providers: [GitHubService]
})
export class DetailsPage {
  public readme = "";
  public repo;

  constructor(private nav: NavController,
              private github: GitHubService,
              private navParams: NavParams) {

    this.repo = navParams.get('repo');

    this.github.getDetails(this.repo).subscribe (
      data => this.readme = data.text(),
      err => {
        if (err.status == 404) {
            this.readme = 'This repo does not have a README. :('
        } else {
          console.log(err);
        }
      },
      () => console.log('getDetails completed')
    );

  }
}
