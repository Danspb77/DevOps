"use strict";
// import {} from 
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase_comment_str = exports.purchase_cost_str = exports.purchase_date_str = exports.purchase_name_str = void 0;
const add_button = document.getElementById("add_button");
let purchase_name_str = "";
exports.purchase_name_str = purchase_name_str;
let purchase_date_str = "";
exports.purchase_date_str = purchase_date_str;
let purchase_cost_str = '';
exports.purchase_cost_str = purchase_cost_str;
let purchase_comment_str = '';
exports.purchase_comment_str = purchase_comment_str;
add_button.addEventListener("click", function () {
    let purchase_name = document.getElementById("purchase-name");
    let purchase_date = document.getElementById("purchase-date");
    let purchase_cost = document.getElementById("purchase-cost");
    let purchase_comment = document.getElementById("purchase-comment");
    exports.purchase_name_str = purchase_name_str = purchase_name.value;
    exports.purchase_date_str = purchase_date_str = purchase_date.value;
    exports.purchase_cost_str = purchase_cost_str = purchase_cost.value;
    exports.purchase_comment_str = purchase_comment_str = purchase_comment.value;
    alert(`Button clicked! ${purchase_name_str}`);
    // console.log("Password:", password_str);
});
const day_button = document.getElementById("day_button");
const per_day_result = document.getElementById("perDayResult");
day_button.addEventListener('click', function () {
    per_day_result.textContent = "variable from import";
});
