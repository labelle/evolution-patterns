$(function () {
    $('#line-chart').highcharts({
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            color: '#00A651'
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            color: '#2E3192'
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
            color: '#00AEEF'
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
            color: '#EC008C'
        }]
    });
});



    /** This chart from highcharts.html **/
    Dashboard.Helpers.elementExists('.highcharts-line-analytics-payment-received', function() {
        $(this).highcharts({
            chart: {
                renderTo: 'container',
                backgroundColor: 'transparent',
                type: 'line'
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                gridLineWidth: 1,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            yAxis: {
                gridLineWidth: 1,
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'horizontal',
                align: 'right',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Credit Card',
                type: 'area',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 21.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                color: '#00A651',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(45, 153, 220, .4)'],
                        [1, 'rgba(45, 153, 220, 0)']
                    ]},
                    lineWidth: '1',
                    marker: {
                        symbol: 'circle',
                    }
                }, {
                    name: 'PayPal',
                    data: [-0.2, 0.8, 17.7, 11.3, 8.0, 15.0, 27.8, 24.1, 20.1, 29.1, 8.6, 16.5],
                    color: '#00AEEF', 
                    type: 'area',
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(59, 189, 168, .2)'],
                            [1, 'rgba(59, 189, 168, 0)']
                        ]},
                        lineWidth: '1',
                        marker: {
                            symbol: 'circle',
                        }
                    }]
                });
    });



    // Used in highcharts.html in panel "Basic Column"
    Dashboard.Helpers.elementExists('.highcharts-basic-column-2', function() {
        $(this).highcharts({
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                height: 300,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
                legend: {
                enabled: false
            },
               exporting: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
                color: '#00AEEF'

            }   ]
        });
    });



    // Used in highcharts.html in panel "Basic Column Alt"
    Dashboard.Helpers.elementExists('.highcharts-basic-column-alt', function() {
        $(this).highcharts({
            chart: {
                type: 'column',
                height: 300
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
              credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                categories: [
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Direct',
                data: [49.9, 71.5, 106.4, 129.2],
                color: '#00A651'

            }, {
                name: 'Indirect',
                data: [83.6, 78.8, 98.5, 93.4],
                color: '#2E3192'

            }, {
                name: 'Adds',
                data: [48.9, 38.8, 39.3, 41.4],
                color: '#00AEEF'

            }]
        });
    });


    // Used in highcharts.html in panel "Basic Bar Alt"
    Dashboard.Helpers.elementExists('.highcharts-basic-bar', function() {
        $(this).highcharts({
            chart: {
                type: 'bar',
                height: 300
            },
            exporting: {
                enabled: false
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Q1', 'Q2', 'Q3', 'Q4'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            legend: {
               enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203],
                borderColor: '#212121',
                color: '#00A651'
            }, {
                name: 'Year 1900',
                data: [133, 156, 947, 408],
                borderColor: '#212121',
                color: '#2E3192'
            }, {
                name: 'Year 2012',
                data: [1052, 954, 4250, 740],
                borderColor: '#212121',
                color: '#00AEEF'
            }]
        });
    });



    // Used in highcharts.html in panel "Stacked Column"
    Dashboard.Helpers.elementExists('.highcharts-stacked-column', function() {
        $(this).highcharts({
            chart: {
                type: 'column',
                height: 300
            },
            title: {
                text: ''
            },
                credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }

            },
             legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                borderColor: '#212121',
                color: '#00A651'
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1],
                borderColor: '#212121',
                color: '#2E3192'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                borderColor: '#212121',
                color: '#00AEEF'
            }]
        });
    });


    
    // Used in highcharts.html in panel "Polar Chart"
    Dashboard.Helpers.elementExists('.highcharts-polar-chart', function() {
        $(this).highcharts({

            chart: {
                polar: true,
                height: 300
            },

            title: {
                text: ''
            },

            pane: {
                startAngle: 0,
                endAngle: 360
            },

            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },

                        exporting: {
                enabled: false
            },

            yAxis: {
                min: 0
            },

              credits: {
                enabled: false
            },

            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },

            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between',
                color: '#00A651'
            }, {
                type: 'line',
                name: 'Line',
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                color: '#EC008C'
            }, {
                type: 'area',
                name: 'Area',
                data: [1, 8, 2, 7, 3, 6, 4, 5],
                color: '#00AEEF',
                lineColor: '#2E3192',
                 marker: {
                    enabled: false
                }
            }]
        });
    });


    // Used in highcharts.html in panel "Stacked Area"
    Dashboard.Helpers.elementExists('.highcharts-stacked-area', function() {
        $(this).highcharts({
            chart: {
                type: 'area',
                height: 300
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
             legend: {
               enabled: false
            },

              credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },

            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 900, 809, 947, 1402, 3634, 5268],
                color: '#00A651',
                lineColor: '#00A651',
                 marker: {
                    enabled: false
                }
            }, {
                name: 'Africa',
                data: [106, 1708, 890, 500, 490, 767, 1766],
                   marker: {
                    enabled: false
                },
                 color: '#00AEEF',
                lineColor: '#00AEEF'
            }, {
                name: 'Europe',
                data: [163, 800, 276, 300, 159, 729, 628],
                color: '#2E3192',
                lineColor: '#2E3192',
                   marker: {
                    enabled: false
                }
            }]
        });
    });