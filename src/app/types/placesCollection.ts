import { Place } from "./place";

export interface PlacesCollection {
    next_page_token: string,
    results: Place[] | [],
}