let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')

// TODO when the page loads, select an element at random from the countriesAndCodes array
let randomElement = countriesAndCodes[Math.floor(Math.random()*Object.keys(countriesAndCodes).length)]
// This array is defined in the countries.js file. Your browser treats all 
// JavaScript files as one big file, organized in the order of the script tags
// so countriesAndCodes is available to this file 

console.log(randomElement['alpha-2'])  // You don't need to log countriesAndCodes - just proving it is available

// TODO display the country's name in the randomCountryElement 
randomCountryElement.innerHTML=randomElement.name
// TODO add a click event handler to the submitButton.  When the user clicks the button,
submitButton.addEventListener('click',function () {
    let userAnswer=userAnswerElement.value

    var url = 'http://api.worldbank.org/v2/country/'+randomElement['alpha-2']+'?format=json'

    fetch(url)
        .then( res => res.json())
        .then( issData => {
            console.log(issData)

            let capital = issData[1][0].capitalCity
            console.log(capital)
            if (userAnswer === capital){
                resultTextElement.innerHTML=`Correct! The capital of ${randomElement.name} is ${capital}`
            }
            else{
                resultTextElement.innerHTML=`Wrong - the capital of ${randomElement.name} is not ${userAnswer}, it is ${capital}`
            }
        })
        .catch( err => {
            console.log(err)
        })

})
//  * read the text from the userAnswerElement sdas
//  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
//  * Extract the capital city from the World Bank API response
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. A basic solution requires 
//      the user's answer to be exactly the same as the World Bank answer. If you want 
//      to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Display an appropriate result in the resultTextElement. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"America & Caribbean "},"adminregion":{"id":"LAC","iso2code":"XJ","value":"Latin America & Caribbean (excluding high income)"},"incomeLevel":{"id":"UMC","iso2code":"XT","value":"Upper middle income"},"lendingType":{"id":"IBD","iso2code":"XF","value":"IBRD"},"capitalCity":"Belmopan","longitude":"-88.7713","latitude":"17.2534"}]]