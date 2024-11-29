// // const API_KEY =  "44e712238185644766af6ce7138315d9";
// // const ENDPOINTS = {
// //     CURRENT_FORECAST : "https://api.openweathermap.org/data/2.5/weather",
// //     GEOCODING: "https://api.openweathermap.org/geo/1.0/direct",
// //     HOURLY_FORECAST : "https://api.openweathermap.org/data/2.5/forecast"

// // };

// // const latAndLon = async (cityName) => {
// //     const res = await fetch(`${ENDPOINTS.GEOCODING}?q=${cityName}&limit=1&appid=${API_KEY}`);
// //     const data =await res.json();
// //     console.log(data);
// //     try{
    
// //     const lat = data[0].lat;
// //     const lon = data[0].lon;
// //     console.log(lat ,lon);
// //     return { lat, lon };
// // }
// // catch(error){
// //     console.error("Error fetching lat and long:", error);
// // }
// // } 
// // const hourlyForecastes = async (cityName) => {
// //     // const hourlyForecastes = async (cityName) => {
// //         try {
           
// //             const { lat, lon } = await latAndLon(cityName);
    
// //             const resp1 = await fetch(`${ENDPOINTS.HOURLY_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`);

            
// //             const data1 = await resp1.json();
    
          
// //             console.log("Hourly Forecast Data:", data1);

// //             const hourlyDataContainer = document.getElementById("hourly_forecast");
// //             hourlyDataContainer.innerHTML = "";
// //             data1.list.forEach((hourly) => {
// //                 const time = new Date(hourly.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// //                 const temp = hourly.main.temp.toFixed(1);
// //                 const desc = hourly.weather[0].description;
// //                 const icon = `http://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`;
// //                 // console.log(time);
// //                 const hourlyElement = document.createElement("div")
// //                 hourlyElement.innerHTML = `  
                               
// //                                 <p>${time}</p>
// //                                 <img src="${icon}" alt="${desc}">
// //                                 <p>${temp}°C</p>`;

// //                 hourlyDataContainer.appendChild(hourlyElement)
                
// //             }); 
// //         }
// //         catch(error){
// //             console.error("Error fetching lat and long:", error);

// //         }
// //     };




// // const loadCurrentForecast = async() =>{
// //     const cityName="Hyderabad";
// //     const response = await fetch(`${ENDPOINTS.CURRENT_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`)
// //     const data = await response .json()
// //     console.log(data);
 
   


// //     document.querySelector("#current_forecaste h2").innerHTML = data.name;
// //     document.querySelector(".temp").innerHTML = `temrature : ${data.main.temp} \u00B0C`;
// //     document.querySelector(".description").innerHTML = `description : ${data.weather[0].description}`;
// //     document.querySelector(".min_max_temp").innerHTML = `min-temp : ${data.main.temp_min} / max-temp : ${data.main.temp_max}`;
// //     document.querySelector("#feel_free p").innerHTML = `${data.main.feels_like} \u00B0C`;
// //     document.querySelector("#humidity p").innerHTML = `${data.main.humidity} %`;


    

// // }
// // // const weekly_Forecaste

// // loadCurrentForecast()

// // // latAndLon("Hyderabad")
// // hourlyForecastes("Hyderabad")

// const weeklyForecast = async (cityName) => {
//     try {
//         const { lat, lon } = await latAndLon(cityName);

//         // Fetch the 5-day forecast data
//         const response = await fetch(`${ENDPOINTS.HOURLY_FORECAST}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
//         console.log("Weekly Forecast Data:", data);

//         // Process data to group by day
//         const dailyData = {};
//         data.list.forEach((forecast) => {
//             const date = new Date(forecast.dt * 1000).toLocaleDateString(); // Extract date
//             if (!dailyData[date]) {
//                 dailyData[date] = { high: forecast.main.temp_max, low: forecast.main.temp_min, icon: forecast.weather[0].icon };
//             } else {
//                 dailyData[date].high = Math.max(dailyData[date].high, forecast.main.temp_max);
//                 dailyData[date].low = Math.min(dailyData[date].low, forecast.main.temp_min);
//             }
//         });

//         // Display weekly forecast
//         const weeklyForecastContainer = document.getElementById("five_days_forecaste");
//         weeklyForecastContainer.innerHTML = "<h2>Weekly Forecast</h2>";

//         Object.keys(dailyData).forEach((date) => {
//             const { high, low, icon } = dailyData[date];
//             const dailyElement = document.createElement("div");
//             dailyElement.className = "daily-forecast";
//             dailyElement.innerHTML = `
//                 <p>${date}</p>
//                 <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
//                 <p>High: ${high.toFixed(1)}°C</p>
//                 <p>Low: ${low.toFixed(1)}°C</p>
//             `;
//             weeklyForecastContainer.appendChild(dailyElement);
//         });
//     } catch (error) {
//         console.error("Error fetching weekly forecast:", error);
//     }
// };

// // Call the function for weekly forecasts
// weeklyForecast("Hyderabad");


