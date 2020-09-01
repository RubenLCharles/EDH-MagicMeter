// VARIABLES PARA MANIPULAR HTML
var wCheck, uCheck, bCheck, rCheck, gCheck; // Checkboxes
var wBox, uBox, bBox, rBox, gBox;           // Tarjetas 
var wRes, uRes, bRes, rRes, gRes;           // Resultados
var nextBtn;                                // Boton de Siguiente 
var calcularBtn;                            // Boton de Calcular
var divNo3;                                 // Div de las tarjetas
var divRes;                                 // Div de los resultados
var warning, warning2;                      // Warning de lands y de colores

// VARIABLES PARA CALCULOS
var lands;                                  // Input de las Lands totales
var wIn, uIn, bIn, rIn, gIn;                // Input de cada color
var wOut = 0*1, uOut = 0*1, bOut = 0*1, rOut = 0*1, gOut = 0*1;  // Output de cada color
var suma = 0*1;                               // Suma de Inputs

function calculos(){
    if (wCheck.checked) {suma = suma + wIn.value*1;}
    if (uCheck.checked) {suma = suma + uIn.value*1;}
    if (bCheck.checked) {suma = suma + bIn.value*1;}
    if (rCheck.checked) {suma = suma + rIn.value*1;}
    if (gCheck.checked) {suma = suma + gIn.value*1;}

    if (wCheck.checked) {
        wOut = lands.value * (wIn.value*1 / suma);
        wRes.innerHTML = Math.round(wOut) + " Plains";
        wRes.style.display = "block";
    }
    if (uCheck.checked) {
        uOut = lands.value * (uIn.value*1 / suma);
        uRes.innerHTML = Math.round(uOut) + " Islands";
        uRes.style.display = "block";
    }
    if (bCheck.checked) {
        bOut = lands.value * (bIn.value*1 / suma);
        bRes.innerHTML = Math.round(bOut) + " Swamps";
        bRes.style.display = "block";
    }
    if (rCheck.checked) {
        rOut = lands.value * (rIn.value*1 / suma);
        rRes.innerHTML = Math.round(rOut) + " Mountains";
        rRes.style.display = "block";
    }
    if (gCheck.checked) {
        gOut = lands.value * (gIn.value*1 / suma);
        gRes.innerHTML = Math.round(gOut) + " Forests";
        gRes.style.display = "block";
    }

    
}

function main() {
    wCheck = document.getElementById("check-blanco");
    uCheck = document.getElementById("check-azul");
    bCheck = document.getElementById("check-negro");
    rCheck = document.getElementById("check-rojo");
    gCheck = document.getElementById("check-verde");

    wBox = document.getElementById("w-mana");
    uBox = document.getElementById("u-mana");
    bBox = document.getElementById("b-mana");
    rBox = document.getElementById("r-mana");
    gBox = document.getElementById("g-mana");

    wIn = document.getElementById("w-input");
    uIn = document.getElementById("u-input");
    bIn = document.getElementById("b-input");
    rIn = document.getElementById("r-input");
    gIn = document.getElementById("g-input");

    wRes = document.getElementById("resultados-w");
    uRes = document.getElementById("resultados-u");
    bRes = document.getElementById("resultados-b");
    rRes = document.getElementById("resultados-r");
    gRes = document.getElementById("resultados-g");

    nextBtn = document.getElementById("next-btn");
    divNo3 = document.getElementById("No3");
    divRes = document.getElementById("results");
    lands = document.getElementById("inputlands");
    warning = document.getElementById("warning");
    warning2 = document.getElementById("warning2");
    calcularBtn = document.getElementById("calcular-btn");

    wCheck.addEventListener(
        "change",
        function () {
            if (wCheck.checked) {
                wBox.style.display = "block";
                warning2.style.display = "none";
            } else {
                wBox.style.display = "none";
            }
        }, 
        false
    );

    uCheck.addEventListener(
        "change",
        function () {
            if (uCheck.checked) {
                uBox.style.display = "block";
                warning2.style.display = "none";
            } else {
                uBox.style.display = "none";
            }
        }, 
        false
    );

    bCheck.addEventListener(
        "change",
        function () {
            if (bCheck.checked) {
                bBox.style.display = "block";
                warning2.style.display = "none";
            } else {
                bBox.style.display = "none";
            }
        }, 
        false
    );

    rCheck.addEventListener(
        "change",
        function () {
            if (rCheck.checked) {
                rBox.style.display = "block";
                warning2.style.display = "none";
            } else {
                rBox.style.display = "none";
            }
        }, 
        false
    );

    gCheck.addEventListener(
        "change",
        function () {
            if (gCheck.checked) {
                gBox.style.display = "block";
                warning2.style.display = "none";
            } else {
                gBox.style.display = "none";
            }
        }, 
        false
    );

    nextBtn.addEventListener(
        "click",
        function(){
            if (lands.value.length == 0) {
                warning.style.display = "block";
            } else {
                warning.style.display = "none";
                divNo3.style.display = "block";
            }

            if (wCheck.checked == false && uCheck.checked == false && bCheck.checked == false && rCheck.checked == false && gCheck.checked == false){
                warning2.style.display = "block";
            }
        },
        false
    );

    calcularBtn.addEventListener(
        "click",
        function(){
            suma = 0*1;  
            wRes.style.display = "none";
            uRes.style.display = "none";
            bRes.style.display = "none";
            rRes.style.display = "none";
            gRes.style.display = "none";
            calculos();
            divRes.style.display = "block";
        },
        false
    );

}

