import { Observable } from 'data/observable';
import { SpeakerService  } from '../../services/speaker.service'

class ScheduleViewModel extends Observable{

    private _service:SpeakerService;

    
    private _items : Array<any>;
    public get items() : Array<any> {
        return this._items;
    }
    public set items(v : Array<any>) {
        this._items = v;
        this.notifyPropertyChange("items",v);
    }
    
    
    private _isBusy : boolean;
    public get isBusy() : boolean {
        return this._isBusy;
    }
    public set isBusy(v : boolean) {
        this._isBusy = v;
        this.notifyPropertyChange("isBusy",v);
    }
    

    constructor() {
        super();
        this._service = new SpeakerService();
    }

    LoadSchedule(){
        console.log('getting data');
        this.isBusy = true;
        this._service.getSchedule().then((schedule:Array<any>) => {
            this.items = schedule;
            this.isBusy = false;
        })
    }
}

export var scheduleViewModel = new ScheduleViewModel();