// Base URL for the Places API
const places_url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input"

// get location and date to pass to Weather API
let getData = () => {
    console.log(document.getElementById("location").value)
    console.log(document.getElementById("date").value)
}