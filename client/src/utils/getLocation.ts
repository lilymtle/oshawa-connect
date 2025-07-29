export default function getLocation(): Promise<{latitude: number, longitude: number}> {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
            },
            (error) => {
                reject("Error retrieving user location:" + error.message);
            })
        } else {
            reject("Geolocation is not supported in this browser.");
        }
    })
}