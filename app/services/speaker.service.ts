import * as FileReader from '../utils/FileReader';
export class SpeakerService{
    private _items : Array<any> = null;
    
    private getData():Promise<Array<any>>{
        return new Promise((resolve, reject) => {
            if(this._items === null)
            {
                FileReader.default.readJSON('data/speakers.json')
                            .then(items => {
                                
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

    private convertData():Promise<Array<any>>{
        return new Promise((resolve, reject) => {
            this.getData().then( items => {
                var schedule = new Array<any>();
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

    getSchedule():Promise<Array<any>>{
        return this.convertData();
    }

    getSessions():Promise<Array<any>>{
        return this.convertData();
    }


}