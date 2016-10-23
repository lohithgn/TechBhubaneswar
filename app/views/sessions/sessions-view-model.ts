import {BaseViewModel} from '../../utils/base-view-model';
import {Session} from '../../models/Session'

class SessionsViewModel extends BaseViewModel<Session>{
    
    constructor() {
        super();
    }
    
    public LoadSessions(){
        this.service.getSessions().then((sessions:Session[]) => {
            this.items = sessions;
        })
    }

}

export var sessionsViewModel = new SessionsViewModel();