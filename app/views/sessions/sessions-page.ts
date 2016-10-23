import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { sessionsViewModel } from './sessions-view-model';

export function onLoaded(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = sessionsViewModel;
  sessionsViewModel.LoadSessions();
}