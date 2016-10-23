import {Observable} from 'data/observable';
import { SelectedIndexChangedEventData } from 'ui/segmented-bar';
import { ItemEventData } from 'ui/list-view';
import { SpeakerService  } from './services/speaker.service';
import * as Frame from 'ui/frame';
export class HelloWorldModel extends Observable {

  private readonly MOBILE_INDEX = 0;
  private readonly CLOUD_INDEX = 1;
  private readonly TESTING_INDEX = 2;
  private readonly GENERAL_INDEX = 3;

  private readonly MOBILE_TOPIC_NAME = "Mobile & Web";
  private readonly CLOUD_TOPIC_NAME = "Opensource & Cloud";
  private readonly TESTING_TOPIC_NAME = "Software Testing";
  private readonly GENERAL_INDEX_NAME = "General";

  private _service: SpeakerService;
  private _selectedIndex:number = 0;
  private _pristineItems:Array<any> = null;
  private _items:Array<any> = null;

  constructor() {
    super();
    this._service = new SpeakerService();
    this._service.getSpeakers().then(items => this._pristineItems = items);
  }

  get selectedIndex(): number {
    return this._selectedIndex;
  }
   
  set selectedIndex(value: number) {
    if (this._selectedIndex !== value) {
    this._selectedIndex = value;
    this.notifyPropertyChange('selectedIndex', value)
    }
  }

  get Items(): Array<any> {
    return this._items;
  }
   
  set Items(value: Array<any>) {
    if (this._items !== value) {
    this._items = value;
    this.notifyPropertyChange('Items', value)
    }
  }

  public onTrackChange(args:SelectedIndexChangedEventData){
    let filterText = "";
    switch(args.newIndex){
    case this.MOBILE_INDEX:
      filterText = this.MOBILE_TOPIC_NAME;
      break;
    case this.CLOUD_INDEX:
      filterText = this.CLOUD_TOPIC_NAME;
      break;  
    case this.TESTING_INDEX:
      filterText = this.TESTING_TOPIC_NAME;
      break;
    case this.GENERAL_INDEX:
      filterText = this.GENERAL_INDEX_NAME;
      break;
    default:
      filterText = this.MOBILE_TOPIC_NAME;
      break;
    }
    var data = this._pristineItems.filter(item => {
      return item.sessions.some(elem => elem.track === filterText);
    })
    this.Items = data;
    console.log(this.Items);
  }

  onItemTap(args:ItemEventData){
    var speaker = this.Items[args.index];
    Frame.topmost().navigate({
      moduleName:'details',
      bindingContext:speaker
    }) 
  }
}