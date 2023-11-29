
// import {} from 


const add_button = document.getElementById("add_button") as HTMLButtonElement;

let purchase_name_str: string =""
let purchase_date_str: string = "";
let purchase_cost_str:string='';
let purchase_comment_str:string='';

add_button.addEventListener("click", function() {
    

    let purchase_name = document.getElementById("purchase-name") as HTMLInputElement;
    let purchase_date = document.getElementById("purchase-date") as HTMLInputElement;
    let purchase_cost=document.getElementById("purchase-cost") as HTMLInputElement
    let purchase_comment=document.getElementById("purchase-comment") as HTMLInputElement

    purchase_name_str= purchase_name.value;
    purchase_date_str = purchase_date.value;
    purchase_cost_str=purchase_cost.value;
    purchase_comment_str=purchase_comment.value;
    alert(`Button clicked! ${purchase_name_str}`);
    // console.log("Password:", password_str);
});
export { purchase_name_str, purchase_date_str,purchase_cost_str,purchase_comment_str };



const day_button=document.getElementById("day_button") as HTMLButtonElement
const per_day_result=document.getElementById("perDayResult") as HTMLDivElement

day_button.addEventListener('click',function(){
    per_day_result.textContent = "variable from import"
})


const week_button=document.getElementById("week_button") as HTMLButtonElement
const per_week_result=document.getElementById("perDayResult") as HTMLDivElement

week_button.addEventListener('click',function(){
    per_week_result.textContent = "variable from import"
})


const month_button=document.getElementById("month_button") as HTMLButtonElement
const per_month_result=document.getElementById("perDayResult") as HTMLDivElement

month_button.addEventListener('click',function(){
    per_month_result.textContent = "variable from import"
})


const year_button=document.getElementById("year_button") as HTMLButtonElement
const per_year_result=document.getElementById("perDayResult") as HTMLDivElement

year_button.addEventListener('click',function(){
    per_year_result.textContent = "variable from import"
})

