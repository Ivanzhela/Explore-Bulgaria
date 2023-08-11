export interface Destination {
  name: string;
  geometry: {
    lat: number;
    lng: number;
  };
  content: string;
  address: string;
  phone: string;
  opening_hours: {
    open_now: boolean;
    weekday_text: [];
  };
  photos: string[];
  rating: number;
}

export interface PlaceDetails {
  address: string;
  phone: string;
  opening_hours: {
    open_now: boolean;
    weekday_text: string[];
  };
}
