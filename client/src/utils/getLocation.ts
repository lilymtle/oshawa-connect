export default function getLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve([position.coords.latitude, position.coords.longitude]);
            },
            (error) => {
                reject("Error retrieving user location:" + error.message);
            })
        } else {
            reject("Geolocation is not supported in this browser.");
        }
    })
}