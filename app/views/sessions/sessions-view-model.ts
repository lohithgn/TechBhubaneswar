import { Observable } from 'data/observable';
import { SpeakerService  } from '../../services/speaker.service'

class SessionsViewModel extends Observable{

    private _service:SpeakerService;
    
    private _items : Array<any>;
    public get items() : Array<any> {
        return this._items;
    }
    public set items(v : Array<any>) {
        this._items = v;
        this.notifyPropertyChange("items",v);
    }

    constructor() {
        super();
        this._service = new SpeakerService();
    }
    
    public LoadSessions(){
        this._service.getSessions().then((sessions:Array<any>) => {
            this.items = sessions;
        })
    }

}

export var sessionsViewModel = new SessionsViewModel();