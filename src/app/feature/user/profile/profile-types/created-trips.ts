import { Place } from 'src/app/types/place';

export interface CreatedTrips {
  id: string;
  name: string;
  content: string;
  address: string;
  geomentry: {
    lat: number;
    lng: number;
  };
  opening_hours: {
    open_now: string;
    weekday_text: string[];
  };
  photos: string[];
  rating: number | string;
  startDate: number;
  endDate: number;
  placeToVisit: Place[];
}
