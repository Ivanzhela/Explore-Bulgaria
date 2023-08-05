import { Place } from "./place";

export interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    token: string,
    createdTrips: any,
    savedDestinations: any
}