window.onload = function () {
    //Adding Event Listeners for buttons
    
    $("button, uploadButton").click(function () {
        document.getElementById("templateText").disabled = false;
    });

    $(".saved").click(function () {
        parseTemplate($(this), true);
    });

    document.getElementById("parse").addEventListener("click", function () {
        parseTemplate(this)
    });

    document.getElementById("download").addEventListener("click", function () {
        downloadEditedJson(event);
    });


};


//Gets the file from the input element and places the text into the template editor
async function uploadTemplate() {
    var file = document.getElementById("templateFile").files[0];
    if (file === undefined) {
        return;
    }
    const template = await parseTemplateFile(file);
    document.getElementById("templateText").innerHTML = template;
}

//Retrieving the file
async function parseTemplateFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
    })
}

//Extracts Keywords from template
function parseTemplate(element, saved) {

    //Place first saved template in template Editor 
    if (saved === true) {
        var files = stored[element.data("templates")];
        var textarea = document.getElementById("templateText");
        document.getElementById("templateText").innerHTML = Object.values(files)[0];
        textarea.disabled = true;
    }

    //Getting the escaped keywords
    var template = document.getElementById("templateText").value;
    var matches = template.match(/\/\*([^\*\/]+)\*\//g);
    if (matches !== null) {
        document.getElementById("error").style.display = "none";
        var aliases = removeDuplicates(matches);
        document.getElementById("valuesTitle").style.display = "block";
        document.getElementById("jsonInput").replaceChildren();
        document.getElementById("jsonInput").appendChild(createPropertyInput("File Name:"));
        for (let i = 0; i < aliases.length; i++) {
            document.getElementById("jsonInput").appendChild(createPropertyInput(aliases[i]));
        }
    } else {
        //Telling the user there were no keywords
        document.getElementById("error").style.display = "block";
    }

    //Assigning different behaviour to the Create JSON button depening on whether it's a stored or user inputted file
    var createFiles = document.getElementById("createJson");
    if (saved === true) {
        createFiles.addEventListener("click", function () {
            generateStoredJSONs(files, true);
            document.getElementById("edit").style.display = "flex";
        });
    }
    else {
        createFiles.addEventListener("click", function () {
            generateStoredJSONs(files, false);
            document.getElementById("edit").style.display = "flex";
        });
    }
    document.getElementById("templateInput").style.visibility = "visible"
}

//Replaces keywords and generate a new file
function generateStoredJSONs(templates, saved) {
    var container = document.getElementById("jsonFiles");
    container.replaceChildren();
    var inputs = document.querySelectorAll(".propertyInput>label>input");
    var file = {
        name: (inputs[0].value) + ".json"
    };
    if (saved === false) {
        for (let i = 0; i < inputs.length; i++) {
            generateJSONObject(file, inputs[i]);
        }
        container.appendChild(createStoredJSON(file, templates));
    }
    else {
        for (const [key, value] of Object.entries(templates)) {
            file = {
                name: (inputs[0].value) + "_" + key + ".json"
            };
            for (let i = 0; i < inputs.length; i++) {
                generateJSONObject(file, inputs[i]);
            }
            container.appendChild(createStoredJSON(file, value));
        }
    }
}


//Creating the JSON file and preparing download
function createStoredJSON(file, value) {
    var json = value;

    //replacing the keywords
    for (const [key, value] of Object.entries(file)) {
        json = json.replaceAll(key, value);
    }

    //Saving the file to Session storage so they can be quickly loaded into the editor
    sessionStorage.setItem(file.name, json);

    //placing file contents into the Preview box
    document.getElementById("previewLabel").innerHTML = file.name;
    document.getElementById("previewText").innerHTML = json;

    //Creating the JSON file
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    var download = document.createElement('button');
    download.value = file.name;
    download.innerHTML = file.name;

    //Loading JSON into the preview box on click
    download.addEventListener('click', function () {
        document.getElementById("previewLabel").innerHTML = this.value;
        document.getElementById("previewText").innerHTML = sessionStorage.getItem(this.value);

    });

    //Downloading the JSON on double click
    download.addEventListener('dblclick', function () {
        document.getElementById("previewLabel").value = this.value;
        document.getElementById("previewText").innerHTML = sessionStorage.getItem(this.value);
        downloadJson(this.value, sessionStorage.getItem(this.value));
    });

    return (download);
}

//Downloading from the edited box for changes
function downloadEditedJson(event) {
    downloadJson(document.getElementById("previewLabel").innerHTML, document.getElementById("previewText").value, event);
}

//Trigger browser download
function downloadJson(file, json, event) {
    event.preventDefault();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    var download = document.createElement('a');
    download.href = url;
    download.download = file;
    download.click();
    URL.revokeObjectURL(url);
    return false;
}

//Dynamically creating Inputs for the new values to be replaced
function createPropertyInput(alias) {
    var div = document.createElement("div");
    div.classList.add("propertyInput");
    var label = document.createElement("label");
    var heading = document.createElement("h4");
    heading.innerHTML = removeDelimiter(alias, "/*", "*/");
    var value = document.createElement("input");
    value.type = "text";
    value.placeholder = "value";
    value.name = alias;
    label.appendChild(heading);
    label.appendChild(value)
    div.appendChild(label);
    return div;
}

function removeDelimiter(alias, delimiterFirst, delimiterLast) {
    alias = alias.replace(delimiterFirst, "");
    alias = alias.replace(delimiterLast, "");
    return alias;
}

function removeDuplicates(array) {
    return array.filter((value, key) => array.indexOf(value) === key);
}

//Assigning new values to the old ones
function generateJSONObject(file, inputs) {
    var newValue = inputs.value;
    var oldValue = inputs.name;
    if (newValue === "/**/") {
        file[oldValue] = removeDelimiter(oldValue, "/*", "*/");
    } else {
        file[oldValue] = newValue;
    }
}
