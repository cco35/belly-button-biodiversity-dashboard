const sampleData = 'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json';

// Read in the samples from provided JSON
function getData(sample) {
  
// Fetch the JSON data and console log it
  d3.json(sampleData).then((data) => {
    console.log(data);

    let metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    // Use d3 to select the panel with id of #sample-metadata
    let PANEL = d3.select("#sample-metadata");
     // Use `.html("") to clear any existing metadata
     PANEL.html("");

    for (key in result) {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
    };

});}

function createCharts(sample) {
// Fetch JSON data
d3.json(sampleData).then((data) => {
  console.log(data);

  let samples = data.samples;
  // Filter the data for the object with the desired sample number
  let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
  let result = resultArray[0];

      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;

      // Create a horizontal bar chart using Plotly
      let barTrace = {
          x: sample_values.slice(0,10).reverse(),
          y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
          text: otu_labels.slice(0,10).reverse(),
          type: 'bar',
          orientation: 'h'
      };

      let barData = [barTrace];

      let layout = {
          title: `Top 10 OTUs for Sample ${sample}`,
          xaxis: { title: 'Sample Values' },
          yaxis: { title: 'OTU IDs' }
      };

    Plotly.newPlot('bar', barData, layout);

      // Create a Bubble Chart with Plotly
      let bubbleTrace = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      }

      let bubbleData = [bubbleTrace];

      let bubbleLayout = {
        title: "Bubble Chart",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30}
     };
  
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });}


function updatePlotly() {
// Get the selected value from the dropdown menu
  let selectedValue = d3.select("#selDataset").property("value");
    
  // Call functions to update charts based on the selected value
  getData(selectedValue);
  createCharts(selectedValue);
}
    
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function init() {

  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Fetch JSON data
  d3.json(sampleData).then((data) => {
  console.log(data);

  //Retrieve sample names and assign to a variable
  let sampleNames = data.names;

  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  for (let i = 0; i < sampleNames.length; i++) {
    d3.select('#selDataset')
    .append("option")
    .text(sampleNames[i])
    .property("value", sampleNames[i]);
    };

  // Create default charts 
  let defaultPage = sampleNames[0]
  getData(defaultPage);
  createCharts(defaultPage);
  })}


//Call init function to display data on homepage
  init()

