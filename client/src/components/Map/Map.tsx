/* --- styling --- */
import "./Map.scss";
import "leaflet/dist/leaflet.css";

/* --- leaflet imports -- */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const Map = () => {
    const currentPosition: [number, number] = [51.505, -0.09]

    return (
        <MapContainer center={currentPosition} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
    </MapContainer>
    )
}