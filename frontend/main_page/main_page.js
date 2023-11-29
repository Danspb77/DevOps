// import {} from 
var add_button = document.getElementById("add_button");
var purchase_name_str = "";
var purchase_date_str = "";
var purchase_cost_str = '';
var purchase_comment_str = '';
add_button.addEventListener("click", function () {
    var purchase_name = document.getElementById("purchase-name");
    var purchase_date = document.getElementById("purchase-date");
    var purchase_cost = document.getElementById("purchase-cost");
    var purchase_comment = document.getElementById("purchase-comment");
    purchase_name_str = purchase_name.value;
    purchase_date_str = purchase_date.value;
    purchase_cost_str = purchase_cost.value;
    purchase_comment_str = purchase_comment.value;
    alert("Button clicked! ".concat(purchase_name_str));
    // console.log("Password:", password_str);
});
export { purchase_name_str, purchase_date_str, purchase_cost_str, purchase_comment_str };
var day_button = document.getElementById("day_button");
var per_day_result = document.getElementById("perDayResult");
day_button.addEventListener('click', function () {
    per_day_result.textContent = "variable from import";
});
var week_button = document.getElementById("week_button");
var per_week_result = document.getElementById("perWeekResult");
week_button.addEventListener('click', function () {
    per_week_result.textContent = "variable from importW";
});
var month_button = document.getElementById("month_button");
var per_month_result = document.getElementById("perMonthResult");
month_button.addEventListener('click', function () {
    per_month_result.textContent = "variable from importM";
});
var year_button = document.getElementById("year_button");
var per_year_result = document.getElementById("perYearResult");
year_button.addEventListener('click', function () {
    per_year_result.textContent = "variable from importY";
});
