import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 35.71270361415887,
  lng: 139.76193535355418,
};

const houselocation = {
  lat: 35.71117843716759,
  lng: 139.76046234874335,
};

const circleOptions = {
  strokeColor: "black",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#4FD115",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 1,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBu4FcMMTE2ddO5XZy0nbEXnKUQ6sLoUMk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={houselocation} />
        <Circle center={center} radius={400} options={circleOptions} />
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
