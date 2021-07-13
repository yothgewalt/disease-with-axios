const vaccinated = document.getElementById('vaccinated');
const cases_today = document.getElementById('cases-today');
const deaths_today = document.getElementById('deaths-today');

(async function() {
    const [injected] = await Promise.all([
        axios.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries/Thailand'),
        axios.get('https://disease.sh/v3/covid-19/countries/tha').then((response) => {
            cases_today.innerHTML = response.data.todayCases + "&nbsp;เคส";
            deaths_today.innerHTML = response.data.todayDeaths + "&nbsp;คน";
        })
    ]);
    
    let injected_amount = [];
    Object.keys(injected.data.timeline).forEach((value) => {
        injected_amount.push(injected.data.timeline[value])
    });

    vaccinated.innerHTML = injected_amount.slice(-1) + "&nbsp;โดส";
})();