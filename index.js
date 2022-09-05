const card = document.querySelector('.card')
const btnSubmit = document.querySelector('.btn-submit')
const cardHiden = document.querySelector('.card-thank-you')
const selected = document.querySelector('.you-selected')

const rating = (num) => {
  selected.innerHTML = `You selected ${num} out of 5`
   
   btnSubmit.onclick = () => {
     card.style.display='none'
     cardHiden.style.display='flex'
   } 
}
  
  



