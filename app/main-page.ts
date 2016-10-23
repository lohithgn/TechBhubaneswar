import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as FileReader from './utils/FileReader';

export function navigatingTo(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = new HelloWorldModel();
   
}