function search() {
var q = $('#text_box').val();

var url1 = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68f5a78c47a3cd953763e239284aac76&tags="+q+"&text="+q+"&lat=35.6895056&lon=139.6917000&radius=20&format=json&jsoncallback=buildTokyoPhotos";
var url2 = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68f5a78c47a3cd953763e239284aac76&tags="+q+"&text="+q+"&lat=40.714623&lon=-74.006605+&radius=20&format=json&jsoncallback=buildNYCPhotos";
console.log(url1);
$.getScript(url1);

console.log(url2);
$.getScript(url2);
}
 

function searchTokyo () {
var q = $('#searchTokyo_box').val();
var url1 = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68f5a78c47a3cd953763e239284aac76&tags="+q+"&text="+q+"&lat=35.6895056&lon=139.6917000&radius=20&format=json&jsoncallback=buildTokyoPhotos";
console.log(url1);
$.getScript(url1);
}

function searchNYC () {

var v = $('#searchNYC_box').val();
var url2 = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68f5a78c47a3cd953763e239284aac76&tags="+v+"&text="+v+"&lat=40.714623&lon=-74.006605+&radius=20&format=json&jsoncallback=buildNYCPhotos";
console.log(url2);
$.getScript(url2);
}

function buildTokyoPhotos(url1) {

$('#tokyo_box').empty();

var photos = url1['photos'] ['photo'];

for (var i=0; i<photos.length; i++) {

var img_tag = '<img src=\"'+buildPhotoUrl(photos[i])+'\">';
console.log(img_tag);

$('#tokyo_box').append(img_tag);

}
}


function buildNYCPhotos(url2) {

$('#nyc_box').empty();
var photos = url2['photos'] ['photo'];

for (var i=0; i<photos.length; i++) {

var img_tag = '<img src=\"'+buildPhotoUrl(photos[i])+'\">';
console.log(img_tag);

$('#nyc_box').append(img_tag);

}
}

function buildPhotoUrl(photo) {
var photo_url = "https://farm"+photo['farm']+ ".staticflickr.com/" + photo['server']+"/"+photo['id']+"_"+photo['secret']+".jpg";
return photo_url;

}

function start() {
	search();
	searchTokyo();
	searchNYC();
	}
	
window.onload = search;



