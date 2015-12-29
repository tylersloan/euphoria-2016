import moment from './moment.min'

var aDay = 24 * 60 * 60 * 1000;
var now = moment();
var sep22 = moment([2016, 9, 22]);
var diff = sep22.diff(now);
var diffInDays = Math.floor((diff / aDay) - 30);

var daySpot = document.getElementById('js-countdown-number');
daySpot.innerHTML = diffInDays;