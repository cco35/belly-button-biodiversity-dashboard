# Belly Button Biodiversity Dashboard

## Project Overview

The Belly Button Biodiversity Dashboard project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes found in human navels. The dataset reveals insights into the presence of microbial species (OTUs) in individuals, with some species being more prevalent than others.

## Project Structure

1. **Data Retrieval and Visualization:**
   - Utilized the D3 library to read the samples.json file from the provided URL.
   - Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual.
     - Used sample_values as the values for the bar chart.
     - Used otu_ids as the labels for the bar chart.
     - Used otu_labels as the hovertext for the chart.
   - Created a bubble chart to display each sample's OTUs.
     - Used otu_ids for the x values.
     - Used sample_values for the y values and marker size.
     - Used otu_ids for the marker colors.
     - Used otu_labels for the text values.

2. **Sample Metadata Display:**
   - Displayed the sample metadata, including an individual's demographic information.
   - Displayed each key-value pair from the metadata JSON object on the dashboard.

3. **Interactive Dashboard:**
   - Implemented functionality to update all plots when a new sample is selected.
   - Designed a customizable layout for the dashboard, allowing for user-friendly exploration of the dataset.

## Repository Structure

- **.gitignore:** Excludes unnecessary files from version control.
- **README.md:** Overview of the project and its structure.
- **index.html:** Main HTML file for the dashboard interface.
- **samples.json:** Dataset containing Belly Button Biodiversity information.
- **static/:** Folder containing static assets such as CSS and JavaScript files for the dashboard.
- **images/:** Folder containing images for the website

## Tools Used

- D3 Library: Used for data visualization and interaction within the dashboard.
- HTML and CSS: Used for structuring and styling the dashboard interface.
- JavaScript: Used for dynamic content generation and interactivity.
- GitHub Pages: Deployed the dashboard to a free static page hosting service for accessibility.

## Conclusion

The Belly Button Biodiversity Dashboard project showcases proficiency in data visualization using the D3 library and creating interactive web applications. By leveraging HTML, CSS, JavaScript, and GitHub Pages, the project delivers a user-friendly dashboard for exploring and understanding the Belly Button Biodiversity dataset.
