
// Heat Map
AmCharts.makeChart( "heatmap", {
        type: "map",
          "theme": "light",

          colorSteps: 3,

          dataProvider: {
            map: "usaLow",
            areas: [ {
              id: "US-AL",
              value: 4447100,
              color: "#000000"
            }, {
              id: "US-AK",
              value: 626932,
              color: "#999999"
            }, {
              id: "US-AZ",
              value: 5130632,
              color: "#DDDDDD"
            }, {
              id: "US-AR",
              value: 2673400,
              color: "#999999"
            }, {
              id: "US-CA",
              value: 33871648,
              color: "#DDDDDD"
            }, {
              id: "US-CO",
              value: 4301261,
              color: "#999999"
            }, {
              id: "US-CT",
              value: 3405565,
              color: "#999999"
            }, {
              id: "US-DE",
              value: 783600,
              color: "#000000"
            }, {
              id: "US-FL",
              value: 15982378,
              color: "#DDDDDD"
            }, {
              id: "US-GA",
              value: 8186453,
              color: "#999999"
            }, {
              id: "US-HI",
              value: 1211537,
              color: "#DDDDDD"
            }, {
              id: "US-ID",
              value: 1293953,
              color: "#999999"
            }, {
              id: "US-IL",
              value: 12419293,
              color: "#DDDDDD"
            }, {
              id: "US-IN",
              value: 6080485,
              color: "#999999"
            }, {
              id: "US-IA",
              value: 2926324,
              color: "#DDDDDD"
            }, {
              id: "US-KS",
              value: 2688418,
              color: "#000000"
            }, {
              id: "US-KY",
              value: 4041769,
              color: "#999999"
            }, {
              id: "US-LA",
              value: 4468976,
              color: "#DDDDDD"
            }, {
              id: "US-ME",
              value: 1274923,
              color: "#999999"
            }, {
              id: "US-MD",
              value: 5296486,
              color: "#000000"
            }, {
              id: "US-MA",
              value: 6349097,
              color: "#000000"
            }, {
              id: "US-MI",
              value: 9938444,
              color: "#999999"
            }, {
              id: "US-MN",
              value: 4919479,
              color: "#DDDDDD"
            }, {
              id: "US-MS",
              value: 2844658,
              color: "#999999"
            }, {
              id: "US-MO",
              value: 5595211,
              color: "#DDDDDD"
            }, {
              id: "US-MT",
              value: 902195,
              color: "#000000"
            }, {
              id: "US-NE",
              value: 1711263,
              color: "#999999"
            }, {
              id: "US-NV",
              value: 1998257,
              color: "#000000"
            }, {
              id: "US-NH",
              value: 1235786,
              color: "#999999"
            }, {
              id: "US-NJ",
              value: 8414350,
              color: "#DDDDDD"
            }, {
              id: "US-NM",
              value: 1819046,
            color: "#000000"
            }, {
              id: "US-NY",
              value: 18976457,
              color: "#000000"
            }, {
              id: "US-NC",
              value: 8049313,
              color: "#999999"
            }, {
              id: "US-ND",
              value: 642200,
              color: "#DDDDDD"
            }, {
              id: "US-OH",
              value: 11353140,
              color: "#DDDDDD"
            }, {
              id: "US-OK",
              value: 3450654,
              color: "#999999"
            }, {
              id: "US-OR",
              value: 3421399,
              color: "#000000"
            }, {
              id: "US-PA",
              value: 12281054,
              color: "#000000"
            }, {
              id: "US-RI",
              value: 1048319,
              color: "#999999"
            }, {
              id: "US-SC",
              value: 4012012,
              color: "#DDDDDD"
            }, {
              id: "US-SD",
              value: 754844,
              color: "#999999"
            }, {
              id: "US-TN",
              value: 5689283,
              color: "#000000"
            }, {
              id: "US-TX",
              value: 20851820,
              color: "#999999"
            }, {
              id: "US-UT",
              value: 2233169,
              color: "#999999"
            }, {
              id: "US-VT",
              value: 608827,
              color: "#000000"
            }, {
              id: "US-VA",
              value: 7078515,
              color: "#999999"
            }, {
              id: "US-WA",
              value: 5894121,
              color: "#999999"
            }, {
              id: "US-WV",
              value: 1808344,
              color: "#DDDDDD"
            }, {
              id: "US-WI",
              value: 5363675,
              color: "#000000"
            }, {
              id: "US-WY",
              value: 493782,
              color: "#DDDDDD"
            } ]
          },

          areasSettings: {
            autoZoom: true,
            rollOverColor: "#00aeef",
            rollOverOutlineColor: "#FFFFFF",
          },

          // valueLegend: {
          //   right: 3,
          //   minValue: "little",
          //   maxValue: "a lot!"
          // },

        legend: {
            width: "100%",
            marginRight: 27,
            marginLeft: 27,
            equalWidths: false,
            backgroundAlpha: 0.5,
            backgroundColor: "#FFFFFF",
            borderColor: "#ffffff",
            borderAlpha: 1,
            top: 470,
            left: 700,
            horizontalGap: 10,
            data: [ {
              title: "Legend 1",
              color: "#00000"
            }, {
              title: "Legend 2",
              color: "#999999"
            }, {
              title: "Legend 3",
              color: "#DDDDDD"
            } ]
          },

          "export": {
            "enabled": true
          }
} );




// Grouped Map

AmCharts.makeChart( "groupedmap", {

                  type: "map",
                  "theme": "light",

                  dataProvider: {
                    map: "usaLow",
                    // zoomLevel: 3.5,
                    // zoomLongitude: 10,
                    // zoomLatitude: 52,
                    areas: [ {
                        id: "US-WA",
                        value: 5894121,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-AK",
                        value: 626932,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-OR",
                        value: 3421399,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      },{
                        id: "US-CA",
                        value: 33871648,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-ID",
                        value: 1293953,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-WY",
                        value: 493782,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-UT",
                        value: 2233169,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-CO",
                        value: 4301261,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-MT",
                        value: 902195,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-NV",
                        value: 1998257,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-NM",
                        value: 1819046,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, {
                        id: "US-AZ",
                        value: 5130632,
                        color: "#000000",
                        customData: "1986",
                        groupId: "before2004"
                      }, 

                      {
                        id: "US-SD",
                        value: 754844,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-ND",
                        value: 642200,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-NE",
                        value: 1711263,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-KS",
                        value: 2688418,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-OK",
                        value: 3450654,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-TX",
                        value: 20851820,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-HI",
                        value: 1211537,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      }, {
                        id: "US-MN",
                        value: 4919479,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                       }, {
                        id: "US-IA",
                        value: 2926324,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004"
                      },  {
                        id: "US-MO",
                        value: 5595211,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004" 
                      },  {
                        id: "US-WI",
                        value: 5363675,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004" 
                      },  {
                        id: "US-IL",
                        value: 12419293,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004" 
                      },  {
                        id: "US-AR",
                        value: 2673400,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004" 
                      },  {
                        id: "US-LA",
                        value: 4468976,
                        color: "#999999",
                        customData: "2004",
                        groupId: "2004" 
                      }, 

                      {
                        id: "US-IN",
                        value: 6080485,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-KY",
                        value: 4041769,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-TN",
                        value: 5689283,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-AL",
                        value: 4447100,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-MS",
                        value: 2844658,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-FL",
                        value: 15982378,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-GA",
                        value: 8186453,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-NC",
                        value: 8049313,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013"
                      }, {
                        id: "US-SC",
                        value: 4012012,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-VA",
                        value: 7078515,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-MD",
                        value: 5296486,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-WV",
                        value: 1808344,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-OH",
                        value: 11353140,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-PA",
                        value: 12281054,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-NJ",
                        value: 8414350,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-NY",
                        value: 18976457,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-MA",
                        value: 6349097,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-NH",
                        value: 1235786,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      }, {
                        id: "US-ME",
                        value: 1274923,
                        color: "#DDDDDD",
                        customData: "2013",
                        groupId: "2013" 
                      } 

                    ]
                  },

                  areasSettings: {
                    rollOverOutlineColor: "#FFFFFF",
                    rollOverColor: "#00aeef",
                    alpha: 0.8,
                    unlistedAreasAlpha: 0.1
                    // balloonText: "[[title]] joined EU at [[customData]]"
                  },


                  legend: {
                    width: "100%",
                    marginRight: 27,
                    marginLeft: 27,
                    equalWidths: false,
                    backgroundAlpha: 0.5,
                    backgroundColor: "#FFFFFF",
                    borderColor: "#ffffff",
                    borderAlpha: 1,
                    top: 450,
                    left: 700,
                    horizontalGap: 10,
                    data: [ {
                      title: "Legend 1",
                      color: "#00000"
                    }, {
                      title: "Legend 2",
                      color: "#999999"
                    }, {
                      title: "Legend 3",
                      color: "#DDDDDD"
                    } ]
                  },
                  "export": {
                    "enabled": true
                  }

} );



// Bubble Map

var latlong = {};
latlong["US-AL"] = {"latitude":-10.8447, "longitude":-40.4843};
latlong["US-AK"] = {"latitude":-22.0078, "longitude":-68.8749};
latlong["US-AZ"] = {"latitude":-8.9357, "longitude":-65.6178};
latlong["US-AR"] = {"latitude":-8.6189, "longitude":-45.95679};
latlong["US-CA"] = {"latitude":-6.0189, "longitude":-73.45679};
latlong["US-CO"] = {"latitude":-3.3189, "longitude":-59.45679};
latlong["US-CT"] = {"latitude":-0.6189, "longitude":-25.75679};
latlong["US-DE"] = {"latitude":-4.4189, "longitude":-28.45679};
latlong["US-FL"] = {"latitude":-17.0189, "longitude":-34.85679};
latlong["US-GA"] = {"latitude":-11.5189, "longitude":-36.75679};
latlong["US-HI"] = {"latitude":-24.0189, "longitude":-53.75679};
latlong["US-ID"] = {"latitude":2.6357, "longitude":-68.1178};
latlong["US-IL"] = {"latitude":-2.1189, "longitude":-42.85679};
latlong["US-IN"] = {"latitude":-2.4189, "longitude":-39.75679}
latlong["US-IA"] = {"latitude":0.3189, "longitude":-47.45679}
latlong["US-KS"] = {"latitude":-3.8189, "longitude":-52.45679}
latlong["US-KY"] = {"latitude":-5.6189, "longitude":-38.75679}
latlong["US-LA"] = {"latitude":-13.9189, "longitude":-45.75679}
latlong["US-ME"] = {"latitude":4.9189, "longitude":-22.75679}
latlong["US-MD"] = {"latitude":-3.6189, "longitude":-29.75679}
latlong["US-MA"] = {"latitude":0.4189, "longitude":-25.15679}
latlong["US-MI"] = {"latitude":1.8189, "longitude":-38.45679}
latlong["US-MN"] = {"latitude":6.2189, "longitude":-48.85679}
latlong["US-MS"] = {"latitude":-10.9189, "longitude":-43.25679}
latlong["US-MO"] = {"latitude":-4.2189, "longitude":-46.45679}
latlong["US-MT"] = {"latitude":7.6357, "longitude":-64.1178}
latlong["US-NE"] = {"latitude":0.0189, "longitude":-53.45679}
latlong["US-NV"] = {"latitude":-2.8189, "longitude":-70.45679}
latlong["US-NH"] = {"latitude":2.1189, "longitude":-24.85679}
latlong["US-NJ"] = {"latitude":-1.7189, "longitude":-27.75679}
latlong["US-NM"] = {"latitude":-8.9357, "longitude":-60.1178}
latlong["US-NY"] = {"latitude":1.7189, "longitude":-28.85679}
latlong["US-NC"] = {"latitude":-7.9189, "longitude":-32.15679}
latlong["US-ND"] = {"latitude":8.2357, "longitude":-54.6178}
latlong["US-OH"] = {"latitude":-1.9189, "longitude":-36.75679}
latlong["US-OK"] = {"latitude":-7.6189, "longitude":-50.95679}
latlong["US-OR"] = {"latitude":3.3357, "longitude":-74.8178}
latlong["US-PA"] = {"latitude":-1.1189, "longitude":-31.75679}
latlong["US-RI"] = {"latitude":-0.6189, "longitude":-24.45679}
latlong["US-SC"] = {"latitude":-9.9189, "longitude":-34.38679}
latlong["US-SD"] = {"latitude":4.2357, "longitude":-54.6178}
latlong["US-TN"] = {"latitude":-7.6189, "longitude":-39.75679}
latlong["US-TX"] = {"latitude":-12.2189, "longitude":-52.45679}
latlong["US-UT"] = {"latitude":-2.9357, "longitude":-65.6178}
latlong["US-VT"] = {"latitude":2.9189, "longitude":-25.95679}
latlong["US-VA"] = {"latitude":-5.5189, "longitude":-31.75679}
latlong["US-WA"] = {"latitude":7.9357, "longitude":-74.2178}
latlong["US-WV"] = {"latitude":-4.4189, "longitude":-34.39679}
latlong["US-WI"] = {"latitude":4.1189, "longitude":-43.85679}
latlong["US-WY"] = {"latitude":2.1357, "longitude":-61.6178}


var mapData = [
{"code":"US-AL" , "name":"Alabama", "value":3215988, "color":"#999999", "size":15 },
{"code":"US-AK" , "name":"Alaska", "value":35980193, "color":"#999999", "size":35 },
{"code":"US-AZ" , "name":"Arizona", "value":234903233, "color":"#999999", "size":25 },
{"code":"US-AR" , "name":"Arkansas", "value":40764561, "color":"#999999", "size":20 },
{"code":"US-CA" , "name":"California", "value":3100236, "color":"#999999", "size":20 },
{"code":"US-CO" , "name":"Colorado", "value":22605732, "color":"#999999", "size":27 },
{"code":"US-CT" , "name":"Connecticut", "value":8413429, "color":"#999999", "size":7 },
{"code":"US-DE" , "name":"Delaware", "value":9306023, "color":"#999999", "size":4 },
{"code":"US-FL" , "name":"Florida", "value":1323535, "color":"#999999", "size":14 },
{"code":"US-GA" , "name":"Georgia", "value":150493658, "color":"#999999", "size":17 },
{"code":"US-HI" , "name":"Hawaii", "value":9559441, "color":"#999999", "size": 7 },
{"code":"US-ID" , "name":"Idaho", "value":10754056, "color":"#999999", "size": 23 },
{"code":"US-IL" , "name":"Illinois", "value":9099922, "color":"#999999", "size": 19 },
{"code":"US-IN" , "name":"Indiana", "value":738267, "color":"#999999", "size": 18 },
{"code":"US-IA" , "name":"Iowa", "value":10088108, "color":"#999999", "size": 22 },
{"code":"US-KS" , "name":"Kansas", "value":3752228, "color":"#999999", "size": 24 },
{"code":"US-KY" , "name":"Kentucky", "value":2030738, "color":"#999999", "size": 16 },
{"code":"US-LA" , "name":"Louisiana", "value":196655014, "color":"#999999", "size": 16 },
{"code":"US-ME" , "name":"Maine", "value":405938, "color":"#999999", "size": 19 },
{"code":"US-MD" , "name":"Maryland", "value":7446135, "color":"#999999", "size": 7 },
{"code":"US-MA" , "name":"Massachusetts", "value":23490324, "color":"#999999", "size": 8 },
{"code":"US-MI" , "name":"Michigan  ", "value":23490324, "color":"#999999", "size": 20 },
{"code":"US-MN" , "name":"Minnesota", "value":23490324, "color":"#999999", "size": 26 },
{"code":"US-MS" , "name":"Mississippi", "value":23490324, "color":"#999999", "size": 19 },
{"code":"US-MO" , "name":"Missouri", "value":23490324, "color":"#999999", "size": 25 },
{"code":"US-MT" , "name":"Montana", "value":23490324, "color":"#999999", "size": 33 },
{"code":"US-NE" , "name":"Nebraska", "value":23490324, "color":"#999999", "size": 26},
{"code":"US-NV" , "name":"Nevada", "value":23490324, "color":"#999999", "size": 28 },
{"code":"US-NH" , "name":"New Hampshire", "value":23490324, "color":"#999999", "size": 10},
{"code":"US-NJ" , "name":"New Jersey", "value":23490324, "color":"#999999", "size": 8 },
{"code":"US-NM" , "name":"New Mexico", "value":23490324, "color":"#999999", "size": 28 },
{"code":"US-NY" , "name":"New York", "value":23490324, "color":"#999999", "size": 20 },
{"code":"US-NC" , "name":"North Carolina", "value":23490324, "color":"#999999", "size": 20 },
{"code":"US-ND" , "name":"North Dakota", "value":23490324, "color":"#999999", "size": 27 },
{"code":"US-OH" , "name":"Ohio", "value":23490324, "color":"#999999", "size": 23 },
{"code":"US-OK" , "name":"Oklahoma", "value":23490324, "color":"#999999", "size": 26 },
{"code":"US-OR" , "name":"Oregon", "value":23490324, "color":"#999999", "size": 30 },
{"code":"US-PA" , "name":"Pennsylvania", "value":23490324, "color":"#999999", "size": 24 },
{"code":"US-RI" , "name":"Rhode Island", "value":23490324, "color":"#999999", "size": 4 },
{"code":"US-SC" , "name":"South Carolina", "value":23490324, "color":"#999999", "size": 14 },
{"code":"US-SD" , "name":"South Dakota", "value":23490324, "color":"#999999", "size": 27 },
{"code":"US-TN" , "name":"Tennessee ", "value":23490324, "color":"#999999", "size": 18 },
{"code":"US-TX" , "name":"Texas", "value":23490324, "color":"#999999", "size": 32 },
{"code":"US-UT" , "name":"Utah", "value":23490324, "color":"#999999", "size": 28 },
{"code":"US-VT" , "name":"Vermont", "value":23490324, "color":"#999999", "size": 10 },
{"code":"US-VA" , "name":"Virginia", "value":23490324, "color":"#999999", "size": 18 },
{"code":"US-WA" , "name":"Washington", "value":23490324, "color":"#999999", "size": 28 },
{"code":"US-WV" , "name":"West Virginia", "value":23490324, "color":"#999999", "size": 15 },
{"code":"US-WI" , "name":"Wisconsin", "value":23490324, "color":"#999999", "size": 26 },
{"code":"US-WY" , "name":"Wyoming", "value":23490324, "color":"#999999", "size": 29 }

];


var minBulletSize = 3;
var maxBulletSize = 3;
var min = Infinity;
var max = -Infinity;


// get min and max values
for (var i = 0; i < mapData.length; i++) {
    var value = mapData[i].value;
    if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;
    }
}

 // build map
AmCharts.ready(function() {
    AmCharts.theme = AmCharts.themes.dark;
    window.map = new AmCharts.AmMap();

    // window.map.addTitle("Population of the World in 2011", 14);
    // window.map.addTitle("source: Gapminder", 11);
    // window.map.areasSettings = {
    //     unlistedAreasColor: "#000000",
    //     unlistedAreasAlpha: 0.1
    // };
    window.map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>";

    var dataProvider = {
        mapVar: AmCharts.maps.usa2Low,
        images: []
    }

    // create circle for each country


    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
        var dataItem = mapData[i];
        var value = dataItem.value;
        // calculate size of a bubble
        var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
        if (square < minSquare) {
            square = minSquare;
        }
        var size = Math.sqrt(square / (Math.PI * 2));
        var id = dataItem.code;

        dataProvider.images.push({
            type: "circle",
            width: dataItem.size,
            height: dataItem.size,
            color: dataItem.color,
            rollOverColor: "#00aeef",
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value,
            centered: false
        });

    }



    // the following code uses circle radius to show the difference
    /*
    for (var i = 0; i < mapData.length; i++) {
        var dataItem = mapData[i];
        var value = dataItem.value;
        // calculate size of a bubble
        var size = (value - min) / (max - min) * (maxBulletSize - minBulletSize) + minBulletSize;
        if (size < minBulletSize) {
            size = minBulletSize;
        }
        var id = dataItem.code;

        dataProvider.images.push({
            type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value
        });
    }*/         

    window.map.dataProvider = dataProvider;
    window.map.export = {
        enabled: true
    }
    window.map.projection = "eckert6";
    window.map.write("bubblesmap");
});