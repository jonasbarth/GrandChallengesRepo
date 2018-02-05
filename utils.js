var progress;
progress = new Progress();


function changeTopnav()
{
  var selectValue = document.getElementById("nav").value;
  document.getElementById('myTopnav').style.background = selectValue;
}



function showResponsiveMenu()
{
    var topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav")
    {
        topNav.className += " responsive";
    }
    else
    {
        topNav.className = "topnav";
    }
}

function addEventListeners() {
  var parent = document.getElementById("weeklyTasks");
  parent.addEventListener("click", markButton, false);

  var menuParent = document.getElementById("myTopnav");
  menuParent.addEventListener("click", showHideMenu, false);
}

function markButton(e) {
  if (e.target !== e.current) {

    var cls = e.target.className;
    var button = e.target;
    var oppositeBtn = getOppositeBtn(button);

    switch (cls) {
      case "yes":
        changeToClicked(button);
        changeToUnClicked(oppositeBtn);
        break;

      case "no":
        changeToClicked(button);
        changeToUnClicked(oppositeBtn);
        break;

      case "yesClicked":
        changeToUnClicked(button);
        break;

      case "noClicked":
        changeToUnClicked(button);
        break;
      default:

    }
  }
}



function changeToClicked (button) {
  button.className += "Clicked";
}


function changeToUnClicked(button) {
  var cls = button.className;

  switch (cls) {
    case "yesClicked":
      button.className = "yes";
      break;

    case "noClicked":
      button.className = "no";
      break;
  }
}

function getOppositeBtn(button) {
  var btnId = parseInt(button.id);

  var opposite;

  if (btnId % 2 == 0) {
    btnId +=1;
    var btn = btnId.toString();
    opposite = document.getElementById(btn);


  } else {
    btnId -= 1;
    var btn = btnId.toString();
    opposite = document.getElementById(btn);

  }
  return opposite;
}


function Progress() {
  this.buttons = [];

}


function saveProgress() {
  for (var i = 0; i < 20; i++) {
    var btnId = i.toString();
    var button = document.getElementById(btnId);
    var cls = button.className;

    var saveButton = new Button(btnId, cls);
    append(progress.buttons, saveButton);
  }
  var saveObject = JSON.stringify(progress);
  localStorage.setItem("Progress", saveObject);
  alert("Your progress has been saved");
}


function Button(id, clsName) {
  this.id = id;
  this.clsName = clsName;
}



function loadProgress() {
  if (localStorage.Progress) {
    var progress = JSON.parse(localStorage.Progress);
    var btnArray = progress.buttons;

    for (var i = 0; i < btnArray.length; i++) {

      var cls = btnArray[i].clsName;
      var id = btnArray[i].id;
      var button = document.getElementById(i);
      document.getElementById(id).className = cls;
    }
  }
}


function resetProgress() {
  localStorage.removeItem("Progress");
}



function showHideMenu(e) {
  if (e.current !== e.target) {

    var navElement = e.target;

    switch (navElement.id) {

      case "menuTask" : $("#weeklyTasks").toggle();
                        //$("#game_canvas").hide();
                        $("#game_info").hide();
                        break;

      case "game" :
                    $("#weeklyTasks").hide();
                    $("#game_info").hide();
                    break;

      case "help" : $("#game_info").toggle();
                    $("#weeklyTasks").hide();
                      break;

    }
  }
}

console.log("Hello");
