# SimpleEditor


This project aim to convert any div into a simple text editor. 

**IMPORTANT : this is a current light version of the editor. New features are currently in developement.**

**List of actual features :
- type text
- "enter" command
- "backspace" command
- "selection" + "backspace" command
**


## Getting Started

Download the file editor.js and create a html file.

### Prerequisites

To run this script you need beforehand to import Jquery

```
<head>
<script src="jquery-3.3.1.min.js"></script>
</head>
```

### Installing


Make the import in your html file (after Jquery) : 
```
<head>
<script src="jquery-3.3.1.min.js"></script>
<script src="editor.js"></script>
</head>

```
Then create one of many div that you want to use as text editor(s). Add them the class "simpleEditor".

_Example :_
```
<body>
    <div class="mybox1 simpleEditor" style="
        background-color: pink;
        height: 500px;
        width: 500px;"></div>
    <div class="mybox2 simpleEditor" style="
        background-color: red;
        height: 500px;
        width: 500px;"></div>

</body>
```


Then run the script : 
```
$(document).ready(function () {
  Editor.initialize();

});
```

Once initialized the console should show the line :

```
Editors are correctly initialized
```

## Authors

* **Chloe STEVOVITCH** - *Initial work* - [https://github.com/ChloeStevovitch]

## License

This project is licensed under the The GNU General Public License - see the [Licence.md](https://github.com/ChloeStevovitch/SimpleEditor/blob/master/LICENSE) file for details



# Donation Button

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=chloe%2estevovitch%40gmail%2ecom&lc=CA&item_name=Github%20SimpleEditor&no_note=0&currency_code=CAD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest)


