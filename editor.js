
var Editor = function () {
  var currentHtml = "";
  var ctrlDown = false;
  var activeEditor= new Object();
  var initialized=false;
  //////////////////////////////////keyCODES/////////////////////////////////////////////
  //SPECIAL ACTIONS
  var keyCtrl = 17;
  var keyWin = 91;
  var keyEnter = 13;
  var KeyBackspace = 8;


  //USELESS keyS

  var keyShift = 16;
  var keyAlt = 18;
  var keyLeftArrow = 37;
  var keyUpArrow = 38;
  var keyRightArrow = 39;
  var keyDownArrow = 40;
  var keyTab = 9 ;
  var keyCapslock = 20;
  var keyNumlock = 144;
  var keyF=[112,113,114,115,116,117,118,119,120,121,122,123];
  var keyPageUp = 33;
  var keyPageDown = 34;
  var keyEnd = 35;
  var keyHome = 36;
  var keyInsert = 45;
  var keyDelete = 46;

  var keyUseless = [
    keyShift,
    keyAlt,
    keyLeftArrow,
    keyUpArrow,
    keyRightArrow,
    keyDownArrow,
    keyTab,
    keyCapslock,
    keyNumlock,
    keyEnd,
    keyHome,
    keyInsert,
    keyDelete
  ];
  keyUseless.concat(keyF);

  //////////////////////////////////PRIVATE FUNCTION/////////////////////////////////////

  function _testLastCharacters(string,test){

    try {
      if(string.slice(string.length - test.length) === test){
        return true;
      }else {
        return false;
      }
    }
    catch(error) {
      console.error("Error on the function _testLastCharacters : " + error);
    }

  }
  function _findLastBalise(string,test) {
    //DONNE LES INDICES DE LA DERNIERE BALISE MENTIONNEE
    if (typeof string === 'string' && typeof test === 'string') {
         if (test.length<=string.length) {
          if (test.indexOf(string) > -1) {
            var index = test.indexOf(string);
            var index2 = (test.indexOf(string) + test.length);
            var table = [index, index2];
            return table;
          }
        }
        else {
          return false;
        }
    }else{
      alert('error in the _findLastBalise function');
      return false;
    }

  }
  function _removeFromEnd(string,nb) {
    if (typeof nb === 'number' && Number.isInteger(nb) && typeof string === 'string' ) {
      var LL = string.length;
      var content="";
      if (LL>nb) {
        content = string.substring(0, LL - nb);
      }
      return content;
    }else{
      alert('error in the _removeFromEnd function');
      return false;

    }


  }

  function _extractSelection(){

      var range = window.getSelection().getRangeAt(0);
      var content = range.extractContents();
      return content;

  }

  return {
    /**
     * Call this function to initialize the editors.
     */
    initialize: function () {

      if (initialized) {
        console.log("Book is already initialized");
        return
      }
      initialized = true;


      var arr=$(".simpleEditor");
      if (arr.length == 0) {
        console.log("Error while initializing editors, any element does have the simple editor class");
        return;
      }
      activeEditor=arr.last();
      currentHtml = activeEditor.html();
      console.log("Editors are correctly initialized");

      /*this global function serve to manage de focus. Focused simpleEditor gain a activeEditor class*/
      document.addEventListener("click", function(event){
        if ($(event.target).hasClass("simpleEditor")) {
          activeEditor = $(event.target);
          currentHtml = activeEditor.html();
        }else{
          activeEditor = null;
          currentHtml="";
        }
      });


      $(document).keyup(function(touche) {
        if (touche.keyCode == keyCtrl || touche.keyCode == keyWin) {
          ctrlDown = false;
          return false;
        }
      });
      $(document).keydown(function(touche) {
        // When ctrl or win is pressed
        if (touche.keyCode == keyCtrl || touche.keyCode == keyWin) {
          ctrlDown = true;
          return false;
        }

        // When enter is pressed
        if (touche.which == keyEnter) {
          currentHtml = currentHtml + "</p><p>";
        }
        // When backspace is pressed
        else if(touche.which == KeyBackspace) {

          if (!window.getSelection().getRangeAt(0).collapsed){
            _extractSelection();
            if ($(activeEditor).length>0) {
              currentHtml=activeEditor.html();
            }else{
              return;
            }
          }

          else if (_testLastCharacters(currentHtml,">")) {
            if (_testLastCharacters(currentHtml, "</p><p>")) {
              currentHtml = _removeFromEnd(currentHtml,7);
            }
            else if (_testLastCharacters(currentHtml, "</p>")) {
              currentHtml = _removeFromEnd(currentHtml,5);

            } else if (_testLastCharacters(currentHtml, "<p>")) {
              currentHtml = _removeFromEnd(currentHtml,4);

            }else if (_testLastCharacters(currentHtml, "<i>")) {
              currentHtml = _removeFromEnd(currentHtml,4);
            }else if (_testLastCharacters(currentHtml, "<b>")) {
              currentHtml = _removeFromEnd(currentHtml,4);
            }
            else if (_testLastCharacters(currentHtml, "</i>")) {
              currentHtml = _removeFromEnd(currentHtml,5);
              if (_findLastBalise(currentHtml, "<i>")) {
                var index = _findLastBalise(currentHtml, "<i>")[0];
                var index2 = _findLastBalise(currentHtml, "<i>")[1];
                currentHtml = currentHtml.slice(0, index) + currentHtml.slice(index2);
              }
            } else if (_testLastCharacters(currentHtml, "</b>")) {
              currentHtml = _removeFromEnd(currentHtml,5);
              if (_findLastBalise(currentHtml, "<b>")) {
                var index = _findLastBalise(currentHtml, "<b>")[0];
                var index2 = _findLastBalise(currentHtml, "<b>")[1];
                currentHtml = currentHtml.slice(0, index) + currentHtml.slice(index2);
              }
            }else{
              currentHtml = _removeFromEnd(currentHtml,1);
            }
          }else {
            currentHtml = _removeFromEnd(currentHtml,1);

          }

          }


          // key that should not show
        else if (keyUseless.includes(touche.keyCode)){
        }
        else {
          //always open by <p> if the text is empty or if any <p> is open
          if (!currentHtml || currentHtml.length <= 1 ) {
            currentHtml = "<p>" + touche.key;
          }
          else if (_testLastCharacters(currentHtml, "</p>")){
            currentHtml = currentHtml + "<p>" + touche.key;
          }
          else {
            currentHtml = currentHtml + touche.key;
          }
        }
        if ($(activeEditor).length>0) {
          activeEditor.html(currentHtml);
        }
      });
    }

  };
}();

