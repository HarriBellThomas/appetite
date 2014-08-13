$(document).ready(function () {


	// data for falafel shops in london
	// co-ordinates are easiest to get from bing maps
	var stores = [];

	$("ul li").each(function () {

		var store = {};
		store.location = [$(this).data("lat"), $(this).data("lng")];
		store.title = $(this).find("h3").text();
		store.address = $(this).find("p").text();
		store.color = "red";
		stores.push(store);

	});

	// mapbox tiles
	var mapTiles = "https://a.tiles.mapbox.com/v3/steer.ijbel9hk/{z}/{x}/{y}.png";
	var map = L.map('map', {
		layers: new L.TileLayer(mapTiles)
	});

	var bounds = new L.LatLngBounds();

	for (var i = 0; i < stores.length; i++) {

		var store = stores[i];

		var markerIcon = L.icon({
			iconUrl: "/assets/" + store.color + "marker.png",
			iconSize: [30, 30],
			iconAnchor: [15, 30],
			popupAnchor: [0, -35]
		});

		var marker = L.marker(store.location, {	icon: markerIcon });
		marker.addTo(map);

		var popup = "<h3>" + store.title + "</h3><p>" + store.address + "</p>";
		marker.bindPopup(popup);

		bounds.extend(store.location);
	}


	map.fitBounds(bounds);


	$( "#search" ).submit(function( event ) {
		event.preventDefault();
		var search_term = jQuery('#search_value').val();
		if (search_term != "") {
			window.location.replace("/?search=" + encodeURIComponent(search_term));
		} else {
			window.location.replace("/");
		}
	});

	$( "search" );


});
