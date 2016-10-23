import {Observable} from 'data/observable';
import { SpeakerService  } from '../services/speaker.service'

export class BaseViewModel<T> extends Observable{
    
    protected service:SpeakerService;
    private _items : T[];
    private _isBusy : boolean;

    constructor(){
        super();
        this.service = new SpeakerService();
    }
    
    public get items() : T[] {
        return this._items;
    }
    public set items(v : T[]) {
        this._items = v;
        this.notifyPropertyChange("items",v);
    }
    
    public get isBusy() : boolean {
        return this._isBusy;
    }
    public set isBusy(v : boolean) {
        this._isBusy = v;
        this.notifyPropertyChange("isBusy",v);
    }

}