import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Reservation {
    constructor (
        public numberOfTeammates : number,
        public minAgeTeammate : number,
        public choosenDate : Date,
        public choosenTime : string,
        public phone : string,
        public name : string
    ) {}
}