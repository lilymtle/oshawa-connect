export default function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude)  
    })
}