function Model(view) {
  this.view = view;
  this.menuSound = null;
  this.gameSound = null;

  this.initFireBase = function () {
    //firebase
    this.db = firebase.firestore();
  };

  this.initGameComponents = function () {
    //очистка запуска стрелок, после окончания игровой мелодии
    this.gameSound.addEventListener("ended", () => this.endGame());

    //Статические стрелки игрового поля
    this.arrowUp = document.querySelector(".arrow-up");
    this.arrowRight = document.querySelector(".arrow-right");
    this.arrowLeft = document.querySelector(".arrow-left");
    this.arrowBottom = document.querySelector(".arrow-bottom");
    this.arrowStaticAll = document.querySelectorAll(".arrow-static-style");
    //Движущиеся стрелки игрового поля
    this.containerMoveArrow = document.querySelector(".container-move-arrow");

    //Прогресс и очки
    this.scoresValue = 0;
    this.progressBar = document.querySelector("progress");

    //Идентификатор SetInterval
    this.setIntervalArrow = null;

    //Имя текущего игрока
    this.playerNameInput = document.querySelector(".start-page input");
  };

  this.initGameData = function () {
    //Аудио
    this.tapSound = new Audio("assets/sound/tap.mp3");
    this.hoverSound = new Audio("assets/sound/hover.mp3");
    this.savePlayerNameSound = new Audio("assets/sound/start.mp3");
    this.gameSound = new Audio(
      "assets/sound/TOMORROW X TOGETHER Eien ni Hikare (Black Clover OP 12).mp3"
    );
    this.gameOver = new Audio("assets/sound/game-over.mp3");
    this.gameSound.volume = 0.3; //громкость

    //Color RGB
    this.color = [
      "rgb(16, 152, 85)",
      "rgb(65, 129, 238)",
      "rgb(247, 213, 29)",
      "rgb(212, 114, 1)",
      "rgb(214, 65, 53)",
    ];

    //Scores TABLE
    this.scoresTable = [
      { name: "Amazing", color: this.color[0], scores: 0, points: 3 },
      { name: "Perfect", color: this.color[1], scores: 0, points: 2 },
      { name: "Very Good", color: this.color[2], scores: 0, points: 1 },
      { name: "Ok", color: this.color[3], scores: 0, points: 0 },
      { name: "Miss", color: this.color[4], scores: 0, points: -1 },
    ];
  };

  this.playHoverSound = function () {
    this.hoverSound.play();
  };

  this.playTapSound = function () {
    this.tapSound.play();
  };

  this.modalChangeNameFunc = function () {
    this.view.modalChangeNameFunc();
  };

  this.modalBackToMenuFunc = function () {
    this.view.modalBackToMenuFunc();
    this.menuSound = new Audio("assets/sound/menu.mp3");
    this.menuSound.loop = true; //зацикливание мелодии
    this.menuSound.volume = 0.2; //громкость
    this.menuSound.play();
  };

  this.modalPlayAgainFunc = function () {
    this.view.modalPlayAgainFunc();
    this.clearScore(); // запускаем функцию очистики очков, перед стартом новой игры
    this.startFunc(); //запускаем функцию новой игры
  };

  this.rulesTableCloseFunc = function () {
    this.view.rulesTableCloseFunc();
  };

  this.nameValidate = function (value) {
    //валидация Name и снятие disabled c кнопки save
    value ? this.view.nameValidate(true) : this.view.nameValidate(false);
  };

  this.rulesTableFunc = function () {
    this.view.rulesTableFunc();
  };

  this.topScoresTableFunc = function () {
    const scoresData = [];
    this.db
      .collection("RecordTable") //обращаемся к коллекции
      .orderBy("scores", "desc") //сортируем массив по убыванию количества очков
      .limit(10) //устанавливаем лимит данных
      .get() // запрашиваем данные массива
      .then((e) => {
        // получаем данные массива
        e.forEach((a) => {
          // в цикле парсим массив
          scoresData.push(a.data());
          this.view.topScoresTableFunc(scoresData); // все данные записываем в scoresData
        });
      });
  };

  this.backToStartPageDiv = function () {
    this.view.backToStartPageDiv();
    this.menuSound.pause();
  };

  this.showMenuPage = function () {
    this.view.showMenuPage();
    this.menuSound = new Audio("assets/sound/menu.mp3");
    this.menuSound.loop = true; //зацикливание мелодии
    this.menuSound.volume = 0.2; //громкость
    this.menuSound.play();
    this.savePlayerNameSound.play();
  };

  this.arrowFunc = function (event) {
    //  нажатие на статические стрелки игрового режима, запуск функций
    switch (event.key) {
      case "ArrowLeft":
        this.arrowDataAtribute(0, this.arrowLeft);
        break;
      case "ArrowDown":
        this.arrowDataAtribute(1, this.arrowBottom);
        break;
      case "ArrowUp":
        this.arrowDataAtribute(2, this.arrowUp);
        break;
      case "ArrowRight":
        this.arrowDataAtribute(3, this.arrowRight);
        break;
    }
  };

  this.removeArrowStaticClass = function () {
    this.arrowStaticAll.forEach((e) => this.view.removeArrowStaticClass(e));
  };

  this.arrowDataAtribute = function (dataNumber, arrowStatic) {
    this.view.arrowDataAtribute(arrowStatic);

    //присвоение дата атрибута и перебор каждой стрелки
    //добавляем соответствующий data атрибут(благодаря mathRandom) всем элементам nodeList(стрелке влево - атрибут 0)
    const arrowsAll = document.querySelectorAll(
      `[data-arrow-type-number = "${dataNumber}"]`
    );

    arrowsAll.forEach((e) => {
      this.arrowScores(e, arrowStatic.y); //arrowBottom.y: координата Y статической arrow
    });
  };

  //подсчёт пересечений координат и начисление очков
  this.arrowScores = function (e, arrowStatic) {
    const top1 = e.y; //координата Y динамической arrowLeft
    const ratio = Math.abs(arrowStatic - top1); // ratio - соотношение по модулю Y координат статической и падающих фигур в своём ряду

    if (ratio <= 20) {
      this.scoresValue += 3;
      this.view.arrowScores(e, this.scoresValue, "Amazing!", this.color[0]);
      this.scoresTable[0].scores++; //считаем кол-во попаданий данной категории (amazing)
    } else if (ratio >= 21 && ratio <= 40) {
      // разница (по модулю)верхней координаты статической и всех других фигур в своём ряду
      this.scoresValue += 2;
      this.view.arrowScores(e, this.scoresValue, "Perfect", this.color[1]);
      this.scoresTable[1].scores++; //считаем кол-во попаданий данной категории (amazing)
    } else if (ratio >= 41 && ratio <= 60) {
      // разница (по модулю)верхней координаты статической и всех других фигур в своём ряду
      this.scoresValue += 1;
      this.view.arrowScores(e, this.scoresValue, "Very Good", this.color[2]);
      this.scoresTable[2].scores++; //считаем кол-во попаданий данной категории (amazing)
    } else if (ratio >= 61 && ratio <= 80) {
      // разница (по модулю)верхней координаты статической и всех других фигур в своём ряду
      this.view.arrowScores(e, this.scoresValue, "Ok...", this.color[3]);
      this.scoresTable[3].scores++; //считаем кол-во попаданий данной категории (amazing)
    }
  };

  this.textScoresCreate = function () {
    this.view.textScoresCreate();
  };

  //функция запуска игрового режима
  this.startFunc = function () {
    this.view.startFunc();
    this.clearScore(); // запускаем функцию очистики очков, перед стартом новой игры

    this.menuSound.pause();

    setTimeout(() => {
      this.gameSound.play();
      this.progressBar.max = this.gameSound.duration; // устанавливаем длину песни
    }, 1500); //отложенный запуск игровой мелодии

    setTimeout(() => this.timeoutStartArrowMove(), 3000); //отложенный запуск падения функции стрелок
  };

  //для отложенного запуска падающих стрелок
  this.timeoutStartArrowMove = function () {
    this.setIntervalArrow = setInterval(() => this.startArrowMove(), 236);
  };

  //очистка результатов игры перед стартом следущей
  this.clearScore = function () {
    this.view.clearScore();
    this.scoresValue = 0; //обнуляем счётчик очков
    this.scoresTable.forEach((e) => (e.scores = 0));
  };
  this.endGame = function () {
    clearInterval(this.setIntervalArrow);
    setTimeout(() => this.scoresTableFunc(), 1500);
  };

  //формируем таблицу результатов после игры (модальное окно)
  this.scoresTableFunc = function () {
    this.scoresTable.forEach((e) => this.view.showFinalResultScores(e));
    this.progressBar.value = 0;
    this.gameOver.play();

    this.scoresValue = this.scoresTable.reduce((sum, current) => {
      return sum + current.scores * current.points;
    }, 0);

    if (this.scoresValue < 0) this.scoresValue = 0; // Итоговое кол-во очков не будет уходить в минус

    this.view.scoresTableFunc(this.scoresValue);

    this.db.collection("RecordTable").add({
      name: this.playerNameInput.value,
      scores: this.scoresValue,
    });
  };

  //определение и движение стрелок
  this.startArrowMove = function () {
    const arrowMove = document.createElement("img");
    //4 позиции стрелок
    const arrowPositionArr = [
      this.arrowLeft.x,
      this.arrowBottom.x,
      this.arrowUp.x,
      this.arrowRight.x,
    ];
    const randomInt = this.getRandomInt(4); //cоздаём рандомное число от 0 до 3
    this.view.startArrowMove(arrowMove, randomInt, arrowPositionArr);

    this.progressBar.value = 0;
    const move = () => {
      this.progressBar.value = this.gameSound.currentTime; // обновляем текущее воспроизведение аудио в прогресс баре
      if (arrowMove.y + 10 >= window.innerHeight) {
        this.view.textScoresCreate("Miss", this.color[4]);
        this.view.textScoresRemove(arrowMove);

        this.scoresTable[4].scores++; //считаем кол-во попаданий данной категории (miss)
        if (this.scoresValue !== 0) {
          this.scoresValue -= 1; //отнимаем scores
          this.view.missScoresValue(this.scoresValue); //отображаем scores
        }
      }
      if (this.progressBar.value !== this.gameSound.duration) {
        requestAnimationFrame(move);
      }
    };
    //создаём движение стрелок
    requestAnimationFrame(move);
  };

  this.getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  this.init = function () {
    this.initFireBase();
    this.initGameData();
    this.initGameComponents();
  };
}

export { Model };
