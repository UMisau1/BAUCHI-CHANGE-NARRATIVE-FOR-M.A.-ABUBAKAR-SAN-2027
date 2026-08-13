/* =====================================
   MEMBERS MANAGEMENT SYSTEM
   M.A. Campaign Version 5.0
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeDashboard();

});

/* =====================================
   INITIALIZE
===================================== */

function initializeDashboard(){

    loadStatistics();

    loadMembers();

    initializeSearch();

    initializeFilters();

    initializeButtons();

}
const members = [

    {

        id:"M.A.000001",

        fullname:"Umar Muhammad",

        gender:"Male",

        phone:"08031234567",

        lga:"Misau",

        ward:"Hardawa",

        pollingUnit:"PU-001",

        status:"Active"

    },

    {

        id:"M.A.000002",

        fullname:"Aisha Bello",

        gender:"Female",

        phone:"08045556666",

        lga:"Bauchi",

        ward:"Makama",

        pollingUnit:"PU-014",

        status:"Pending"

    },

    {

        id:"M.A.000003",

        fullname:"Sani Yusuf",

        gender:"Male",

        phone:"08123334444",

        lga:"Ningi",

        ward:"Ningi East",

        pollingUnit:"PU-110",

        status:"Active"

    }

];

/* =====================================
   LOAD STATISTICS
===================================== */
function loadStatistics(){

    document.getElementById("totalMembers").textContent = members.length;

    document.getElementById("activeMembers").textContent =

        members.filter(member => member.status==="Active").length;

    document.getElementById("pendingMembers").textContent =

        members.filter(member => member.status==="Pending").length;

    document.getElementById("newToday").textContent = 12;

}
/* =====================================
   LOAD TABLE
===================================== */

function loadMembers(){

    const table = document.getElementById("membersTableBody");

    table.innerHTML = "";

    members.forEach((member,index)=>{

        table.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>

                <img src="images/avatar.png"

                     class="member-photo">

            </td>

            <td>${member.id}</td>

            <td>${member.fullname}</td>

            <td>${member.gender}</td>

            <td>${member.phone}</td>

            <td>${member.lga}</td>

            <td>${member.ward}</td>

            <td>${member.pollingUnit}</td>

            <td>${new Date().toLocaleDateString()}</td>

            <td>

                <span class="badge ${member.status.toLowerCase()}">

                    ${member.status}

                </span>

            </td>

            <td>

                <div class="action-buttons">

                    <button class="view-btn"

                    onclick="viewMember('${member.id}')">

                    <i class="fas fa-eye"></i>

                    </button>

                    <button class="edit-btn"

                    onclick="editMember('${member.id}')">

                    <i class="fas fa-pen"></i>

                    </button>

                    <button class="delete-btn"

                    onclick="deleteMember('${member.id}')">

                    <i class="fas fa-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}
SEARCH
function initializeSearch(){

    const search=document.getElementById("searchMember");

    search.addEventListener("keyup",()=>{

        const value=search.value.toLowerCase();

        const rows=document.querySelectorAll("#membersTableBody tr");

        rows.forEach(row=>{

            row.style.display=

            row.innerText.toLowerCase().includes(value)

            ?"":"none";

        });

    });

}

/* =====================================
   FILTERS
===================================== */
function initializeFilters(){

    console.log("Filters Ready");

}

/* =====================================
   BUTTONS
===================================== */
function initializeButtons(){

    document.getElementById("refreshBtn")

    .addEventListener("click",()=>{

        loadMembers();

        loadStatistics();

        alert("Data Refreshed Successfully");

    });

}
/* =====================================
   VIEW MEMBER
===================================== */

function viewMember(memberId){

    const member = members.find(item => item.id === memberId);

    if(!member){

        alert("Member not found.");

        return;

    }

    alert(

`Member Details

ID: ${member.id}

Name: ${member.fullname}

Gender: ${member.gender}

Phone: ${member.phone}

LGA: ${member.lga}

Ward: ${member.ward}

Polling Unit: ${member.pollingUnit}

Status: ${member.status}`

    );

}

/* =====================================
   EDIT MEMBER
===================================== */

function editMember(memberId){

    const member = members.find(item => item.id === memberId);

    if(!member){

        alert("Member not found.");

        return;

    }

    alert("Edit Member: " + member.fullname);

}

/* =====================================
   DELETE MEMBER
===================================== */

function deleteMember(memberId){

    const confirmDelete = confirm(

        "Are you sure you want to delete this member?"

    );

    if(!confirmDelete){

        return;

    }

    const index = members.findIndex(

        item => item.id === memberId

    );

    if(index !== -1){

        members.splice(index,1);

    }

    loadMembers();

    loadStatistics();

    alert("Member deleted successfully.");

}

/* =====================================
   PRINT MEMBER ID
===================================== */

function printMemberID(memberId){

    alert("Printing Membership ID for " + memberId);

}

/* =====================================
   DOWNLOAD MEMBER ID
===================================== */

function downloadMemberID(memberId){

    alert("Downloading Membership ID for " + memberId);

}


/* =====================================

   STATISTICS CARDS
===================================== */

.stats-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));

    gap:25px;

    margin-bottom:35px;

}

.stat-card{

    background:#fff;

    border-radius:15px;

    padding:25px;

    box-shadow:var(--shadow);

    display:flex;

    align-items:center;

    gap:20px;

    transition:.3s;

}

.stat-card:hover{

    transform:translateY(-5px);

}

.stat-icon{

    width:65px;

    height:65px;

    border-radius:50%;

    display:flex;

    align-items:center;

    justify-content:center;

    color:#fff;

    font-size:24px;

}

.blue{

    background:#0d6efd;

}

.green{

    background:#198754;

}

.orange{

    background:#fd7e14;

}

.red{

    background:#dc3545;

}

.stat-info h2{

    font-size:30px;

    margin-bottom:5px;

}

.stat-info p{

    color:#666;

}

/* =====================================
   SEARCH PANEL
===================================== */

.search-panel{

    background:#fff;

    padding:20px;

    border-radius:12px;

    box-shadow:var(--shadow);

    display:flex;

    gap:15px;

    flex-wrap:wrap;

    align-items:center;

    margin-bottom:30px;

}

/* =====================================
   SEARCH BOX
===================================== */

.search-box{

    flex:1;

    min-width:260px;

    position:relative;

}

.search-box i{

    position:absolute;

    left:18px;

    top:50%;

    transform:translateY(-50%);

    color:#777;

}

.search-box input{

    width:100%;

    height:48px;

    padding-left:50px;

    border:1px solid var(--border);

    border-radius:8px;

    outline:none;

    font-size:15px;

}

/* =====================================
   FILTERS
===================================== */

.search-panel select{

    height:48px;

    padding:0 15px;

    border:1px solid var(--border);

    border-radius:8px;

    outline:none;

    cursor:pointer;

    min-width:180px;

}

/* =====================================
   SEARCH BUTTON
===================================== */

.btn-search{

    background:var(--primary);

    color:#fff;

    border:none;

    padding:13px 25px;

    border-radius:8px;

    cursor:pointer;

    transition:.3s;

}

.btn-search:hover{

    opacity:.9;

}

/* =====================================
   TOOLBAR
===================================== */

.table-toolbar{

    display:flex;

    justify-content:space-between;

    align-items:center;

    flex-wrap:wrap;

    gap:20px;

    margin-bottom:25px;

}

.left-tools,

.right-tools{

    display:flex;

    gap:12px;

    flex-wrap:wrap;

}

/* =====================================
   PRIMARY BUTTON 
===================================== */

.btn-primary{

    background:var(--primary);

    color:#fff;

    padding:12px 20px;

    text-decoration:none;

    border-radius:8px;

    font-weight:500;

}

/* =====================================
   TOOLBAR BUTTONS
===================================== */
.right-tools button{

    border:none;

    background:#fff;

    box-shadow:var(--shadow);

    padding:12px 18px;

    border-radius:8px;

    cursor:pointer;

    transition:.3s;

}

.right-tools button:hover{

    background:var(--primary);

    color:#fff;

}

/* =====================================
   LOAD MEMBERS
===================================== */
function loadMembers(){

    console.log("Members Loaded");

}

/* =====================================
   LIVE SEARCH
===================================== */
function initializeSearch(){

    const searchBox = document.getElementById("searchMember");

    if(!searchBox) return;

    searchBox.addEventListener("keyup", function(){

        const keyword = this.value.toLowerCase();

        console.log(keyword);

    });

}

/* =====================================
    BUTTONS
===================================== */
function initializeButtons(){

    document
    .getElementById("refreshBtn")
    ?.addEventListener("click", refreshMembers);

    document
    .getElementById("exportExcel")
    ?.addEventListener("click", exportExcel);

    document
    .getElementById("exportPDF")
    ?.addEventListener("click", exportPDF);

    document
    .getElementById("printMembers")
    ?.addEventListener("click", printMembers);

}

/* =====================================
   REFRESH
===================================== */
function refreshMembers(){

    alert("Members list refreshed.");

}

/* =====================================
   EXPORT EXCEL
===================================== */
function exportExcel(){

    alert("Excel export will be available after database integration.");

}

/* =====================================
   EXPORT PDF
===================================== */
function exportPDF(){

    alert("PDF export will be available after database integration.");

}

/* =====================================
   PRINT
===================================== */
function printMembers(){

    window.print();

}

