import { EventData } from 'data/observable';
import { ItemEventData } from 'ui/list-view';
import { Page } from 'ui/page';
import * as Frame from 'ui/frame';
import { speakersViewModel } from './speakers-view-model';

export function onLoaded(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = speakersViewModel;
  speakersViewModel.LoadSpeakers();
}

export function onItemTap(args:ItemEventData){
    var speaker = speakersViewModel.items[args.index];
    Frame.topmost().navigate({
      moduleName:'views/speakers/details',
      bindingContext:speaker
    })
}