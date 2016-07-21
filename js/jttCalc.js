var eBill = document.getElementById("bill"),
    ePercent_tip = document.getElementById("percent_tip"),
    eDenominator = document.getElementById("denominator"),
    eTip_amount = document.getElementById("tip_amount"),
    eTotal = document.getElementById("total"),
    tip_amount = 0,
    total = 0;

// Default values
eBill.value = eBill.placeholder;
ePercent_tip.value = ePercent_tip.placeholder;
eDenominator.value = eDenominator.placeholder;

function recalculating() {
    var bill = eBill.value;

    // get tip value
    if (ePercent_tip.value != 0) {
        var percent_tip = ePercent_tip.value / 100;
    } else {
        var percent_tip = ePercent_tip.placeholder / 100;
    }

    // number of people is always 1 or greater
    if (eDenominator.value == 0) {
        eDenominator.value = 1;
    }

    // number of people
    if (eDenominator.value != 0) {
        var denominator = eDenominator.value;
    } else {
        var denominator = eDenominator.placeholder;
    }

    // tip total
    tip_amount = bill * percent_tip / denominator;

    // total to bill
    total = bill / denominator + tip_amount;

    if (total > 0) {
        eTip_amount.innerHTML = "$" + tip_amount.toFixed(2);
        eTotal.innerHTML = "$" + total.toFixed(2);
    }

    if (denominator > 1) {
        eTip_amount.innerHTML = eTip_amount.innerHTML + "/per person";
        eTotal.innerHTML = eTotal.innerHTML + "/per person";
    }
}

eBill.addEventListener("blur", recalculating);
percent_tip.addEventListener("blur", recalculating);
denominator.addEventListener("blur", recalculating);
