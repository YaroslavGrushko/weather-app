import { setLatitude, setLongitude } from '../features/geolocationSlice'
import type { AppDispatch } from '../state/store'

export const getGeolocation = (dispatch: AppDispatch) => {

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch(setLatitude(latitude));
        dispatch(setLongitude(longitude));

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

  
    }, function(error) {
      console.error('Error getting geolocation:', error);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}