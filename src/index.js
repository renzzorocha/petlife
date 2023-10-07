var faqElements = document.querySelectorAll('.question');

faqElements.forEach(function (question)  {
  question.addEventListener('click', function (){
    question.classList.toggle('active')

  })
})

