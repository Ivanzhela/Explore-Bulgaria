import { Place } from "src/app/types/place";

export interface Destination {
    name: string;
    geometry: {
        lat: number,
        lng: number
    }
    content: string;
    addres: string;
    phone: string;
    opening_hours: {
        open_now: boolean,
        weekday_text: []
    },
    photos: string[],
    rating: number,
    nearbyPlace: Place[],
    restaurants: Place[] | []
}

export interface PlaceDetails {
    addres: string;
    phone: string;
    opening_hours: {
        open_now: boolean,
        weekday_text: string[]
    },
}