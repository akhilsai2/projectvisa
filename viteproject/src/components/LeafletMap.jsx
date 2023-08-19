import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { Marker } from 'react-leaflet/Marker'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
  const position = [
    {
      city: "kphb",
      admin: "Hyderabad",
      country: "India",
      population_proper: "12691836",
      iso2: "IN",
      capital: "admin",
      lat: "17.4834",
      lng: "78.3871",
      population: "18978000",
    },
    {
      city: "Mumbai",
      admin: "Maharashtra",
      country: "India",
      population_proper: "12691836",
      iso2: "IN",
      capital: "admin",
      lat: "18.987807",
      lng: "72.836447",
      population: "18978000",
    },
    {
      city: "Delhi",
      admin: "Delhi",
      country: "India",
      population_proper: "7633213",
      iso2: "IN",
      capital: "admin",
      lat: "28.651952",
      lng: "77.231495",
      population: "15926000",
    },
    {
      city: "Kolkata",
      admin: "West Bengal",
      country: "India",
      population_proper: "4631392",
      iso2: "IN",
      capital: "admin",
      lat: "22.562627",
      lng: "88.363044",
      population: "14787000",
    },
    {
      city: "Chennai",
      admin: "Tamil Nadu ",
      country: "India",
      population_proper: "4328063",
      iso2: "IN",
      capital: "admin",
      lat: "13.084622",
      lng: "80.248357",
      population: "7163000",
    },
  ];

  return (
    <div style={{ height: "500px" }} className="mb-5">
      <MapContainer
        center={{ lat: 13.084622, lng: 80.248357 }}
        zoom={5}
        style={{ height: "100%" }}
        // scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
        />
        {position.map((city, idx) => (
          <Marker position={[city.lat, city.lng]} icon={DefaultIcon} key={idx}>
            <Popup>
              <b>
                {city.city}, {city.country}
              </b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
