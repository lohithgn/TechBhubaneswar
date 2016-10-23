import pages = require("ui/page");
import { View } from "ui/core/view";
import * as Frame from 'ui/frame';

export function onScheduleTap() {
    Frame.topmost().navigate("views/schedule/schedule-page");
}

export function onSessionsTap() {
    Frame.topmost().navigate("views/sessions/sessions-page");
}

export function onSpeakersTap() {
    Frame.topmost().navigate("views/speakers/speakers-page");
}