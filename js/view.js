function View() {
  // Инициализация игровых окон.
  this.initGamePages = function () {
    //Стартовое меню
    this.imagesLogo = document.querySelector(".images-logo-of-game");
    this.container = document.querySelector(".start-container");
    this.startPageDiv = document.querySelector(".start-page");
    this.playerNameInput = document.querySelector(".start-page input");
    this.savePlayerNameBtn = document.querySelector(".start-page button");

    //Основное меню
    this.gameContainer = document.querySelector(".game-container");
    this.btn = document.querySelector(".btn");

    //Игровое поле
    this.headerGameBar = document.querySelector(".header-bar");
    this.soundLoaderProgress = document.querySelector(".sound-loader-progress");
    this.scores = document.querySelector(".scores");
    this.containerMoveArrow = document.querySelector(".container-move-arrow");
    this.containerStaticArrow = document.querySelector(
      ".container-static-arrow"
    );
    this.scoresBoard = document.querySelector(".scores-board");

    //4 вида падающих стрелок
    this.arrowViewArr = [
      "assets/img/arrows/blue_png/leftBlue.png",
      "assets/img/arrows/blue_png/bottomBlue.png",
      "assets/img/arrows/blue_png/upBlue.png",
      "assets/img/arrows/blue_png/rightBlue.png",
    ];
  };

  // Модальное окно. Инициализация компонентов
  this.initModalComponents = function () {
    this.modal = document.querySelector(".modal");
    this.modalContent = document.querySelector(".modal__content");
    this.modalContentSpan = document.querySelector(".modal-content-span");
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.modalHeader = document.querySelector(".modal__header");
    this.modalFooter = document.querySelector(".modal__footer");
    this.modalFooterScores = document.querySelector(".modal__footer__scores");
    this.modalFooterRules = document.querySelector(".modal__footer__rules");
    this.modalFooterImg = document.querySelector("main.modal__content img");
  };

  // Модальное окно. Функция кнопки 'Смена имени'
  this.modalChangeNameFunc = function () {
    this.modal.classList.add("display-none");
    this.modalOverlay.classList.add("display-none");
    this.gameContainer.classList.add("display-none");
    this.containerMoveArrow.classList.add("display-none");
    this.container.classList.add("menu-background");
    this.modalFooter.classList.add("display-none"); // отображаем футтер модального окна
    this.modalFooterScores.classList.add("display-none"); // отображаем кнопки футтера
    // __________
    this.container.classList.remove("display-none");
    this.startPageDiv.classList.remove("display-none");
    this.imagesLogo.classList.remove("display-none");
    // __________
    this.playerNameInput.value = ""; // очистка nickName предыдущей игры
    this.savePlayerNameBtn.setAttribute("disabled", ""); // включаем disabled savePlayerNameBtn
    this.savePlayerNameBtn.classList.add("disabled"); // отключаем hover savePlayerNameBtn
  };

  // Модальное окно. Функция кнопки 'Возврат в меню'
  this.modalBackToMenuFunc = function () {
    this.modal.classList.add("display-none");
    this.modalOverlay.classList.add("display-none");
    this.gameContainer.classList.add("display-none");
    this.containerMoveArrow.classList.add("display-none");
    this.container.classList.add("menu-background");
    this.modalFooter.classList.add("display-none"); // отображаем футтер модального окна
    this.modalFooterScores.classList.add("display-none"); // отображаем кнопки футтера
    // __________
    this.container.classList.remove("display-none");
    this.imagesLogo.classList.remove("display-none");
    this.btn.classList.remove("display-none");
    // __________
    this.playerNameInput.value = ""; // очистка nickName предыдущей игры
  };

  //Модальное окно. Функция кнопки 'Играть снова'
  this.modalPlayAgainFunc = function () {
    this.modal.classList.add("display-none");
    this.modalOverlay.classList.add("display-none");
    this.modalFooter.classList.add("display-none"); // отображаем футтер модального окна
    this.modalFooterScores.classList.add("display-none"); // отображаем кнопки футтера
  };

  //Модальное окно. Функция кнопки 'OK'
  this.rulesTableCloseFunc = function () {
    this.modal.classList.add("display-none"); // скрываем модальное окно
    this.modalOverlay.classList.add("display-none"); //убираем область затемнения вокруг модального окна
    this.modalFooter.classList.add("display-none"); // скрываем футер модального окна
    this.modalFooterRules.classList.add("display-none"); //скрываем футер модального окна с кнопкой 'ok'
    this.modalFooterImg.classList.add("display-none"); // скрываем картинку arrow_keys
  };

  this.nameValidate = function (isValid) {
    //валидация Name и снятие disabled c кнопки save
    if (isValid) {
      this.savePlayerNameBtn.removeAttribute("disabled"); //отключаем disabled savePlayerNameBtn
      this.savePlayerNameBtn.classList.remove("disabled"); // включаем hover savePlayerNameBtn
      this.playerNameInput.style.border = "none"; // убираем красную рамку input
    } else {
      this.savePlayerNameBtn.setAttribute("disabled", ""); // включаем disabled savePlayerNameBtn
      this.savePlayerNameBtn.classList.add("disabled"); // отключаем hover savePlayerNameBtn
      this.playerNameInput.style.border = "3px solid red"; // добавляем красную рампку input
    }
  };

  this.rulesTableFunc = function () {
    //формируем таблицу с правилами игры (модальное окно)
    this.modal.classList.remove("display-none"); // отображаем модальное окно
    this.modalOverlay.classList.remove("display-none"); //затемняем область вокруг модального окна
    this.modalFooter.classList.remove("display-none"); // отображаем футер модального окна
    this.modalFooterRules.classList.remove("display-none"); // отображаем футер модального окна с кнопкой 'ok'
    this.modalFooterImg.src = "assets/img/arrow_keys.png";
    this.modalFooterImg.classList.remove("display-none"); // отображаем картинку arrow_keys
    this.modal.style.animation = "1s linear modalMove"; // анимация модального окна
    this.modalContent.style.animation = "1s linear modalMoveText"; // анимация контента модального окна
    this.modalHeader.innerHTML = "Rules";
    this.modalContentSpan.style.display = "flex";
    this.modalContentSpan.innerHTML =
      "When the moving arrows hit the control point area, press the corresponding key";
  };

  this.topScoresTableFunc = function (scoresData) {
    //формируем таблицу с правилами игры (модальное окно)
    this.modal.classList.remove("display-none"); // отображаем модальное окно
    this.modalOverlay.classList.remove("display-none"); //затемняем область вокруг модального окна
    this.modalFooter.classList.remove("display-none"); // отображаем футер модального окна
    this.modalFooterRules.classList.remove("display-none"); // отображаем футер модального окна с кнопкой 'ok'
    this.modalFooterImg.src = "assets/img/top_scores.png";
    this.modalFooterImg.classList.remove("display-none"); // отображаем картинку arrow_keys
    this.modal.style.animation = "1s linear modalMove"; // анимация модального окна
    this.modalContent.style.animation = "1s linear modalMoveText"; // анимация контента модального окна
    this.modalHeader.innerHTML = "Top Scores";
    this.modalContentSpan.style.display = "flex";
    let readyTopScoresResult = "<table>"; //запишем топ игроков в таблицу и сохраним в одну переменную
    scoresData.forEach(
      // перебираем массив с сервера и записываем в таблицу со столбиками.
      (e) =>
        (readyTopScoresResult += `<tr><td> ${e.name} </td><td></td><td> ${e.scores} </td></tr>`)
    );
    readyTopScoresResult += "</table>"; // закрываем таблицу.
    this.modalContentSpan.innerHTML = readyTopScoresResult; // подставляем готовую таблицу с результатами топ игроков
  };

  this.backToStartPageDiv = function () {
    //Кнопка Exit, возврат на стартовую страницу
    this.btn.classList.add("display-none");
    this.startPageDiv.classList.remove("display-none");
    this.playerNameInput.value = ""; // очистка nickName предыдущей игры
    this.savePlayerNameBtn.setAttribute("disabled", ""); // включаем disabled savePlayerNameBtn
    this.savePlayerNameBtn.classList.add("disabled"); // отключаем hover savePlayerNameBtn
  };

  this.showMenuPage = function () {
    //запуск меню после ввода Name
    this.container.classList.add("menu-background");
    this.btn.classList.remove("display-none");
    this.startPageDiv.classList.add("display-none");
  };

  this.arrowDataAtribute = function (arrowStatic) {
    arrowStatic.classList.add("arrow-static-push");
  };

  this.arrowScores = function (e, scoresValue, text, color) {
    e.remove();
    this.scores.innerText = `Scores: ${scoresValue}`; //редактируем общее кол-во очков
    this.textScoresCreate(text, color);
  };

  this.textScoresCreate = function (text, checkColor) {
    this.scoresBoard.innerHTML = ""; // очищаем содержимое родителя, в котором будут появляться надписи
    const textScores = document.createElement("div"); // создаём div, в который запишем текст
    this.scoresBoard.appendChild(textScores); // помещаем в родителя

    //После окончания анимации
    textScores.addEventListener(
      "animationend",
      () => {
        textScores.style.opacity = "0";
      },
      { once: true }
    );

    // Примененяем стили и запускаем анимацию
    textScores.innerText = text;
    textScores.style.position = "relative";
    textScores.style.color = checkColor;
    textScores.style.animation = "0.5s linear animate";
  };

  this.textScoresRemove = function (arrowMove) {
    arrowMove.remove(); //удаляем стрелку
  };

  this.missScoresValue = function (scoresValue) {
    this.scores.innerText = `Scores: ${scoresValue}`;
  };

  this.removeArrowStaticClass = function (e) {
    e.classList.remove("arrow-static-push");
  };

  this.startFunc = function () {
    this.btn.classList.add("display-none");
    this.container.classList.add("display-none");
    this.imagesLogo.classList.add("display-none");
    this.gameContainer.classList.remove("display-none");
    this.containerStaticArrow.classList.remove("display-none");
    this.headerGameBar.classList.remove("display-none");
  };

  this.clearScore = function () {
    this.scores.innerText = "Scores: 0"; //вписываем стартовое значение окну Scores
    this.modalContentSpan.innerHTML = ""; //обнуляем содержимое модального окна
    this.scoresBoard.innerHTML = ""; // очищаем содержимое родителя, в котором будут появляться надписи
  };
  this.scoresTableFunc = function (scoresValue) {
    this.modal.classList.remove("display-none"); // отображаем модальное окно
    this.modalOverlay.classList.remove("display-none"); //затемняем область вокруг модального окна
    this.modalFooter.classList.remove("display-none"); // отображаем футтер модального окна
    this.modalFooterScores.classList.remove("display-none"); // отображаем кнопки футтера

    this.modal.style.animation = "1s linear modalMove"; // анимация модального окна

    this.modalContentSpan.style.display = "initial";
    this.modalContentSpan.style.animation = "1s linear modalMoveText"; // анимация контента модального окна
    this.modalHeader.innerHTML = `Total Scores: ${scoresValue}`;
  };

  this.showFinalResultScores = function (e) {
    this.modalContentSpan.innerHTML += `<span style='color:${e.color}'>${e.name}: ${e.scores}</span><br>`;
  };

  this.startArrowMove = function (arrowMove, randomInt, arrowPositionArr) {
    this.containerMoveArrow.appendChild(arrowMove);
    this.containerMoveArrow.classList.remove("display-none");
    this.scoresBoard.classList.remove("display-none");
    arrowMove.classList.add("arrow-move-style");
    arrowMove.dataset.arrowTypeNumber = randomInt;
    arrowMove.setAttribute("src", this.arrowViewArr[randomInt]); //используем рандомное число от 0 до3 для создания вида стрелки
    arrowMove.style.left = arrowPositionArr[randomInt] + "px";
    arrowMove.style.top = "-80px"; //начальная координата падающей стрелки
    arrowMove.style.animation = "1.77s linear aniMove"; // расчёт утверждён
  };

  this.init = function () {
    this.initGamePages();
    this.initModalComponents();
  };
}

export { View };
