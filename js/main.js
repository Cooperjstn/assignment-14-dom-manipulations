// GO!

// TASK 1 -- Show/Hide Nav

var butOne = document.querySelector('button') ///set variable equiv to button
var navMenu = document.querySelector('.nav-menu') ///set variable equiv to whole nav menu div (aka the thing we want to hide)


var toggle = function(click) { ////create a function to show and hide the nav menu
    console.log('click') ////log the word click in the console to see if our function is working
    document.querySelector('button').innerHTML = 'sho nav' ///change the text on the button
    if (navMenu.className === 'nav-menu') { ///if the nav menu's class is ".nav-menu"
        ////then change it's class name to ".nav-menu-hidden" aka hide the nav menu
        document.querySelector('.nav-menu').className = 'nav-menu-hidden'
        document.querySelector('button').innerHTML = 'sho nav'
    } else if (navMenu.className != ".nav-menu"){ ///if it's class name is not ".nav-menu"
        ////then change it to ".nav-menu aka show the nav menu again"
        document.querySelector('button').innerHTML = 'hide nav'
        document.querySelector('.nav-menu-hidden').className = 'nav-menu'
    }
}

////add an event listener to the click of the button (aka butOne from the variable above) and on the click of the button run the toggle function that we created
butOne.addEventListener('click', toggle)





// TASK 2 -- Select an Icon
//unselect the rocket
var movMnt = document.querySelector('.wish-list')
var unClick = function(touch){
//console.log('hey')
//console.log(touch.target.className)
if (touch.target.className === 'option selected'){
  //console.log ('bye')
  touch.target.className ='option'
} else if (touch.target.className === 'option') {
  //console.log ('by2')
  touch.target.className = 'option selected'
}

}
movMnt.addEventListener('click', unClick)


// TASK 3 -- Move Item From List to List
var green = document.querySelector('.good-standing-section')
var orange = document.querySelector('.probation-section')
var mveMe = function(thingIClickedOn){
//console.log('hey')

var list = document.querySelectorAll('.good-standing-list li')
var words = thingIClickedOn.target.innerHTML
if (document.querySelector('.probation-list').innerHTML +="<li>"+words+"</li>"){
//console.log(words)
thingIClickedOn.target.remove()
} else {
  document.querySelector('.good-standing-list').innerHTML +="<li>"+words+"</li>"
}

}


  var mveTwo = function(tico){
    console.log('hello')
    var badlist = document.querySelectorAll('.probation-list')
    var badwords = tico.target.innerHTML
  document.querySelector ('.good-standing-list').innerHTML += "<li>"+badwords+"</li>"
    //console.log('cheese')}
    tico.target.remove()
}

//thingIClickedOn.target.add()
  //console.log(words)

//}
green.addEventListener('click',mveMe)
orange.addEventListener('click',mveTwo)


// TASK 4 -- Add Guest to List
var conText = function changeTest ()
{ form.text.value = form.ul.value }

// var push = document.getElementById('text');
// var lisT = document.createElement('li');
// var position = document.getElementsByTagName('ul')[0];
//
// position.innerHTML='<li>'+'text'+'</li>';
//




// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
