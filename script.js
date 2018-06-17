const questionPool = (function(){
    let questions = [
            {
                question: 'Який зараз рік?',
                answers: [ '2015', '2016', '2017', '2018' ],
                correct: '3'
            },
            {
                question: 'Яка зараз пора року?',
                answers: [ 'Зима', 'Весна', 'Літо', 'Осінь' ],
                correct: '2'
            },
            {
                question: 'Який зараз місяць?',
                answers: [ 'Червень', 'Липень', 'Повний', 'Білий' ],
                correct: '0'
            }
        ]
        counter = 0;

        function start() {
            let qw;
            for(let i of questions) {
                showQuestion(i);
                qw = prompt('Ваша відповідь', '');
                if(!getPrompt(qw, i.correct)) break;
            }
        }
        function showQuestion(val) {
            console.log(val.question);
            for(let key in val.answers) {
                console.log(key + ' : ' + val.answers[key]);
            }
        }
        function getPrompt(x, y) {
            if(x === null || x === '' || x > 4) x = 'error';
            switch(x.toLowerCase()) {
                case y:
                    counter++;
                    if(counter === questions.length)
                        console.log( `Вітаємо. Гра успішно завершена. Ваша кількість балів рівна - ${counter}`);
                    else
                        console.log(`Ваша відповідь правильна. Ваша кількість балів рівна - ${counter}`);
                    console.log('--------------------------------------');
                    return true;
                case y:
                    console.log(`Ваша кількість балів рівна - ${counter}`);
                    return false;
                default:
                    console.log(`Не вірна відповідь. Гра закінчена. Ваша кількість балів рівна - ${counter}`);
                    console.log('Спробуйте ще раз' );
                    console.log('--------------------------------------');
                    return start();

            }
        }
        return{start}
})();
questionPool.start();
