import * as FileReader from '../utils/FileReader';
import { Speaker } from '../models/Speaker';
import { Session } from '../models/Session';

export class SpeakerService{
    private _items : Speaker[] = null;
    
    private getData():Promise<Speaker[]>{
        return new Promise((resolve, reject) => {
            if(this._items === null)
            {
                FileReader.default.readJSON('data/speakers.json')
                            .then( (items:Speaker[]) => {
                                this._items = items.sort( (a,b) => {
                                    if(a.name < b.name) return -1;
                                    if(a.name > b.name) return 1;
                                    return 0;
                                });
                                resolve(items)
                            })
                            .catch(err => reject(err));
            }
            else{
                resolve(this._items);
            }
        })
    }

    getSpeakers():Promise<Array<any>>{
        return this.getData();
    }

    private convertData():Promise<Session[]>{
        return new Promise((resolve, reject) => {
            this.getData().then( items => {
                var schedule = new Array<Session>();
                items.forEach(item => {
                    var sessions = item.sessions;
                    sessions.forEach(session => {
                        session.speaker = item.name; 
                        schedule.push(session) 
                    })
                })

                schedule = schedule.sort( (a,b) => {
                    return new Date(a.startTime).valueOf() - new Date(b.startTime).valueOf();
                });
                resolve(schedule);
            });
        });
    }

    getSchedule():Promise<Session[]>{
        return this.convertData();
    }

    getSessions():Promise<Session[]>{
        return this.convertData();
    }


}