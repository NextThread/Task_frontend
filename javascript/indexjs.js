
// shoving nav content on hover and changing their icon 

let more_subj_1 = document.getElementsByClassName('more_subj_1')[0]
let more_subj_2 = document.getElementsByClassName('more_subj_2')[0]
let more_subj_3 = document.getElementsByClassName('more_subj_3')[0]


let nav1 = document.getElementsByClassName('nav1')[0]
let nav2 = document.getElementsByClassName('nav2')[0]
let nav3 = document.getElementsByClassName('nav3')[0]

let nav1_icon = document.getElementsByClassName('nav1_icon')[0]
let nav2_icon = document.getElementsByClassName('nav2_icon')[0]
let nav3_icon = document.getElementsByClassName('nav3_icon')[0]





nav1.addEventListener('mouseover', () => {
    more_subj_1.style.display = 'flex'
    nav1_icon.classList.toggle('bi-chevron-down')
    nav1_icon.classList.toggle('bi-chevron-up')

})
nav1.addEventListener('mouseout', () => {
    more_subj_1.style.display = 'none'
    nav1_icon.classList.toggle('bi-chevron-down')
    nav1_icon.classList.toggle('bi-chevron-up')

})

nav2.addEventListener('mouseover', () => {
    more_subj_2.style.display = 'flex'
    nav2_icon.classList.toggle('bi-chevron-down')
    nav2_icon.classList.toggle('bi-chevron-up')
})
nav2.addEventListener('mouseout', () => {
    more_subj_2.style.display = 'none'
    nav2_icon.classList.toggle('bi-chevron-down')
    nav2_icon.classList.toggle('bi-chevron-up')

})

nav3.addEventListener('mouseover', () => {
    more_subj_3.style.display = 'flex'
    nav3_icon.classList.toggle('bi-chevron-down')
    nav3_icon.classList.toggle('bi-chevron-up')
})
nav3.addEventListener('mouseout', () => {
    more_subj_3.style.display = 'none'
    nav3_icon.classList.toggle('bi-chevron-down')
    nav3_icon.classList.toggle('bi-chevron-up')

})



// show navoption on navigation click 
let navbar_menu = document.getElementsByClassName('navbar_menu')[0]
let navbar = document.getElementsByClassName('navbar')[0]


navbar_menu.addEventListener('click', () => {
    navbar.classList.toggle('navbar_show')
})











// button functions for changing data and button visibility

let prev_btn = document.getElementById('prev_btn')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let next_btn = document.getElementById('next_btn')

let add = document.getElementsByClassName('moving_page')[0]

var starting_value = 0


function changepage(a, b) {
    console.log('changepage is runing')
    add.innerHTML = ''
    addData(a, b)
    toogle_btn_display()
    scrollToTop()

}

function previes_page() {
    if (starting_value !== 0) {
        add.innerHTML = ''
        addData((starting_value - 10), starting_value)
    }
    toogle_btn_display()
    scrollToTop()


}
function next_page() {
    if (starting_value !== 30) {
        add.innerHTML = ''
        addData((starting_value + 10), (starting_value + 20))
    }
    toogle_btn_display()
    scrollToTop()

}

toogle_btn_display()

function toogle_btn_display() {

    if (starting_value === 0) {
        prev_btn.style.display = 'none'
    }
    else {
        prev_btn.style.display = 'flex'

    }

    if (starting_value === 30) {
        next_btn.style.display = 'none'
    }
    else {
        next_btn.style.display = 'flex'

    }

  

}

// move page to yop 
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    });
}








// this function will add data in html 

function addData(initial_value, final_value) {

    let add = document.getElementsByClassName('moving_page')[0]


    console.log('add data is running')
    console.log(initial_value)
    console.log(final_value)


    for (list of homedata.slice(initial_value, final_value)) {
        starting_value = initial_value

        add.insertAdjacentHTML('afterbegin', `<div class='data'>

    <div class='data_date'>${list.date} <i class="bi bi-square-fill"></i>  ${list.value}</div>
    
    <div class='data_heading'><h1>${list.heading}</h1></div>
    
    <div class='data_para'><p>${list.para}</p></div>
    
    <div class="data_button">
        <button>Continue reading <i class="bi bi-chevron-double-right"></i></button>
    </div>
    
    </div>`)

    }
}

addData(0, 10)