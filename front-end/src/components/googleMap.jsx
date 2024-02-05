import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MyGoogleMap = () => {
  const containerStyle = {
    height: '52rem',
  };

  const center = {
    lat: 45.4814,
    lng: 12.2346,
  };

  return (
    <LoadScript
    googleMapsApiKey="AIzaSyDTsqlXjtAUDPwtuHgnRzsZa7Y8eaDy5Nk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default MyGoogleMap;
