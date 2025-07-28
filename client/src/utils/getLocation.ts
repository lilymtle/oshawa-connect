export default function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const currentLocation: [number, number] = [position.coords.latitude, position.coords.longitude];
            console.log("Current location is:", currentLocation);
        },
        (error) => {
            console.error("Error retrieving user location:", error);
        })
    } else {
        console.error("Geolocation is not supported in this browser.");
    }
}