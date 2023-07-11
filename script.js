
function onSearchClick(){
    var lat,long,cityName;

    var city = document.getElementById("srchBar").value;

    var loadingCircle = document.getElementById("loadingCircle");
    loadingCircle.style.display = "block";

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
        headers: { 'X-Api-Key': 'wpH3jNefuc2d8yERKUc1ow==RLyuwigUbGC9hvnP'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            obj = result[0];
            lat = obj.latitude;
            long = obj.longitude;
            updateMap(long, lat);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        },
        complete: function () {
            loadingCircle.style.display = "none";
          },
    });
}

function updateMap(long, lat){
    let container = document.getElementById("gmap");
    container.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBj6yMvd_WGYAJWvjUWe5H6e8qJgHX2Sqs&center=${lat},${long}&zoom=13`
    
}
