import { BaseViewModel  } from '../../utils/base-view-model';
import { Speaker  } from '../../models/Speaker';

class SpeakersViewModel extends BaseViewModel<Speaker>{

    constructor() {
        super();
    }

    LoadSpeakers(){
        this.isBusy = true;
        this.service.getSpeakers().then((schedule:Speaker[]) => {
            this.items = schedule;
            this.isBusy = false;
        })
    }
}

export var speakersViewModel = new SpeakersViewModel();