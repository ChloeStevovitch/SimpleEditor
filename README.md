# SimpleEditor


This project aim to convert any div into a simple text editor. 

**IMPORTANT : this is a current light version of the editor. New features as the possiblity to use backspace, selection, ctrl-space, ctrl-b, ctrl-i are coming soon.**


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
Then create one of many div that you want to use as text editor(s). Add them the class "sampleEditor".

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

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the The GNU General Public License - see the [LICENSE.md](LICENSE.md) file for details


