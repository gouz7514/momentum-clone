# momentum-clone
## About
This repositiory is a clone coding practice of [momentumdash](https://momentumdash.com/ "momentumdash link")  
referred site : [노마드 코더 - 바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lobby "nomad coder JS practice")  

## Purpose
Practice simple frontend-skil(JS, HTML, CSS) and to make my own chrome starting page.

## Details
### 1.Clock  
[clock.js](clock.js)  
Shows real time by using `Date` object.
```
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
```

### 2.Greeting  
[greeting.js](greeting.js)  
It asks user's name and saves it in local storage.  
And by add and remove classList, it shows user's name.  
![ask name](https://user-images.githubusercontent.com/41367134/98675333-75e96600-239d-11eb-9651-268877c9a1f6.gif)


### 3.Text Color Change  
[color.js](color.js)  
While setting various image as background image, there was a problem that text was hard to read when text color is same with background color.  
To solve this, I added a color picker so that user can change text's color.  
![color picker](https://user-images.githubusercontent.com/41367134/98555829-bd142000-22e5-11eb-81e3-8be49acadb98.PNG)

### 4. TODO
[todo.js](todo.js)  
By writing todos, it saves your input in local storage.  
By clicking delete button, it disappears on screen and also on local storage.  
![create and delete todo](https://user-images.githubusercontent.com/41367134/98675071-19864680-239d-11eb-8147-d5633b808fb3.gif)