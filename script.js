document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('foodMenu').style.display = 'none';
    document.getElementById('calculatorContent').style.display = 'none';

    document.getElementById('shoutButton').addEventListener('click', function() {
        alert('Hai, Selamat Datang di Sistem Sederhana');
    });

    document.getElementById('homeTab').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('homeContent').style.display = 'block';
        document.getElementById('foodMenu').style.display = 'none';
        document.getElementById('calculatorContent').style.display = 'none';
    });

    document.getElementById('menuTab').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('homeContent').style.display = 'none';
        document.getElementById('foodMenu').style.display = 'block';
        document.getElementById('calculatorContent').style.display = 'none';
    });

    document.getElementById('calculatorTab').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('homeContent').style.display = 'none';
        document.getElementById('foodMenu').style.display = 'none';
        document.getElementById('calculatorContent').style.display = 'block';
    });

    document.getElementById('calculateButton').addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = document.getElementById('operator').value;
        let result;

        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            result = "Input harus lebih dari 0";
        } else {
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Error: Bagi nol";
                    break;
                default:
                    result = "Operator tidak valid";
            }
        }
        document.getElementById('result').value = result;
    });

    document.getElementById('calcResetButton').addEventListener('click', function() {
        document.getElementById('num1').value = "";
        document.getElementById('num2').value = "";
        document.getElementById('result').value = "";
    });
});

function hitungTotal() {
    let bakso = document.getElementById("bakso").value * 12000;
    let soto = document.getElementById("soto").value * 10000;
    let mieAyam = document.getElementById("mieAyam").value * 15000;

    let total = bakso + soto + mieAyam;
    document.getElementById("total").value = total;

    let diskon = total > 50000 ? total * 0.1 : 0;
    document.getElementById("diskon").value = diskon;

    let bayar = total - diskon;
    document.getElementById("bayar").value = bayar;
}

function resetForm() {
    document.getElementById("bakso").value = 0;
    document.getElementById("soto").value = 0;
    document.getElementById("mieAyam").value = 0;
    document.getElementById("total").value = 0;
    document.getElementById("diskon").value = 0;
    document.getElementById("bayar").value = 0;
}

