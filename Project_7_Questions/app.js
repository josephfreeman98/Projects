//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function () {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });


        question.classList.toggle('show-text');
    })
});


// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

//try yourself
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         console.log(e.currentTarget);
// console.log(e.currentTarget.parentElement.parentElement);
//     })
// })

//the solution 2.
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text');
//     });
// });






























