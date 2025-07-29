import { getDistance } from "geolib";

interface CoordinatesProp {
    userCoords: { latitude: number, longitude: number };
    locationCoords: { latitude: number, longitude: number }
}

export default function findNearbyLocations({userCoords, locationCoords}: CoordinatesProp) {
    getDistance(userCoords, locationCoords);
}