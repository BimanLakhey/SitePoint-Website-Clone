const createAccountBtns = document.querySelectorAll(".accBtn");
const brightBtns = document.querySelectorAll(".brightBtn");
const fontColorBtns = document.querySelectorAll(".fontColorBtn");
const categories = document.querySelectorAll(".category");
const annualBill = document.getElementById("annualBill");
const price = document.getElementById("price");
const priceBtns = document.querySelectorAll(".priceBtn");

createAccountBtns.forEach(accBtn => accBtn.addEventListener("mouseover",  () => {accBtn.classList.add("createAccBtnHover")}));
createAccountBtns.forEach(accBtn => accBtn.addEventListener("mouseout", () => {accBtn.classList.remove("createAccBtnHover")}));

brightBtns.forEach(brightBtn => brightBtn.addEventListener("mouseover", () => {brightBtn.classList.add("brightBtnOnHover")}));
brightBtns.forEach(brightBtn => brightBtn.addEventListener("mouseout", () => {brightBtn.classList.remove("brightBtnOnHover")}));

fontColorBtns.forEach(fontColorBtn => fontColorBtn.addEventListener("mouseover", () => {fontColorBtn.classList.add("fontColorBtnOnHover")}));
fontColorBtns.forEach(fontColorBtn => fontColorBtn.addEventListener("mouseout", () => {fontColorBtn.classList.remove("fontColorBtnOnHover")}));

categories.forEach(category => category.addEventListener("mouseover", (e) =>
{
	const categorySubHeadings = category.querySelectorAll(".categorySubHeading");
	categorySubHeadings.forEach(categorySubHeading => categorySubHeading.classList.add("categorySubHeadingOnHover"));
}, false));

categories.forEach(category => category.addEventListener("mouseout", (e) =>
{
	const categorySubHeadings = category.querySelectorAll(".categorySubHeading");
	categorySubHeadings.forEach(categorySubHeading => categorySubHeading.classList.remove("categorySubHeadingOnHover"));
}, false));




function displayAnnualBill()
{
    
    if(document.getElementById("annualPrice").checked)
    {
        price.innerHTML = "$9";
        annualBill.innerHTML = "(Billed annualy at $72)";
    }

    else
    {
        price.innerHTML = "$6";
        annualBill.innerHTML = "";
    }
}

priceBtns.forEach(priceBtn => priceBtn.addEventListener("click", displayAnnualBill));