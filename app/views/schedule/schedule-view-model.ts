import {BaseViewModel} from '../../utils/base-view-model';
import {Session} from '../../models/Session';

class ScheduleViewModel extends BaseViewModel<Session>{
    
    constructor() {
        super();
    }

    LoadSchedule(){
        this.isBusy = true;
        this.service.getSchedule().then((schedule:Session[]) => {
            this.items = schedule;
            this.isBusy = false;
        })
    }
}

export var scheduleViewModel = new ScheduleViewModel();