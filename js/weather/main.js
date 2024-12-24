function findValues(values){
    let {rainIntensityMax,precipitationProbabilityMax,snowIntensityMax,snowAccumulationMax,temperatureMax,cloudCoverMax} = values


    if (rainIntensityMax > 0 && precipitationProbabilityMax > 50) {
        return "Rainy";
    }
    // Check for Snow
    if (snowIntensityMax > 0 || snowAccumulationMax > 0) {
        if (temperatureMax < 0) {
            return "Snowy";
        } else {
            return "Wet Snow Conditions";
        }
    }
        // Check for Sunny
        if (cloudCoverMax < 20 && precipitationProbabilityMax === 0) {
        return "Sunny";
    }
        // Check for Cloudy
        if (cloudCoverMax > 60) {
            return "Cloudy";
    }
}

async function fetchData(){
    const url = 'https://api.tomorrow.io/v4/weather/forecast?location=bangalore&apikey=H61vqaWSocSafnAPtlUNgudEorDPGenL';
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    
    let {location,timelines} = await fetch(url, options)
      .then(res => res.json())
      .then(json => json)
      .catch(err => console.error(err));

    // let {location,timelines} = data;

    // console.log(location)
    console.log(timelines)
    let {daily} = timelines;    
    console.log(daily)
    // console.log(minutely)
    daily.forEach(({time,values}) => {
        // let {time,values} = e;
        console.log(values)
        console.log(time)
        
        // html goes here....
        console.log(findValues(values))
        
    });

// if (rainIntensityMax > 0 && precipitationProbabilityMax > 50) {
//     return "Rainy";
// }
//   // Check for Snow
//   if (snowIntensityMax > 0 || snowAccumulationMax > 0) {
//     if (temperatureMax < 0) {
//         return "Snowy";
//     } else {
//         return "Wet Snow Conditions";
//     }
// }
//     // Check for Sunny
//     if (cloudCoverMax < 20 && precipitationProbabilityMax === 0) {
//       return "Sunny";
//   }
//       // Check for Cloudy
//       if (cloudCoverMax > 60) {
//         return "Cloudy";
//     }
//       




} 

fetchData()


// https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=H61vqaWSocSafnAPtlUNgudEorDPGenL



    // request -> --rate limiter--> status code 