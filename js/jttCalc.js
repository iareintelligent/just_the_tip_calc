// Calculator Variables
var eBill = document.getElementById("bill"),
    ePercent_tip = document.getElementById("percent_tip"),
    eNumPeeps = document.getElementById("numPeeps"),
    eTip_amount = document.getElementById("tip_amount"),
    eTotal = document.getElementById("total"),
    tip_amount = 0,
    total = 0

// +/- Button Variables
var numButton = document.getElementsByClassName("btn-number");
// debugger;


// Default values
eBill.value = eBill.placeholder;
ePercent_tip.value = ePercent_tip.placeholder;
eNumPeeps.value = eNumPeeps.placeholder;

function calculate() {
    console.log('recalculating');
    var bill = eBill.value;

    // get tip value
    if (ePercent_tip.value != 0) {
        var percent_tip = ePercent_tip.value / 100;
    } else {
        var percent_tip = ePercent_tip.placeholder / 100;
    }

    // number of people is always 1 or greater
    if (eNumPeeps.value == 0) {
        eNumPeeps.value = 1;
    }

    // number of people
    if (eNumPeeps.value != 0) {
        var numPeeps = eNumPeeps.value;
    } else {
        var numPeeps = eNumPeeps.placeholder;
    }

    // tip total
    tip_amount = bill * percent_tip / numPeeps;

    // total to bill
    total = bill / numPeeps + tip_amount;

    if (total > 0) {
        eTip_amount.innerHTML = "$" + tip_amount.toFixed(2);
        eTotal.innerHTML = "$" + total.toFixed(2);
    }

    if (numPeeps > 1) {
        eTip_amount.innerHTML = eTip_amount.innerHTML + "/per person";
        eTotal.innerHTML = eTotal.innerHTML + "/per person";
    }
}

$('.xcrement').each(function() {
  var input = $(this).find('input[type="number"]'),
      plus = $(this).find('button[class="btn btn-default btn-number plus"]'),
      minus = $(this).find('button[class="btn btn-default btn-number minus"]');

      plus.click(function() {
        input[0].value++;
        calculate();
      });

      minus.click(function() {
        input[0].value--;
        calculate();
      });
})

eBill.addEventListener("change", calculate);
percent_tip.addEventListener("change", calculate);
numPeeps.addEventListener("change", calculate);
