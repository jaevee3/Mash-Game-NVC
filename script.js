document.getElementById('mashForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const spouse = document.getElementById('spouse').value;
    const job = document.getElementById('job').value;
    const car = document.getElementById('car').value;
    const city = document.getElementById('city').value;

    const mashOptions = ['Mansion', 'Apartment', 'Shack', 'House'];
    const randomMash = mashOptions[Math.floor(Math.random() * mashOptions.length)];
    const randomResult = `You will live in a ${randomMash}, marry ${spouse}, work as a ${job}, drive a ${car}, and live in ${city}.`;

    document.getElementById('result').innerText = randomResult;
});
