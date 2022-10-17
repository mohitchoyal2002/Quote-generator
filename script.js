// "https://type.fit/api/quotes"

const container = document.querySelector('.quote-container')
const quoteText = document.querySelector('.quote')
const authorName = document.querySelector('.author')
const newQuote = document.querySelector('#new-quote')
const tweetBtn = document.querySelector('#twitter')
const loader = document.querySelector('#loader')

let data = []
const fetchAPI = async()=>{
	loading()
	try {
		response = await fetch('https://type.fit/api/quotes')
		data = await response.json()
		// console.log(data)
		complete()
	} catch (error) {
		console.log('Unable to fetch api')
	}
}


const getRandomIndises = ()=>{
	const index = Math.floor(Math.random()*1643)
	return index 
}

const printQuote = ()=>{

	const index = getRandomIndises()
	quoteText.innerText = data[index].text
	if(data[index].author == null){
		authorName.innerText = Unknown
	}
	else{
		authorName.innerText = data[index].author
	}
	// console.log(data)
}

const tweetFun = ()=>{
	const url = `https://twitter.com/intent/tweet?text=${quoteText.innerText}-${authorName.innerText}`
	window.open(url,'_blank')
}

const loading = ()=>{
	loader.hidden = false
	container.hidden = true
}
const complete = ()=>{
	loader.hidden = true
	container.hidden = false
}

fetchAPI().then(printQuote)
newQuote.addEventListener('click',printQuote)
tweetBtn.addEventListener('click',tweetFun)

// printQuote()