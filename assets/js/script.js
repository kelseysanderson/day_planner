
var container = $('.container');

var today = moment().format("dddd, MMM Do YYYY")
var currentDate = $('<p>');

//when page loads, check if there is local storage, if there is data put it in, if not do not.
var kjkl = JSON.parse(localStorage.getItem("userTask".value));

//add current date to header
$('.lead').append(currentDate);
currentDate.text(today)

//current hour to match object
currentTime=moment().format("H");

var userTaskInput =localStorage.getItem("input");

//time array
var fullDay = {
    "9":{
    hour:"9",
    ampm:"am",
    task:"",
    },

    "10":{
    hour:"10",
    ampm:"am",
    task:"",
    },

    "11":{
    hour:"11",
    ampm:"am",
    task:"",
    },

    "12":{
    hour:"12",
    ampm:"pm",
    task:"",
    },
  
    "13":{
    hour:"1",
    ampm:"pm",
    task:"",
    } ,  

    "14":{
    hour:"2",
    ampm:"pm",
    task:"",
    },

    "15":{
    hour:"3",
    ampm:"pm",
    task:"",
    },

    "16":{
    hour:"4",
    ampm:"pm",
    task:"",
    },

    "17":{
    hour:"5",
    ampm:"pm",
    task:"",
    }
}

// var dayData = JSON.parse.localStorage.getItem("data");

//set up multiple rows with same div tag 
for (let i = 9; i < 18; i++) {
    const current = fullDay[i.toString()];

    // console.log(currentTime);

    var timeBlock =$('<div>');

    var container = $('.container');

    var hourEl = $('<h2>');
        hourEl.attr("class","hour col-2");
        hourEl.text(`${current.hour}${current.ampm}`);

    var formEl = $('<form>');
        formEl.attr("class","row");

//add coloring based on time (past, present, future)

    var textArea = $('<textarea>');
        userTextArea= $('input[name="userTask"]').val();
        textArea.attr("id", current.hour);
        textArea.attr("name","user-task");
        textArea.attr("type", "text");

        if (currentTime == i){
            textArea.attr("class", "present col-8");
            }else if (currentTime > i){
                textArea.attr("class", "past col-8");
            }else if (currentTime < i){
                textArea.attr("class", "future col-8");
            }

    var saveBtn = $('<button data-idx="$[i]">'); 
        saveBtn.attr("class","saveBtn col-2");
        // saveBtn.prop("data-elemId", userTextArea)
        

    var saveImg = $("<i>")
        saveImg.attr("class", "fas fa-save");

    //append elements 
    container.append(timeBlock);
    formEl.append(textArea);
    formEl.append(hourEl);
    timeBlock.append(formEl);
    formEl.append(textArea);
    formEl.append(saveBtn);
    saveBtn.append(saveImg); 

    
}

container.on("click", ".saveBtn", function(event){
    event.preventDefault();
    // console.log(textArea.val())
    var input = $('.container').children().children().children().eq(1).text
    console.log(input)

});


// function getData(){
// //   var textContent = $("#container").children().children().children().eq(1).value
//     var textContent = $(this).parents("div").siblings("div.entry").find("textarea").val()
//     // .parents('div').siblings("div.entry").find("textarea").val();
//     console.log(textContent)
   
// }

// var textContent.$(this).
//     .find("input").val()
// const inxOfButton = $(this).attr('data-idx');
// fullDay[idxOfButton].entry = dataEntered
// localStorage.//


