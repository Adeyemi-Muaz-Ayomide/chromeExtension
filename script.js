let myLeads = [];

let inputEl = document.getElementById('input-el');

let deleteEl = document.getElementById('delete-btn');

deleteEl.addEventListener('dbclick' , function() {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
   

})
//A NEATER WAY TO ADD EVENT LISTENERS TO YOUR CODE
let inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector('#ul-el');

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

inputBtn.addEventListener('click' , function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render();
});


function render(leads) {
    let listItems= '';
    for (let i = 0;  i < leads.length; i++) {

        listItems = `
        <li>
            <a  target = '_blank' href = '${leads[i]}'>
            ${leads[i]};
        </li>
        `
    };
    ulEl.innerHTML += listItems;
};



localStorage.setItem('myLeadz', 'www.exampleLead.com');

console.log( localStorage.getItem('myLeadz')) ;

localStorage.clear();

const tabs = [
    {url: 'Adeyemi Muaz'}
]

let saveEl =  document.getElementById('save-el');

saveEl.addEventListener('click' , function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { 
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
    })
});





























//TEMPLATE STRING/LITERALS PRACTICE
const recipient = 'James';
const sender = 'Muadhuuuuu'

const email = `
               Hey ${recipient}!
               How's it going?? 
               Cheers ${sender}!!!
            `;
console.log(email)



// function clearInput() {
//     let clearBtn = document.getElementById('clear-btn');
//     if (clearBtn.value == listItems) {
//         clearBtn.value = '';
//     }
// }


//.innerHTML

// const containerEl = document.getElementById("container");
// containerEl.innerHTML = '<button>BUY</button>';


// containerEl.addEventListener('click' , function clickMe() {
//     containerEl.innerHTML += '<p>Thank you for purchasing with us</p>'
// });


// PRACTICE 1 
// let theBoxOpener = document.getElementById("boxEl");

// theBoxOpener.addEventListener('click' , function giftPackage() {
//     console.log("I want to open the box!!")
// });

// PRACTICE 2 (USING CONST)
// const basePrice = 520;
// const discount = 120;
// let shippingCost = 12;
// let shippingTime = '5-12 days';


// shippingCost = 15;
// shippingTime = '7-14 days';

// const fullPrice = basePrice - discount + shippingCost;

// console.log('Total Cost: ' + fullPrice + '. It will arrive in ' + shippingTime);





