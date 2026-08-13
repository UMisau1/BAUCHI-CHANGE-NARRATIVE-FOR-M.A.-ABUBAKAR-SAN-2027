/* ==========================================
   M.A. CAMPAIGN WEBSITE
   nigeria.js
========================================== */

const stateSelect = document.getElementById("state");
const lgaSelect = document.getElementById("lga");

/* ==========================================
   STATES
========================================== */

const nigeria = {

"Bauchi":[

"Alkaleri",
"Bauchi",
"Bogoro",
"Dambam",
"Darazo",
"Dass",
"Gamawa",
"Ganjuwa",
"Giade",
"Itas/Gadau",
"Jama'are",
"Katagum",
"Kirfi",
"Misau",
"Ningi",
"Shira",
"Tafawa Balewa",
"Toro",
"Warji",
"Zaki"

]

};

/* ==========================================
   LOAD STATES
========================================== */

if(stateSelect){

Object.keys(nigeria).forEach(state=>{

const option=document.createElement("option");

option.value=state;

option.textContent=state;

stateSelect.appendChild(option);

});

}

/* ==========================================
   LOAD LGAs
========================================== */

if(stateSelect){

stateSelect.addEventListener("change",()=>{

lgaSelect.innerHTML="<option value=''>Select Local Government</option>";

const selectedState=stateSelect.value;

if(selectedState && nigeria[selectedState]){

nigeria[selectedState].forEach(lga=>{

const option=document.createElement("option");

option.value=lga;

option.textContent=lga;

lgaSelect.appendChild(option);

});

}

});

}
/* ==========================================
   WARDS
========================================== */

const wardSelect = document.getElementById("ward");

const wards = {

"Misau":[

"Beti",
"Dardori",
"Duguri",
"Gwaram",
"Hardawa",
"Jarkasa",
"Kukadi/Gundari",
"Misau Central",
"Sarama",
"Sofo",
"Tofin Miya"

]

};


/* ==========================================
   LOAD WARDS
========================================== */

if(lgaSelect){

lgaSelect.addEventListener("change",()=>{

if(!wardSelect) return;

wardSelect.innerHTML="<option value=''>Select Ward</option>";

const selectedLGA=lgaSelect.value;

if(wards[selectedLGA]){

wards[selectedLGA].forEach(ward=>{

const option=document.createElement("option");

option.value=ward;

option.textContent=ward;

wardSelect.appendChild(option);

});

}else{

const option=document.createElement("option");

option.value="";

option.textContent="Ward data not available";

wardSelect.appendChild(option);

}

});

}
/* ==========================================
   POLLING UNITS
========================================== */

const pollingUnitSelect = document.getElementById("pollingUnit");

const pollingUnits = {

"Misau Central":[

"Misau Central PU 001",
"Misau Central PU 002",
"Misau Central PU 003",
"Misau Central PU 004",
"Misau Central PU 005"

],

"Hardawa":[

"Hardawa PU 001",
"Hardawa PU 002",
"Hardawa PU 003",
"Hardawa PU 004"

],

"Gwaram":[

"Gwaram PU 001",
"Gwaram PU 002",
"Gwaram PU 003"

],

"Beti":[

"Beti PU 001",
"Beti PU 002",
"Beti PU 003"

]

};


/* ==========================================
   LOAD POLLING UNITS
========================================== */

if(wardSelect){

    wardSelect.addEventListener("change",()=>{

        if(!pollingUnitSelect) return;

        pollingUnitSelect.innerHTML =
        "<option value=''>Select Polling Unit</option>";

        const selectedWard = wardSelect.value;

        if(pollingUnits[selectedWard]){

            pollingUnits[selectedWard].forEach(unit=>{

                const option = document.createElement("option");

                option.value = unit;

                option.textContent = unit;

                pollingUnitSelect.appendChild(option);

            });

        }else{

            const option = document.createElement("option");

            option.value = "";

            option.textContent = "Polling Unit data not available";

            pollingUnitSelect.appendChild(option);

        }

    });

}


/* ==========================================
   RESET DROPDOWNS
========================================== */

function resetLocation(){

    if(lgaSelect){

        lgaSelect.selectedIndex = 0;

    }

    if(wardSelect){

        wardSelect.innerHTML =
        "<option value=''>Select Ward</option>";

    }

    if(pollingUnitSelect){

        pollingUnitSelect.innerHTML =
        "<option value=''>Select Polling Unit</option>";

    }

}


/* ==========================================
   END OF NIGERIA.JS
========================================== */
