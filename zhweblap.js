const apiKey = 'ac4186be99364d4318f65d99dbfcce38'; // Helyettesítsd be a saját API kulcsoddal

$(document).ready(function() {
    $('#getWeather').click(function() {
        const city = $('#city').val();

        if (city) {
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
                method: 'GET',
                success: function(data) {
                    console.log(data); // Válasz megjelenítése a konzolon
                    $('#weather').html(`
                        <p><strong>Város:</strong> ${data.name}</p>
                        <p><strong>Hőmérséklet:</strong> ${data.main.temp} °C</p>
                        <p><strong>Leírás:</strong> ${data.weather[0].description}</p>
                    `);
                },
                error: function(jqXHR) {
                    console.error(jqXHR.responseText); // Hibaüzenet a konzolon
                    $('#weather').html('<p style="color: red;">Hiba történt az időjárás lekérdezésekor. Kérlek, ellenőrizd a város nevét.</p>');
                }
            });
        } else {
            alert('Kérlek, adj meg egy várost!');
        }
    });
});
