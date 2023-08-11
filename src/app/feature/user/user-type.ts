import { CreatedTrips } from "./profile/profile-types/created-trips";
import { SavedDestinations } from "./profile/profile-types/saved-destinations";


export interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    token: string,
    createdTrips: CreatedTrips[],
    savedDestinations: SavedDestinations[]
}