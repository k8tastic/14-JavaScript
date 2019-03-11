// Connect to data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell with sighting data
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        // console.log(ufoSighting);
    });
});

// Add event listener for button to filter dates
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {

    d3.event.preventDefault();

    // Select the input date
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter results by inputValue  
    var filteredData = data.filter(date => date.datetime === inputValue);

    // Clear table and assign id
    document.getElementById("SightingsData").innerHTML = "";

    // Populate table with filtered results
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});