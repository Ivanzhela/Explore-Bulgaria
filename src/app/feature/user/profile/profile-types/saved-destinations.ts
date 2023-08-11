export interface SavedDestinations {
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
}
