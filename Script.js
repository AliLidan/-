    var answers = [" Хорошего дня!", 
                   " У тебя все получится!", 
                   " Не сдавайся!", 
                   " Твой труд всех сразит.",
                   " Хороший день, чтобы сделать свою работу.", 
                   " Вижу твоё желание поработать тебя победит.", 
                   " Ты лучший программист и веб-разработчик и ...", 
                   " Сегодня твой день!", 
                   " Ты достигнишь своей цели!",
                   " Я верю в тебя!", 
                   " Будь здоров!",
                   " Счастье - залог успеха.", 
                   " Все будет хорошо.",
                   " Вперед!", 
                   " Этот день обещает быть продуктивным.", 
                   " Помоги сделать этот день лучше.", 
                   " Все получится.",
                   " Не забывай - сейчас какой-нибудь админ сайта думает о тебе.", 
                   " Побори свою лень!Давай :)",
				   " Если ты не сделаешь - никто не сможет!"];
    
    window.onload = function() {
       var eight = document.getElementById("eight");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eight-ball");
       
       eightball.addEventListener("click", function() {
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         
       });
    };
