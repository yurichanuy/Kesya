var spin = require('spinnies')

var spinner = { 
"interval": 500,
"frames": [
"",
"Re",
"Reco ",
"Recode  ",
"Recode by IN",
"Recode by ZI",
"Recode by E",
"Recode by Inzie",
"Recode by InzieOfc",
"Recode ",
"Re",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}