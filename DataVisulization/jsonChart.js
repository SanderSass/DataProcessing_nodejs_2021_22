let freedomCount2012 = freedomCount2013 = freedomCount2014 =
freedomCount2015 = freedomCount2016 = freedomCount2017 =
freedom2018 = freedomCount2019 = freedomCount2020 = freedomCount2021 = 0;

let happinessCount2012 = happinessCount2013 = happinessCount2014 =
happinessCount2015 = happinessCount2016 = happinessCount2017 =
happinessCount2018 = happinessCount2019 = happinessCount2020 = happinessCount2021 = 0;
        
let populationCountNetherlands = populationCountBelgium = populationCountCroatia =
populationCountHungary = populationCountIceland = populationCountIndonesia =
populationCountIreland = populationCountJapan = populationCountKazakhstan = populationCountDenmark = 0;

chart();

async function chart(){
  await getFreedomData();
  await gethappinessData();
  await getPopulationData();
  var ctx = document.getElementById('myChartJson').getContext('2d');
  var myChartJson = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [
          {
              label: 'Freedom index',
              barPercentage: 0.8,
              data: [freedomCount2012, freedomCount2013, freedomCount2014,
                freedomCount2015, freedomCount2016, freedomCount2017,
                freedom2018, freedomCount2019, freedomCount2020, freedomCount2021],
              backgroundColor: [
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
              ],
              borderWidth: 1
          },
          {
              label: 'Happiness index',
              barPercentage: 0.8,
              data: [happinessCount2012, happinessCount2013, happinessCount2014,
                happinessCount2015, happinessCount2016, happinessCount2017,
                happinessCount2018, happinessCount2019, happinessCount2020, happinessCount2021],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderWidth: 1
          },

          {
              label: 'Countries Population',
              barPercentage: 0.8,
              data: [populationCountNetherlands, populationCountBelgium, populationCountCroatia,
                populationCountHungary, populationCountIceland, populationCountIndonesia,
                populationCountIreland, populationCountJapan, populationCountKazakhstan, populationCountDenmark],
              backgroundColor: [
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)',
                  'rgb(102, 153, 153)'
              ],
              borderWidth: 1
          }
      ]
      },
    });
}

async function getfreedomData() {
  await fetch('http://localhost:5500/api/freedom/{$Country}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
          }).then(res => {
            return res.json();
        }).then(data => {
          let freedomJson = data.Country;
          //looping through the json result gotten from the api to count the album released from 2010 to 2019
          for (let i = 0; i < freedomJson.length; i++) {
              if (freedomJson[i].Year === 2012) {
                  freedomCount2012++;
              }

              if (freedomJson[i].Year === 2013) {
                freedomCount2013++;
              }

              if (freedomJson[i].Year === 2014) {
                freedomCount2014++;
              }

              if (freedomJson[i].Year === 2015) {
                freedomCount2015++;
              }

              if (freedomJson[i].Year === 2016) {
                freedomCount2016++;
              }

              if (freedomJson[i].Year === 2017) {
                freedomCount2017++;
              }

              if (freedomJson[i].Year === 2018) {
                freedomCount2018++;
              }

              if (freedomJson[i].Year === 2019) {
                freedomCount2019++;
              }

              if (freedomJson[i].Year === 2020) {
                freedomCount2020++;
              }

              if (freedomJson[i].Year === 2021) {
                freedomCount2021++;
              }
          }
        });
}

async function getfreedomData() {
  await fetch('http://localhost:5500/api/happiness/{$Country}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
          }).then(res => {
            return res.json();
        }).then(data => {
          let happinessJson = data.Country;
          //looping through the json result gotten from the api to count the album released from 2010 to 2019
          for (let i = 0; i < happinessJson.length; i++) {
              if (happinessJson[i].Year === 2012) {
                happinessCount2012++;
              }

              if (happinessJson[i].Year === 2013) {
                happinessCount2013++;
              }

              if (happinessJson[i].Year === 2014) {
                happinessCount2014++;
              }

              if (happinessJson[i].Year === 2015) {
                happinessCount2015++;
              }

              if (happinessJson[i].Year === 2016) {
                happinessCount2016++;
              }

              if (happinessJson[i].Year === 2017) {
                happinessCount2017++;
              }

              if (happinessJson[i].Year === 2018) {
                happinessCount2018++;
              }

              if (happinessJson[i].Year === 2019) {
                happinessCount2019++;
              }

              if (happinessJson[i].Year === 2020) {
                happinessCount2020++;
              }

              if (happinessJson[i].Year === 2021) {
                happinessCount2021++;
              }
          }
        });
}

async function getfreedomData() {
  await fetch('http://localhost:5500/api/population', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
          }).then(res => {
            return res.json();
        }).then(data => {
          let populationJson = data.Country;
          //looping through the json result gotten from the api to count the album released from 2010 to 2019
          for (let i = 0; i < happinessJson.length; i++) {
              if (populationJson[i].Year === "Netherlands") {
                populationCountNetherlands++;
              }

              if (populationJson[i].Population === "Belgium") {
                populationCountBelgium++;
              }
              
              if (populationJson[i].Year === "Croatia") {
                populationCountCroatia++;
              }

              if (populationJson[i].Year === "Hungary") {
                populationCountHungary++;
              }

              if (populationJson[i].Year === "Iceland") {
                populationCountIceland++;
              }

              if (populationJson[i].Year === "Indonesia") {
                populationCountIndonesia++;
              }

              if (populationJson[i].Year === "Ireland") {
                populationCountIreland++;
              }

              if (populationJson[i].Year === "Japan") {
                populationCountJapan++;
              }

              if (populationJson[i].Year === "Kazakhstan") {
                populationCountKazakhstan++;
              }

              if (populationJson[i].Year === "Denmark") {
                populationCountDenmark++;
              }
          }
        });
}

