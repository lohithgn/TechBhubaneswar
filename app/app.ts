import * as app from 'application';

import * as FrameMod from 'ui/frame';
FrameMod.Frame.defaultTransition = { name: "slide" };

let dateConverter = function(value){
    let time = new Date(value);
    return `${time.getHours()}:${time.getMinutes()}`;
}

app.resources["dateConverter"] = dateConverter;

app.start({ moduleName: 'views/home/home-page' });

