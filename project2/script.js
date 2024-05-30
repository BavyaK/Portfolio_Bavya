const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington"];

document.getElementById("departure").addEventListener("input", function() {
    autocomplete(document.getElementById("departure"), cities);
});

document.getElementById("destination").addEventListener("input", function() {
    autocomplete(document.getElementById("destination"), cities);
});

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const passengers = document.getElementById("passengers").value;

    // Calculate fake price based on distance (just for demonstration purposes)
    const pricePerMile = 0.1;
    const distance = Math.abs(cities.indexOf(departure) - cities.indexOf(destination));
    const totalPrice = distance * 500 * passengers * pricePerMile;

    const bookingSummary = `
        <h3>Booking Summary</h3>
        <p><strong>Departure City:</strong> ${departure}</p>
        <p><strong>Destination City:</strong> ${destination}</p>
        <p><strong>Departure Date:</strong> ${date}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
    `;
    document.getElementById("bookingSummary").innerHTML = bookingSummary;
});
