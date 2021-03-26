// //firebase
// const db = firebase.firestore();

//__________________Стартовое меню__________________________
// const imagesLogo = document.querySelector('.images-logo-of-game')
// const container = document.querySelector('.start-container')
// const btns = document.querySelectorAll('button') //все кнопки в игре
// const startPageDiv = document.querySelector('.start-page')
// const playerNameInput = document.querySelector('.start-page input')
// const savePlayerNameBtn = document.querySelector('.start-page button')

//__________________Основное меню__________________________
// const gameContainer = document.querySelector('.game-container')
// const startBtn = document.querySelector('.start')
// const rulesBtn = document.querySelector('.rules')
// const scoresBtn = document.querySelector('.top-scores')
// const exitBtn = document.querySelector('.exit')
// const btn = document.querySelector('.btn')

//__________________Игровое поле__________________________
//Header игрового поля
// const progressBar = document.querySelector('progress')
// const headerGameBar = document.querySelector('.header-bar')
// const soundLoaderProgress = document.querySelector('.sound-loader-progress')
// const scores = document.querySelector('.scores')
// let scoresValue = 0

//Статические стрелки игрового поля
// const containerStaticArrow = document.querySelector('.container-static-arrow')
// const arrowStaticAll = document.querySelectorAll('.arrow-static-style')
// const arrowUp = document.querySelector('.arrow-up')
// const arrowRight = document.querySelector('.arrow-right')
// const arrowLeft = document.querySelector('.arrow-left')
// const arrowBottom = document.querySelector('.arrow-bottom')

//Движущиеся стрелки игрового поля
// const containerMoveArrow = document.querySelector('.container-move-arrow')
// const scoresBoard = document.querySelector('.scores-board')
// let setIntervalArrow

// //4 вида падающих стрелок
// const arrowViewArr = [
//     'assets/img/arrows/blue_png/leftBlue.png',
//     'assets/img/arrows/blue_png/bottomBlue.png',
//     'assets/img/arrows/blue_png/upBlue.png',
//     'assets/img/arrows/blue_png/rightBlue.png',
// ]

//__________________Audio__________________________
// let menuSound
// const tapSound = new Audio('assets/sound/tap.mp3');
// const hoverSound = new Audio('assets/sound/hover.mp3');
// const savePlayerNameSound = new Audio('assets/sound/start.mp3')
// const gameSound = new Audio('assets/sound/TOMORROW X TOGETHER Eien ni Hikare (Black Clover OP 12).mp3')
// const gameOver = new Audio('assets/sound/game-over.mp3')
// gameSound.volume = 0.3 //громкость

//__________________Модальное окно__________________________
// const modal = document.querySelector('.modal')
// const modalContent = document.querySelector('.modal__content')
// const modalContentSpan = document.querySelector('.modal-content-span')
// const modalOverlay = document.querySelector('.modal-overlay')
// const modalHeader = document.querySelector('.modal__header')
// const modalChangeNameBtn = document.querySelector('.modal__changeName')
// const modalBackToMenuBtn = document.querySelector('.modal__backToMenu')
// const modalPlayAgainBtn = document.querySelector('.modal__playAgain')
// const modalRulesOkBtn = document.querySelector('.modal__rules__Ok')
// const modalFooter = document.querySelector('.modal__footer')
// const modalFooterScores = document.querySelector('.modal__footer__scores')
// const modalFooterRules = document.querySelector('.modal__footer__rules')
// const modalFooterImg = document.querySelector('main.modal__content img')

// //Модальное окно. События
// modalChangeNameBtn.addEventListener('click', modalChangeNameFunc)
// modalBackToMenuBtn.addEventListener('click', modalBackToMenuFunc)
// modalPlayAgainBtn.addEventListener('click', modalPlayAgainFunc)
// modalRulesOkBtn.addEventListener('click', rulesTableCloseFunc)

// // Модальное окно. Функция кнопки 'Смена имени'
// function modalChangeNameFunc() {
//     modal.classList.add('display-none')
//     modalOverlay.classList.add('display-none')
//     gameContainer.classList.add('display-none')
//     containerMoveArrow.classList.add('display-none')
//     container.classList.add('menu-background')
//     modalFooter.classList.add('display-none') // отображаем футтер модального окна
//     modalFooterScores.classList.add('display-none') // отображаем кнопки футтера
//         // __________
//     container.classList.remove('display-none')
//     startPageDiv.classList.remove('display-none')
//     imagesLogo.classList.remove('display-none')
//         // __________
//     playerNameInput.value = '' // очистка nickName предыдущей игры
//     savePlayerNameBtn.setAttribute('disabled', '') // включаем disabled savePlayerNameBtn
//     savePlayerNameBtn.classList.add('disabled') // отключаем hover savePlayerNameBtn
// }

// // Модальное окно. Функция кнопки 'Возврат в меню'
// function modalBackToMenuFunc() {
//     modal.classList.add('display-none')
//     modalOverlay.classList.add('display-none')
//     gameContainer.classList.add('display-none')
//     containerMoveArrow.classList.add('display-none')
//     container.classList.add('menu-background')
//     modalFooter.classList.add('display-none') // отображаем футтер модального окна
//     modalFooterScores.classList.add('display-none') // отображаем кнопки футтера
//         // __________
//     container.classList.remove('display-none')
//     imagesLogo.classList.remove('display-none')
//     btn.classList.remove('display-none')
//         // __________
//     playerNameInput.value = '' // очистка nickName предыдущей игры
//     menuSound = new Audio('assets/sound/menu.mp3')
//     menuSound.loop = true //зацикливание мелодии
//     menuSound.volume = 0.2 //громкость
//     menuSound.play()
// }

// //Модальное окно. Функция кнопки 'Играть снова'
// function modalPlayAgainFunc() {
//     modal.classList.add('display-none')
//     modalOverlay.classList.add('display-none')
//     modalFooter.classList.add('display-none') // отображаем футтер модального окна
//     modalFooterScores.classList.add('display-none') // отображаем кнопки футтера
//     clearScore() // запускаем функцию очистики очков, перед стартом новой игры
//     startFunc() //запускаем функцию новой игры
// }

// //очистка результатов игры перед стартом следущей
// function clearScore() {
//     scoresTable.forEach((e) => e.scores = 0)
//     scores.innerText = 'Scores: 0' //вписываем стартовое значение окну Scores
//     scoresValue = 0 //обнуляем счётчик очков
//     modalContentSpan.innerHTML = '' //обнуляем содержимое модального окна
//     scoresBoard.innerHTML = '' // очищаем содержимое родителя, в котором будут появляться надписи
// }

// //__________________Color RGB__________________________
// const color = [
//     'rgb(16, 152, 85)',
//     'rgb(65, 129, 238)',
//     'rgb(247, 213, 29)',
//     'rgb(212, 114, 1)',
//     'rgb(214, 65, 53)'
// ]

// //__________________Scores TABLE__________________________
// const scoresTable = [
//     { name: 'Amazing', color: color[0], scores: 0 },
//     { name: 'Perfect', color: color[1], scores: 0 },
//     { name: 'Very Good', color: color[2], scores: 0 },
//     { name: 'Ok', color: color[3], scores: 0 },
//     { name: 'Miss', color: color[4], scores: 0 }
// ]

// //формируем таблицу результатов после игры (модальное окно)
// function scoresTableFunc() {
//     gameOver.play()
//     scoresTable.forEach((e) => {
//         modalContentSpan.innerHTML +=
//             `<span style='color:${e.color}'>${e.name}: ${e.scores}</span><br>`
//     })
//     progressBar.value = 0
//     modal.classList.remove('display-none') // отображаем модальное окно
//     modalOverlay.classList.remove('display-none') //затемняем область вокруг модального окна
//     modalFooter.classList.remove('display-none') // отображаем футтер модального окна
//     modalFooterScores.classList.remove('display-none') // отображаем кнопки футтера

//     modal.style.animation = '1s linear modalMove'; // анимация модального окна
//     modalContentSpan.style.animation = '2s linear modalMoveText'; // анимация контента модального окна
//     modalHeader.innerHTML = `Total Scores: ${scoresValue}`
// }

// //формируем таблицу с правилами игры (модальное окно)
// function rulesTableFunc() {
//     modal.classList.remove('display-none') // отображаем модальное окно
//     modalOverlay.classList.remove('display-none') //затемняем область вокруг модального окна
//     modalFooter.classList.remove('display-none') // отображаем футер модального окна
//     modalFooterRules.classList.remove('display-none') // отображаем футер модального окна с кнопкой 'ok'
//     modalFooterImg.classList.remove('display-none') // отображаем картинку arrow_keys
//     modal.style.animation = '1s linear modalMove'; // анимация модального окна
//     modalContent.style.animation = '2s linear modalMoveText'; // анимация контента модального окна
//     modalHeader.innerHTML = 'Rules'
//     modalContentSpan.innerHTML = 'When the moving arrows hit the control point area, press the corresponding key'
// }

// //закрываем таблицу с правилами игры (модальное окно)
// function rulesTableCloseFunc() {
//     modal.classList.add('display-none') // скрываем модальное окно
//     modalOverlay.classList.add('display-none') //убираем область затемнения вокруг модального окна
//     modalFooter.classList.add('display-none') // скрываем футер модального окна
//     modalFooterRules.classList.add('display-none') //скрываем футер модального окна с кнопкой 'ok'
//     modalFooterImg.classList.add('display-none') // скрываем картинку arrow_keys
// }

// //функция текста степени попадания
// function textScoresCreate(text, checkColor) {
//     scoresBoard.innerHTML = '' // очищаем содержимое родителя, в котором будут появляться надписи
//     const textScores = document.createElement('div') // создаём div, в который запишем текст
//     scoresBoard.appendChild(textScores) // помещаем в родителя

//     //После окончания анимации
//     textScores.addEventListener('animationend', () => {
//         textScores.style.opacity = '0'
//     }, { once: true })

//     // Примененяем стили и запускаем анимацию
//     textScores.innerText = text
//     textScores.style.position = 'relative';
//     textScores.style.color = checkColor;
//     textScores.style.animation = '0.5s linear animate';
// }

// //звуковые сигналы по ховеру на menu buttons
// btns.forEach(e => {
//     e.addEventListener('mouseover', () => hoverSound.play())
// })
// btns.forEach(e => {
//     e.addEventListener('click', () => tapSound.play())
// })

// //звуковой сигнал по нажатия на Start Game и переход в режим Game
// startBtn.addEventListener('click', startFunc);

// rulesBtn.addEventListener('click', rulesTableFunc);
// scoresBtn.addEventListener('click', function() {
//     // db.collection('RecordTable').add({
//     //     name: playerNameInput.value,
//     //     scores: 001
//     // })

//     db.collection('RecordTable').get().then((e) => {
//         e.forEach((a) => {
//             console.log(a.data());
//         })
//     })
// });
// exitBtn.addEventListener('click', backToStartPageDiv)
// savePlayerNameBtn.addEventListener('click', showMenuPage)

// //слушатель инпута Name
// playerNameInput.addEventListener('input', nameValidate)

// //валидация Name и снятие disabled c кнопки save
// function nameValidate() {
//     if (playerNameInput.value) {
//         savePlayerNameBtn.removeAttribute('disabled') //отключаем disabled savePlayerNameBtn
//         savePlayerNameBtn.classList.remove('disabled') // включаем hover savePlayerNameBtn
//         playerNameInput.style.border = 'none' // убираем красную рамку input
//     } else {
//         savePlayerNameBtn.setAttribute('disabled', '') // включаем disabled savePlayerNameBtn
//         savePlayerNameBtn.classList.add('disabled') // отключаем hover savePlayerNameBtn
//         playerNameInput.style.border = '3px solid red' // добавляем красную рампку input
//     }
// }

// //запуск меню после ввода Name
// function showMenuPage() {
//     //menuSound создаём всегда тут, чтобы после возврата в меню - песня запускалась с начала
//     menuSound = new Audio('assets/sound/menu.mp3')
//     menuSound.loop = true //зацикливание мелодии
//     menuSound.volume = 0.2 //громкость
//     menuSound.play()
//     container.classList.add('menu-background')
//     savePlayerNameSound.play()
//     btn.classList.remove('display-none')
//     startPageDiv.classList.add('display-none')
// }

// //Кнопка Exit, возврат на стартовую страницу
// function backToStartPageDiv() {
//     menuSound.pause()
//     btn.classList.add('display-none')
//     startPageDiv.classList.remove('display-none')
//     playerNameInput.value = '' // очистка nickName предыдущей игры
//     savePlayerNameBtn.setAttribute('disabled', '') // включаем disabled savePlayerNameBtn
//     savePlayerNameBtn.classList.add('disabled') // отключаем hover savePlayerNameBtn
// }

// //функция запуска игрового режима
// function startFunc() {
//     clearScore() // запускаем функцию очистики очков, перед стартом новой игры
//     btn.classList.add('display-none')
//     container.classList.add('display-none')
//     gameContainer.classList.remove('display-none')
//     containerStaticArrow.classList.remove('display-none')
//     imagesLogo.classList.add('display-none')
//     menuSound.pause()
//     setTimeout(function() {
//             gameSound.play()
//             progressBar.max = gameSound.duration // устанавливаем длину песни
//         }, 1500) //отложенный запуск игровой мелодии

//     setTimeout(timeoutStartArrowMove, 3000) //отложенный запуск падения функции стрелок

//     // setTimeout(scoresTableFunc, 10000)

//     headerGameBar.classList.remove('display-none')
// }

// //событие keydown статических стрелок, запуск функции добавления класса
// document.addEventListener('keydown', function(event) {
//     // arrowFuncObj[event.key];
//     arrowFunc(event)
// })

// //событие keyup статических стрелок, очистка класса
// document.addEventListener('keyup', function() {
//     arrowStaticAll.forEach((e) => e.classList.remove('arrow-static-push'))
// })

// //подсчёт пересечений координат и начисление очков
// function arrowScores(e, arrowStatic) {
//     const top1 = e.y //координата Y динамической arrowLeft
//     const ratio = Math.abs(arrowStatic - top1) // ratio - соотношение по модулю Y координат статической и падающих фигур в своём ряду
//     if (ratio <= 20) {
//         e.remove()
//         scores.innerText = `Scores: ${scoresValue +=3}` //редактируем общее кол-во очков
//         scoresTable[0].scores++ //считаем кол-во попаданий данной категории (amazing)
//             textScoresCreate('Amazing!', color[0])
//     } else if (ratio >= 21 && ratio <= 40) { // разница (по модулю)верхней координаты статической и всех других фигур в своём ряду
//         e.remove()
//         scores.innerText = `Scores: ${scoresValue +=2}` //редактируем общее кол-во очков
//         scoresTable[1].scores++ //считаем кол-во попаданий данной категории (perfect)
//             textScoresCreate('Perfect', color[1])
//     } else if (ratio >= 41 && ratio <= 60) { // разница (по модулю)верхней координаты статической и всех других фигур в своём ряду
//         e.remove()
//         scores.innerText = `Scores: ${scoresValue +=1}` //редактируем общее кол-во очков
//         scoresTable[2].scores++ //считаем кол-во попаданий данной категории (very good)
//             textScoresCreate('Very Good', color[2])
//     } else if (ratio >= 61 && ratio <= 80) { // разница (по модулю)верхней координаты статической и всех других фигур в своём ряду
//         e.remove()
//         textScoresCreate('Ok...', color[3])
//         scoresTable[3].scores++ //считаем кол-во попаданий данной категории (ok)
//     }
// }

// //присвоение дата атрибута и перебор каждой стрелки
// function arrowDataAtribute(dataNumber, arrowStatic) {
//     arrowStatic.classList.add('arrow-static-push')
//         //добавляем соответствующий data атрибут(благодаря mathRandom) всем элементам nodeList(стрелке влево - атрибут 0)
//     const arrowsAll = document.querySelectorAll(`[data-arrow-type-number = "${dataNumber}"]`)
//     arrowsAll.forEach((e) => {
//         arrowScores(e, arrowStatic.y) //arrowBottom.y: координата Y статической arrow
//     })
// }

// //  нажатие на статические стрелки игрового режима, запуск функций
// function arrowFunc(event) {
//     switch (event.key) {
//         case 'ArrowLeft':
//             arrowDataAtribute(0, arrowLeft)
//             break;
//         case 'ArrowDown':
//             arrowDataAtribute(1, arrowBottom)
//             break;
//         case 'ArrowUp':
//             arrowDataAtribute(2, arrowUp)
//             break;
//         case 'ArrowRight':
//             arrowDataAtribute(3, arrowRight)
//             break;
//     }
// }

//альтернативный вариант arrowFunc(event) со своими switch
// const arrowFuncObj = {
//         ArrowLeft: arrowDataAtribute(0, arrowLeft),
//         ArrowDown: arrowDataAtribute(1, arrowBottom),
//         ArrowUp: arrowDataAtribute(2, arrowUp),
//         ArrowRight: arrowDataAtribute(3, arrowRight),
//     }

// //определение и движение стрелок
// function startArrowMove() {

//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }
//     let randomInt = getRandomInt(4) //cоздаём рандомное число от 0 до 3

//     const arrowMove = document.createElement('img')
//     containerMoveArrow.appendChild(arrowMove)
//     containerMoveArrow.classList.remove('display-none')
//     scoresBoard.classList.remove('display-none')
//     arrowMove.classList.add('arrow-move-style')
//     arrowMove.dataset.arrowTypeNumber = randomInt

//     arrowMove.setAttribute('src', arrowViewArr[randomInt]) //используем рандомное число от 0 до3 для создания вида стрелки

//     //4 позиции стрелок
//     const arrowPositionArr = [
//         arrowLeft.x,
//         arrowBottom.x,
//         arrowUp.x,
//         arrowRight.x,
//     ]

//     arrowMove.style.left = arrowPositionArr[randomInt] + 'px'
//     arrowMove.style.top = '-80px' //начальная координата падающей стрелки
//     arrowMove.style.animation = '1.77s linear aniMove'; // тестирование
//     progressBar.value = 0

//     //создаём движение стрелок
//     requestAnimationFrame(function move() {
//         progressBar.value = gameSound.currentTime // обновляем текущее воспроизведение аудио в прогресс баре

//         // arrowMove.style.top = parseInt(arrowMove.style.top) + 10 + 'px' //скорость падения стрелки (смещение), превращаем '000px' в '000'

//         // координата падающей стрелки > рамки браузера (625 на данном экране)
//         if (arrowMove.y + 10 >= window.innerHeight) {
//             textScoresCreate('Miss', color[4])
//             scoresTable[4].scores++ //считаем кол-во попаданий данной категории (miss)

//                 arrowMove.remove(); //удаляем стрелку
//             scoresTable[4].scores++
//                 if (scoresValue != 0) {
//                     scores.innerText = `Scores: ${scoresValue -=1}` //отнимаем scores
//                 }
//         }
//         if (progressBar.value !== gameSound.duration) {
//             requestAnimationFrame(move)
//         }

//     })
// }

// //очистка запуска стрелок, после окончания игровой мелодии
// gameSound.addEventListener('ended', endGame)

// function endGame() {
//     clearInterval(setIntervalArrow)
//     setTimeout(scoresTableFunc, 1500)
// }

//примечания
//•добавить красивый лоадер перехда по меню
//•отцентрировать static arrow
//•сделать, чтобы летящие стрелки уходили за нижний горизонт
//•сделать, чтобы progress bar был выше слоем, чем падающие стрелки
//•сделать рандом вида выпадающей стрелки в соответствующий такт
//•сделать рандом соответствующего style.left
//•сделать коэффициент ускорения и коэф интервала создания
//•сделать шкалу пересечения статических стрелок и падающихков (px)
//•сделать градацию точности пересечений с появляющимися надписями:
// amazing! 3point (<=20px)
// perfect! 2point (<=21 && <=30px)
// very good 1point (<=31 && <=40px)
// ok 0point (<=41 && <=80px)
// miss -1point (<=81px && <=120px)
//•обрезать песню до ~60сек
//•стрелки, которые попали в шкалу пересечению по event mousedown - remove
//высчитать BPM и настроить setInterval в такт и полутакт(как вариант без коэф. ускорения)
//после окончания песни - вывести на экран таблицу результатов, с кол-вом попаданий, промахов и итогового кол-ва scores
//добавить в игровое поле nickName
//добавить возможность отключить звук
//стилизация amazing/miss + анимация

//сохранить playerNameInput.value
// добавит game-over sound
//when the moving arrows hit the control point area, press the corresponding key

// modalFooter.classList.remove('display-none') // отображаем футтер модального окна
// modalFooterScores.classList.remove('display-none') // отображаем кнопки футтера
