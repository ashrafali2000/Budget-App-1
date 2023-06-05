// This function is used  for drop down list
(function () {
    let caterogies = [
        { name: "Books and Register" },
        { name: "Car and vehicles" },
        { name: "CLoths and shoping" },
        { name: "Electronic" },
        { name: "Women cloths" },
        { name: "Rent of Home" },
        { name: "child shoping" },
        { name: "Shoes and sandle" }
    ];
    caterogies.forEach(function (val) {
        let myCategory = document.getElementById("Category");
        let a = myCategory.appendChild(document.createElement("option"));
        a.innerHTML = val.name;
    })
})();

// Expense  Details

let caterogiesNew = [
    { name: "Books and Register", img: "images/Books and Register.png" },
    { name: "Car and vehicles", img: "images/Car and vehicles.png" },
    { name: "Furniture", img: "images/furniture.png" },
    { name: "cloths and shoping", img: "images/cloths and shoping.png" },
    { name: "Electronic", img: "images/Electronic.png" },
    { name: "Women cloths", img: "images/Women cloths.png" },
    { name: "Rent of Home", img: "images/Rent of Home.png" },
    { name: "child shoping", img: "images/child shoping.png" },
    { name: "Shoes and sandle", img: "images/Shoes and sandle.png" }
];

let count = 0;
let expenseCount = document.getElementById("amount").value;
let countTotalItems = 0;

function addExpense() {
    let categoryVal = document.getElementById("Category").value;
    let descriptionVal = document.getElementById("description").value;
    let dateVal = document.getElementById("date").value;
    if (categoryVal === "" || descriptionVal === "" || dateVal === "") {
        alert("Please! fill the inputs requirment perfect!!");
    }
    else {
        document.querySelector(".expenseDetContainer").style.display = "block";
        let childForExpDet = document.getElementById("childForExpDet");
        let table = childForExpDet.appendChild(document.createElement("table"));
        table.setAttribute("class", "tableBorder");
        table.setAttribute("cellspacing", "17px");
        let row = table.appendChild(document.createElement("tr"));
        row.setAttribute("id", "row1")
        let column1 = row.appendChild(document.createElement("td"));
        let column2 = row.appendChild(document.createElement("td"));
        let column3 = row.appendChild(document.createElement("td"));
        let column4 = row.appendChild(document.createElement("td"));
        let column5 = row.appendChild(document.createElement("td"));
        let column6 = row.appendChild(document.createElement("td"));

        caterogiesNew.forEach(function (val) {
            if ((val.img.toLowerCase()).includes(document.getElementById("Category").value.toLowerCase())) {
                var createrImg = column1.appendChild(document.createElement("img"));
                createrImg.src = val.img;
                column1.appendChild(createrImg);
            }
        })
        let myBalance = document.getElementById("amount").value;
        count += +myBalance;
        column3.appendChild(document.createTextNode(document.getElementById("description").value));
        column2.appendChild(document.createTextNode(document.getElementById("Category").value));
        column6.appendChild(document.createTextNode("Delete"));
        column6.addEventListener("click", function () {
            count -= column5.innerText;
            let y = document.querySelector(".childForBudgDet");
            let x = document.querySelector('.calculation');
            if (document.querySelector(".childForBudgDet").style.display === "block") {
                y.removeChild(x);
                AddBudget();
            } else {
                document.querySelector('.childForBudgDet').style.display = 'block';
                AddBudget();
            }
            let row = this.parentNode;
            row.parentNode.remove(row);

            countTotalItems = countTotalItems - 1;
            document.getElementById("calcOfItem").innerHTML = countTotalItems;

        })

        // the following code from (81-93) lines for just reverse my PC date

        let date = document.getElementById("date").value;
        let dateSplit = date.split("");
        let dateChoose = dateSplit.slice(8, 10);
        let dateJoin = dateChoose.join("");
        dateSplit.splice(0, 0, dateJoin);
        let monthChoose = dateSplit.slice(6, 8);
        let monthJoin = monthChoose.join("");
        dateSplit.splice(1, 0, "-", monthJoin);
        let yearChoose = dateSplit.slice(3, 7);
        let yearJoin = yearChoose.join("");
        dateSplit.splice(3, 0, "-", yearJoin);
        dateSplit.splice(5);
        let lastFullDate = dateSplit.join("");
        column4.appendChild(document.createTextNode(lastFullDate));
        column5.appendChild(document.createTextNode(document.getElementById("amount").value));

        column1.setAttribute("class", "forWidth col1Class");
        column2.setAttribute("class", "forWidth col2Class");
        column3.setAttribute("class", "col3Class");
        column4.setAttribute("class", "forWidth col4Class");
        column5.setAttribute("class", "col5Class");
        column6.setAttribute("class", "col6Class ");

        countTotalItems = countTotalItems + 1;
        document.getElementById("calcOfItem").innerHTML = countTotalItems;


        let y = document.querySelector(".childForBudgDet");
        let x = document.querySelector('.calculation');
        if (document.querySelector(".childForBudgDet").style.display === "block") {
            y.removeChild(x);
            AddBudget();
        } else {
            document.querySelector('.childForBudgDet').style.display = 'block';
            AddBudget();
        }
    }

    // the followig lines for all input are empty;
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

// Budget add Amout details 

function AddBudget() {
    document.querySelector(".budgetDetContainer").style.display = "block";
    let budgetElem = document.querySelector(".childForBudgDet");
    let childBudgetElem = budgetElem.appendChild(document.createElement("div"));
    childBudgetElem.setAttribute("class", "calculation");
    let totalAmount = childBudgetElem.appendChild(document.createElement("div"));
    let expesiveAmonut = childBudgetElem.appendChild(document.createElement("div"));
    let balance = childBudgetElem.appendChild(document.createElement("div"));
    let totalAmountPara1 = totalAmount.appendChild(document.createElement("p"));
    totalAmountPara1.appendChild(document.createTextNode("Total Amount"));
    let totalAmountPara2 = totalAmount.appendChild(document.createElement("p"));
    totalAmountPara2.appendChild(document.createTextNode(document.getElementById("budget").value));
    let expesiveAmonutPara1 = expesiveAmonut.appendChild(document.createElement("p"));
    expesiveAmonutPara1.appendChild(document.createTextNode("Expenses"));
    let expesiveAmonutPara2 = expesiveAmonut.appendChild(document.createElement("p"));
    expesiveAmonutPara2.appendChild(document.createTextNode(count));
    let balancePara1 = balance.appendChild(document.createElement("p"));
    balancePara1.appendChild(document.createTextNode("Balance"));
    let balancePara2 = balance.appendChild(document.createElement("p"));
    let balanceFee = document.getElementById("budget").value - count;
    balancePara2.appendChild(document.createTextNode(balanceFee));

    // The following code for CountItem (expense)
    if (balanceFee < 0) {
        alert("Your Budget is less than of your expense!");
        let g = document.getElementById("childForExpDet");
        g.removeChild(g.lastChild);

        countTotalItems = countTotalItems - 1;
        document.getElementById("calcOfItem").innerHTML = countTotalItems;
    }
}


function AddBudgetAll() {
    if (document.getElementById("budget").value === "") {
        alert("Pleas! Enter Your Total Budget");
    }
    else {
        let y = document.querySelector(".childForBudgDet");
        let x = document.querySelector('.calculation');
        if (document.querySelector(".childForBudgDet").style.display === "block") {
            y.removeChild(x);
            AddBudget();
        } else {
            document.querySelector('.childForBudgDet').style.display = 'block';
            AddBudget();
        }
    }
}
