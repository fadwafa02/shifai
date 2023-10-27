import { Component, Input } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input()
  name: Tab1Page = new Tab1Page;

}
