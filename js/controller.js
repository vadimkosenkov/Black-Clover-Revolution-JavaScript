function Controller(model) {
  this.model = model;

  this.initModalButtons = function () {
    //Модальное окно. Инициализация кнопок
    const modalChangeNameBtn = document.querySelector(".modal__changeName");
    const modalBackToMenuBtn = document.querySelector(".modal__backToMenu");
    const modalPlayAgainBtn = document.querySelector(".modal__playAgain");
    const modalRulesOkBtn = document.querySelector(".modal__rules__Ok");

    //Модальное окно. События
    modalChangeNameBtn.addEventListener("click", () =>
      this.model.modalChangeNameFunc()
    );
    modalBackToMenuBtn.addEventListener("click", () =>
      this.model.modalBackToMenuFunc()
    );
    modalPlayAgainBtn.addEventListener("click", () =>
      this.model.modalPlayAgainFunc()
    );
    modalRulesOkBtn.addEventListener("click", () =>
      this.model.rulesTableCloseFunc()
    );
  };

  this.initMenuPage = function () {
    const btns = document.querySelectorAll("button"); //все кнопки в игре
    const startBtn = document.querySelector(".start");
    const rulesBtn = document.querySelector(".rules");
    const topScoresBtn = document.querySelector(".top-scores");
    const exitBtn = document.querySelector(".exit");
    const savePlayerNameBtn = document.querySelector(".start-page button");

    //звуковые сигналы по ховеру на menu buttons
    // btns.forEach(e => e.addEventListener('mouseover', () => hoverSound.play()))
    btns.forEach((e) =>
      e.addEventListener("mouseover", () => this.model.playHoverSound())
    );
    btns.forEach((e) =>
      e.addEventListener("click", () => this.model.playTapSound())
    );

    //слушатель инпута Name
    const playerNameInput = document.querySelector(".start-page input");
    playerNameInput.addEventListener("input", () =>
      this.model.nameValidate(playerNameInput.value)
    );

    //звуковой сигнал по нажатия на Start Game и переход в режим Game
    startBtn.addEventListener("click", () => this.model.startFunc());
    rulesBtn.addEventListener("click", () => this.model.rulesTableFunc());
    topScoresBtn.addEventListener("click", () =>
      this.model.topScoresTableFunc()
    );
    exitBtn.addEventListener("click", () => this.model.backToStartPageDiv());
    savePlayerNameBtn.addEventListener("click", () =>
      this.model.showMenuPage()
    );
    // ________________________________________________________________

    // db.collection("RecordTable").add({
    //   name: playerNameInput.value,
    //   scores: 1,
    // });

    // db.collection("RecordTable")
    //   .get()
    //   .then((e) => {
    //     e.forEach((a) => {
    //       console.log(a.data());
    //     });
    //   });

    // ________________________________________________________________
  };

  this.initKeyboardListeners = function () {
    //событие keydown статических стрелок
    document.addEventListener("keydown", (event) =>
      this.model.arrowFunc(event)
    );

    //событие keyup статических стрелок
    document.addEventListener("keyup", () =>
      this.model.removeArrowStaticClass()
    );
  };

  this.init = function () {
    this.initModalButtons();
    this.initMenuPage();
    this.initKeyboardListeners();
  };
}

export { Controller };
