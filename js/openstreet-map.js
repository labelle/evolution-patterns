    var oneColumnMap = L.map('oneColumnMap',{scrollWheelZoom:false}).setView([40.7445, -73.9957], 15);
    var marker = L.marker([40.7445, -73.9957]).addTo(oneColumnMap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(oneColumnMap);




    var fullWidthMap = L.map('fullWidthMap',{scrollWheelZoom:false}).setView([40.7445, -73.9957], 15);
    var marker = L.marker([40.7445, -73.9957]).addTo(fullWidthMap);
    
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(fullWidthMap);




    var fullScreenMap = L.map('fullScreenMap',{scrollWheelZoom:false}).setView([40.7445, -73.9957], 15);
    var marker = L.marker([40.7445, -73.9957]).addTo(fullScreenMap);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(fullScreenMap);