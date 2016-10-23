import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as ViewModel from './schedule-view-model';

export function onNavigatedTo(args: EventData) {
  
}

export function onLoaded(args: EventData){
  let page = <Page>args.object;
  page.bindingContext = ViewModel.scheduleViewModel;
  ViewModel.scheduleViewModel.LoadSchedule();
}