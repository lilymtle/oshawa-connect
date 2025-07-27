/* --- styling --- */
import "./Map.scss";
import "leaflet/dist/leaflet.css";

/* --- leaflet imports -- */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

interface MapProps {
    latLon: [number, number];
    name: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;
}

export default function Map({ latLon, name, street, city, province, postalCode }: MapProps) {
    // const currentPosition: [number, number] = [43.6532, -79.3832]

    return (
        <MapContainer center={latLon} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLon}>
                <Popup>
                    <p className="location__name">{name}</p>
                    <span className="location__address">
                        <p className="location__street">{street}</p>
                        <span className="location__wrapper">
                            <p className="location__city">{city}</p>
                            <p className="location__province">{province}</p>
                        </span>
                        <p className="location__postal-code">{postalCode}</p>
                    </span>
                </Popup>
            </Marker>
    </MapContainer>
    )
}