//SDK setup
window.pAsyncInit = function() {
        PDK.init({
            appId: "<your app-id>", // Change this
            cookie: true
        });
    };

    (function(d, s, id){
        var js, pjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//assets.pinterest.com/sdk/sdk.js";
        pjs.parentNode.insertBefore(js, pjs);
    }(document, 'script', 'pinterest-jssdk'));

//requests
var params = {
  fields: 'id,note,link,image'
};

//pagination
var pins = [];
PDK.request('/boards/<board_id>/pins/', function (response) { // Make sure to change the board_id
  if (!response || response.error) {
    alert('Error occurred');
  } else {
    pins = pins.concat(response.data);
    if (response.hasNext) {
      response.next(); // this will recursively go to this same callback
    }
  }
});
