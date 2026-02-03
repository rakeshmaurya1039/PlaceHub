const map = L.map("map").setView([12.97194, 77.59369], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([12.97194, 77.59369])
    .addTo(map)
    .bindPopup("Banglore");

    var marker = L.marker([51.5, -0.09]).addTo(map);
