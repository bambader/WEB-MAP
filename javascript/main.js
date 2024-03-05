// Code JavaScript 
require([
    "esri/config",
    "esri/Map", 
    "esri/views/SceneView", 
    "esri/widgets/Search", 
    "esri/widgets/DirectLineMeasurement3D",
    "esri/widgets/AreaMeasurement3D", 
    "esri/core/promiseUtils", 
    "esri/widgets/BasemapGallery",
    "esri/rest/locator",
    "esri/layers/GraphicsLayer",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/Color",
    "esri/Graphic",
    "esri/widgets/Expand",
    "esri/widgets/Daylight"
], (esriConfig, Map, SceneView, Search, DirectLineMeasurement3D, AreaMeasurement3D, promiseUtils, BasemapGallery, locator, Expand, Daylight) => {
    esriConfig.apiKey = "AAPK9ebe7fcc167348348f976796dc34d5f0yR8a4AaPhHr0Ret2KtXiUcMw_-Hu4JddzhXjtBMGQcqFTLKbVS3QsNUv53w6-sNu";
    let activeWidget = null;
    let basemapGallery;
    let basemapGalleryInitialized = false;

    const map = new Map({
        basemap: "topo-3d",
        ground: "world-elevation"
    });

    const view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
            position: {
                spatialReference: {
                    latestWkid: 3857,
                    wkid: 102100
                },
                x: -10958000,
                y: 4800000,
                z: 5000000
            },
            heading: 0,
            tilt: 0.49
        }
    });

require([
"esri/widgets/LayerList",
"esri/Map",
"esri/views/MapView",
"esri/portal/Portal",
"esri/widgets/BasemapGallery",
"esri/widgets/BasemapGallery/support/PortalBasemapsSource",
"esri/widgets/Expand",
"esri/core/reactiveUtils",
"esri/layers/GraphicsLayer",
"esri/geometry/Point",
"esri/symbols/SimpleMarkerSymbol",
"esri/Color",
"esri/Graphic",
"esri/widgets/Daylight",
"esri/widgets/DirectLineMeasurement3D",
"esri/widgets/AreaMeasurement3D",
"esri/core/promiseUtils"
], function(
LayerList,
Map,
MapView,
Portal,
BasemapGallery,
PortalBasemapsSource,
Expand,
reactiveUtils,
GraphicsLayer,
Point,
SimpleMarkerSymbol,
Color,
Graphic,
Daylight,
Button,
DirectLineMeasurement3D, 
AreaMeasurement3D, 
promiseUtils
) {


var graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);

view.on("click", function(event) {
// Supprimer le point existant
graphicsLayer.removeAll();

// Ajouter un nouveau point rouge à l'emplacement du clic
var point = new Point({
  longitude: event.mapPoint.longitude,
  latitude: event.mapPoint.latitude
});

var markerSymbol = new SimpleMarkerSymbol({
  color: new Color([255, 0, 0]),
  size: 10,
  outline: {
    color: new Color([255, 255, 255]),
    width: 2
  }
});

var pointGraphic = new Graphic({
  geometry: point,
  symbol: markerSymbol
});

graphicsLayer.add(pointGraphic);
});


// Layer List
const layerList = new LayerList({
    view: view
});

// Créer un Expand pour réduire le widget layerList
const layerListExpand = new Expand({
    content: layerList,
    view: view,
    expanded: false,
    expandTooltip: "Expand LayerList"
});

// Ajouter l'Expand contenant le widget layerListExpand au coin supérieur droit de la vue
view.ui.add(layerListExpand, "top-right");

// Ajouter la classe CSS personnalisée au conteneur du widget layerListExpand
layerListExpand.container.classList.add("custom-layerlist-widget");

// Déplacer le widget layerListExpand à l'index spécifié
view.ui.move(layerListExpand, 2);


// Widget basemap
const basemapGallery = new BasemapGallery({
    view: view
});

// Créer un Expand pour réduire le widget basemapGallery
const basemapExpand = new Expand({
    content: basemapGallery,
    view: view,
    expanded: false,
    expandTooltip: "Expand Basemap"
});

// Ajouter l'Expand contenant le widget basemapExpand au coin supérieur droit de la vue
view.ui.add(basemapExpand, "top-right");

// Ajouter la classe CSS personnalisée au conteneur du widget basemapExpand
basemapExpand.container.classList.add("custom-basemap-widget");

// Déplacer le widget Daylight à l'index spécifié
view.ui.move(basemapExpand, 2);


// Créer le widget Daylight
const daylight = new Daylight({
    view: view,
    playSpeedMultiplier: 2,
    visibleElements: {
        timezone: false
    }
});

// Créer un Expand pour réduire/étendre le widget Daylight
const daylightExpand = new Expand({
    content: daylight,
    view: view,
    expanded: false,
    expandTooltip: "Expand Daylight"
});

// Ajouter l'Expand contenant le widget Daylight au coin supérieur droit de la vue
view.ui.add(daylightExpand, "top-right");

// Ajouter la classe CSS personnalisée au conteneur du widget Daylight
daylightExpand.container.classList.add("custom-daylight-widget");

// Déplacer le widget Daylight à l'index spécifié
view.ui.move(daylightExpand, 2);


const searchWidget = new Search({
    view: view
});

// Créer un Expand pour réduire le widget de recherche
const searchExpand = new Expand({
    content: searchWidget,
    view: view,
    expanded: false,
    expandTooltip: "Expand Search"
});

// Ajouter l'Expand contenant le widget de recherche au coin supérieur droit de la vue
view.ui.add(searchExpand, "top-right");

// Style le conteneur Expand pour qu'il soit visible au démarrage
const searchExpandContainer = document.querySelector(".esri-expand__container");
searchExpandContainer.style.visibility = "visible";

// Écouter les événements sur l'Expand pour ajuster le style lorsqu'il est étendu/réduit
searchExpand.watch("expanded", (expanded) => {
    if (expanded) {
        searchExpandContainer.style.width = "300px";  // Largeur étendue
    } else {
        searchExpandContainer.style.width = "40px";   // Largeur réduite
    }
});


});


 

    view.when(function() {
        // Set up event listeners
        document.getElementById('toggleSidebarButton').addEventListener('click', function() {
            // toggleSidebar();

        });

        // Other view-related initialization code
    });

    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        var toggleButton = document.getElementById('toggleSidebarButton');
        sidebar.classList.toggle('open');

        // Check the new state after toggle to apply styles and text
        if (sidebar.classList.contains('open')) {
            toggleButton.classList.add('open');
            toggleButton.innerHTML = '<span class="esri-icon-left-arrow"></span>'; // Icon for collapsing sidebar
        } else {
            toggleButton.classList.remove('open');
            toggleButton.innerHTML = '<span class="esri-icon-right-arrow"></span>'; // Icon for expanding sidebar
        }
    }


    const serviceUrl = "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

    view.on("click", function (evt) {
        locator.locationToAddress(serviceUrl, { location: evt.mapPoint }).then(
            function (response) {
                console.log('aaa');
                $("#sidebar").removeClass('hide')
                $("#sidebarToggle").removeClass('expand')
                showSidebar(response.address, evt.mapPoint);
                toggleSidebar();
            }, function (err) {
                showSidebar("No address found.", evt.mapPoint);
            }
        );
    });
     document.getElementById('toggleSidebarButton').addEventListener('click', function() {
        toggleSidebar();
    });


   function showSidebar(address, pt) {
        var sidebarContent = document.getElementById('sidebar');
        if (!sidebarContent) {
            console.error('Sidebar content element not found!');
            return;
        }

        // Set up the sidebar HTML structure, including a div for the Google Map
        sidebarContent.innerHTML = `
            <div id="googleMap" style="width: 100%; height: 33%;"></div>
            <div id="propertyDetails" style="padding: 10px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                    <p><strong>Property:</strong> ${address}</p>
                    <button id="addToCRM" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; box-shadow: 0 2px 5px rgba(0,123,255,.3);">Add to CRM</button>
                </div>
                <p id="predictedDamage" style="margin: 0;"><strong>Predicted Roof Damage:</strong> Loading...</p>
                <div class="info-box" style="display: block; justify-content: space-around; align-items: center; border: 1px solid #d3d3d3; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <p id="ownerInfo"><strong>Property Owner:</strong> Loading...</p>
                    <p id="ownerPhone"><strong>Phone Number:</strong> Loading...</p>
                    <p id="footprint"><strong>Roof Measurement:</strong> Loading...</p>
                </div>
                <h4>Weather Report : 1/17/2024</h4>
                <div id="weatherReport">Loading...</div>
            </div>
        `;
        sidebarContent.classList.add('open');

        // Insert Google Maps iframe into the googleMap div
        var mapDiv = document.getElementById('googleMap');
        var iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%'; // Fill the height of the googleMap div
        iframe.frameBorder = '0';
        iframe.style.border = '0';
        iframe.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyACpwktTd6RKpe4rC5udTm8pGPgkFdIf6k&center=${pt.latitude},${pt.longitude}&zoom=19&maptype=satellite`;
        iframe.allowFullscreen = true;
        mapDiv.appendChild(iframe);

        // Append the toggle button at the end or at the start of the sidebar as per your UI design

        // Fetch weather data and other information
        fetchWeatherData(pt.latitude, pt.longitude, function(weatherData) {
            // Once weather data is fetched, update the corresponding parts of the sidebar
            document.getElementById('weatherReport').innerHTML = createWeatherReportTable(weatherData);
            // Assume assessRoofDamageRisk and createWeatherReportTable are functions that return HTML content
            var damageRisk = assessRoofDamageRisk(weatherData); // This should return a string like "Low", "Moderate", or "High"
            document.getElementById('predictedDamage').innerHTML = `<strong>Predicted Roof Damage:</strong> ${damageRisk}`;
        });

        // Fetch and update the owner information
        updateOwnerInfo(pt.latitude, pt.longitude);
    }
    
function createWeatherReportTable(weatherData) {
    var weatherDescription = getWeatherDescription(weatherData.weatherCode);
    var precipitationType = getPrecipitationType(weatherData.precipitationType);

    return `
        <table>
            <tr><th>Weather Condition</th><td>${weatherDescription}</td></tr>
            <tr><th>Wind Speed</th><td>${weatherData.windSpeed} mph</td></tr>
            <tr><th>Wind Gust</th><td>${weatherData.windGust} mph</td></tr>
            <tr><th>Precipitation Intensity</th><td>${weatherData.precipitationIntensity} in/hr</td></tr>
            <tr><th>Precipitation Type</th><td>${precipitationType}</td></tr>
        </table>
    `;
}

function addGoogleMapsIframe(latitude, longitude) {
    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '33%'; // 1/3 of the sidebar height
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyACpwktTd6RKpe4rC5udTm8pGPgkFdIf6k&center=${latitude},${longitude}&zoom=20&maptype=satellite`;
    iframe.allowFullscreen = true;

    // Assuming you have a div with id='googleMap' where the iframe should be placed
    var mapDiv = document.getElementById('googleMap');
    mapDiv.innerHTML = ''; // Clear any previous iframe
    mapDiv.appendChild(iframe);
}




function getRiskStyle(risk) {
    switch (risk) {
        case 'Low':
            return 'color: green; font-weight: bold;';
        case 'Moderate':
            return 'color: orange; font-weight: bold;';
        case 'High':
            return 'color: red; font-weight: bold;';
        default:
            return ''; // Default style if risk is unknown
    }
}

function updateWeatherReport(weatherData) {
    var weatherDescription = getWeatherDescription(weatherData.weatherCode);
    var precipitationType = getPrecipitationType(weatherData.precipitationType);
    var weatherReport = 'Wind Speed: ' + weatherData.windSpeed + ' mph, ' +
                        'Precipitation: ' + weatherData.precipitationIntensity + ' in/hr, ' +
                        'Wind Gust: ' + weatherData.windGust + ' mph, ' +
                        'Precipitation Type: ' + precipitationType + ', ' +
                        'Weather Condition: ' + weatherDescription;
    return weatherReport;
}

// Function to fetch and update the owner info in the popup
function updateOwnerInfo(latitude, longitude) {
fetch(`http://localhost:3000/scrape?lat=${latitude}&lon=${longitude}`)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    
    })
    .then(data => {
    var ownerInfo = data.owner || 'Information not available';
    var ownerPhone = data.phoneNumber || 'Phone number not available';
    var sqft = data.sqft || 'Building square footage not available';
    // Update the sidebar content with the owner information
    document.getElementById('ownerInfo').innerHTML = '<strong>Property Owner:</strong> ' + ownerInfo;
    // Update the sidebar content with the phone number
    document.getElementById('ownerPhone').innerHTML = '<strong>Phone Number:</strong> ' + ownerPhone;
    document.getElementById('footprint').innerHTML = '<strong>Roof Size:</strong> ' + sqft + ' sq ft.';
    })
    .catch(error => {
    console.error('Error fetching property owner data:', error);
    // Update the sidebar content with the error message for owner
    document.getElementById('ownerInfo').innerHTML = 'Error fetching property owner data.';
    // Update the sidebar content with the error message for phone number
    document.getElementById('ownerPhone').innerHTML = 'Error fetching property phone number.';
    });
}

// Assume these helper functions (getRiskStyle, updateWeatherReport, updateOwnerInfo) are implemented elsewhere in your code.


function assessRoofDamageRisk(weatherData) {
        let riskLevel = "Low";
        const windSpeed = weatherData.windSpeed;
        const windGust = weatherData.windGust;
        const precipitationIntensity = weatherData.precipitationIntensity;
        const weatherConditionCode = weatherData.weatherCode;
        const precipitationType = weatherData.precipitationType;

        // Check for High Risk conditions first
        if (windSpeed >= 57 || windGust >= 57 || precipitationIntensity > 1.5 || 
            precipitationType == 3 || precipitationType == 4 ||
            [4200, 4001, 8000, 7102, 7101, 7000, 6201, 6001].includes(weatherConditionCode)) {
            riskLevel = "High";
        }
        // Then check for Moderate Risk conditions only if not already High
        else if (windSpeed >= 45 || windGust >= 45 || precipitationIntensity > 0.1 || precipitationType == 2 || 
            [4201, 5000, 5001, 5101, 6000, 6200].includes(weatherConditionCode)) {
            riskLevel = "Moderate";
        }


        // Generate the HTML element with styling based on the risk level
        let riskColorClass = '';
        switch(riskLevel) {
            case 'Low':
                riskColorClass = 'low-risk';
                break;
            case 'Moderate':
                riskColorClass = 'moderate-risk';
                break;
            case 'High':
                riskColorClass = 'high-risk';
                break;
            default:
                riskColorClass = 'unknown-risk';
        }

        return `
            <div class="roof-damage-indicator ${riskColorClass}">
                 ${riskLevel}
            </div>
        `;
}


function getWeatherDescription(code) {
    const weatherCodeMap = {
        0: "Unknown",
        1000: "Clear, Sunny",
        1100: "Mostly Clear",
        1101: "Partly Cloudy",
        1102: "Mostly Cloudy",
        1001: "Cloudy",
        2000: "Fog",
        2100: "Light Fog",
        4000: "Drizzle",
        4001: "Rain",
        4200: "Light Rain",
        4201: "Heavy Rain",
        5000: "Snow",
        5001: "Flurries",
        5100: "Light Snow",
        5101: "Heavy Snow",
        6000: "Freezing Drizzle",
        6001: "Freezing Rain",
        6200: "Light Freezing Rain",
        6201: "Heavy Freezing Rain",
        7000: "Ice Pellets",
        7101: "Heavy Ice Pellets",
        7102: "Light Ice Pellets",
        8000: "Thunderstorm"
        // Add more mappings as needed
    };
    return weatherCodeMap[code] || "Unknown";
}

// Example function to convert precipitation type to text
function getPrecipitationType(type) {
    const precipitationTypeMap = {
        0: 'None',
        1: 'Rain',
        2: 'Snow',
        3: 'Freezing Rain',
        4: 'Ice Pellets / Sleet'
        // Add more mappings as needed
    };
    return precipitationTypeMap[type] || 'Unknown';
}



    document.getElementById("distanceButton").addEventListener("click", (event) => {
        setActiveWidget(null);
        if (!event.target.classList.contains("active")) {
            setActiveWidget("distance");
        } else {
            setActiveButton(null);
        }
    });

    document.getElementById("areaButton").addEventListener("click", (event) => {
        setActiveWidget(null);
        if (!event.target.classList.contains("active")) {
            setActiveWidget("area");
        } else {
            setActiveButton(null);
        }
    });

    document.getElementById("basemapToggleButton").addEventListener("click", () => {
        if (!basemapGalleryInitialized) {
            initializeBasemapGallery();
        } else {
            toggleBasemapGalleryDisplay();
        }
    });

    function initializeBasemapGallery() {
        basemapGallery = new BasemapGallery({ view: view });
        view.ui.add(basemapGallery, { position: "top-right" });

        basemapGallery.container.addEventListener("mousleave", () => {
            basemapGallery.container.style.display = "none";
        });

        basemapGallery.watch("activeBasemap", () => {
            basemapGallery.container.style.display = "none";
        });

        basemapGalleryInitialized = true;
        basemapGallery.container.style.display = "block";
    }

    function fetchWeatherData(latitude, longitude, callback) {
        fetch(`http://localhost:3000/weather?lat=${latitude}&lon=${longitude}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Weather data not available: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => callback(data))
            .catch(error => {
                console.error('Error fetching weather data:', error);
                // Optionally, update the UI to show an error message
            });
    }

    function toggleBasemapGalleryDisplay() {
        const basemapGalleryElement = basemapGallery.container;
        if (basemapGalleryElement.style.display === "none") {
            basemapGalleryElement.style.display = "block";
        } else {
            basemapGalleryElement.style.display = "none";
        }
    }

    function setActiveWidget(type) {
        switch (type) {
            case "distance":
                activeWidget = new DirectLineMeasurement3D({
                    view: view
                });

                activeWidget.viewModel.start().catch((error) => {
                    if (promiseUtils.isAbortError(error)) {
                        return; // don't display abort errors
                    }
                    throw error; // throw other errors since they are of interest
                });

                view.ui.add(activeWidget, "top-right");
                setActiveButton(document.getElementById("distanceButton"));
                break; 
            case "area":
                activeWidget = new AreaMeasurement3D({
                    view: view
                });

                activeWidget.viewModel.start().catch((error) => {
                    if (promiseUtils.isAbortError(error)) {
                        return; // don't display abort errors
                    }
                    throw error; // throw other errors since they are of interest
                });

                view.ui.add(activeWidget, "top-right");
                setActiveButton(document.getElementById("areaButton"));
                break;
            case null:
                if (activeWidget) {
                    view.ui.remove(activeWidget);
                    activeWidget.destroy();
                    activeWidget = null;
                }
                break;
        }
    }

    function setActiveButton(selectedButton) {
        view.focus();
        const elements = document.getElementsByClassName("active");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        if (selectedButton) {
            selectedButton.classList.add("active");
        }
    }
});



function toggleSidebar() {
        if($("#sidebar").hasClass('hide')) {
            $("#sidebar").removeClass('hide')
            $("#sidebarToggle").removeClass('expand')
        } else {
            $("#sidebar").addClass('hide')
            $("#sidebarToggle").addClass('expand')
        }
};

