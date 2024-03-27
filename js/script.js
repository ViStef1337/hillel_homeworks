'use strict'
const ulTag = document.querySelector('ul')
let totalPages = 21

function element (totalPages,page){
    let liTag = ''
    let activeLi;
    let beforePages = page - 1 //5 - 1 = 4
    let afterPages = page + 1 //5 + 1 = 6
    if (page > 1){//if page value is grater than 1 then add new li which is previous button
        liTag += `<li class="btn prev" onclick="element(totalPages,${page - 1})"><span><i class="fa-solid fa-chevron-left"></i>Prev</span></li>`
    }

    // if (page > 2){ //if page value grater than 2 then add new li tag with 1 value
    //     liTag += `<li class="numb" onclick="element (totalPages,1)"><span>1</span></li>`
    //     if (page > 3){ //if page value is grater than 3 then add new li tag with (...)
    //         liTag += `<li class="dots"><span>...</span></li>`
    //     }
    // }

    //how many pages or li show before the current li
    // if (page == totalPages){ //if page value os equal to totalPages the substract by -2 to the beforePages value
    //     beforePages = beforePages - 2
    // }else if (page == totalPages - 1){ //else if page value os equal to totalPages by -1 the substract by -1 to the beforePages value
    //     beforePages = beforePages -1
    // }

    //how many pages or li show after the current li
    // if (page == 1){//if page value os equal to 1 then add by +2 to the afterPages value
    //     afterPages = afterPages + 2
    // }else if (page == 2){ //else if page value os equal to 2 then add by +1 to the afterPages value
    //     beforePages = beforePages + 1
    // }


    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if (pageLength > totalPages){
            continue
        }
        if (pageLength == 0 || pageLength == 0){ // if pageLength is equal to 0 then add +1 to the pageLength value
            pageLength = pageLength + 1
        }
        if (page == pageLength){ //if page value is equal to pageLength then assign the active string in the activeLi variable
            activeLi = "active"
        }else { //else leave empty to the activeLi variable
            activeLi = ""
        }
        liTag += `<li class="numb ${activeLi}" onclick="element (totalPages,${pageLength})"><span>${pageLength}</span></li>`
    }

    // if (page < totalPages - 1){ //if page value grater than totalPages by -1 then show the last li or page which is 20
    //     if (page < totalPages - 2){ //if page value grater than totalPages by -2 then show the last (...) before last page
    //         liTag += `<li class="dots"><span>...</span></li>`
    //     }
    //     liTag += `<li class="numb" onclick="element (totalPages,${totalPages})"><span>${totalPages}</span></li>`
    // }

    if (page < totalPages){ //if page value is less than totalPages value then add new li which is next button
        liTag += `<li class="btn next" onclick="element(totalPages,${page + 1})"><span>Next<i class="fa-solid fa-chevron-right"></i></span></li>`
    }
    ulTag.innerHTML = liTag
}
element(totalPages,1) //calling function with passing values






export function qwe(){
    console.log('hello')
}






























// const ulTag = document.querySelector('ul')
// let totalPages = 20
//
// function element (totalPages,page){
//     let liTag = ''
//     let activeLi;
//     let beforePages = page - 1 //5 - 1 = 4
//     let afterPages = page + 1 //5 + 1 = 6
//     if (page > 1){//if page value is grater than 1 then add new li which is previous button
//         liTag += `<li class="btn prev" onclick="element(totalPages,${page - 1})"><span><i class="fa-solid fa-chevron-left"></i>Prev</span></li>`
//     }
//
//     if (page > 2){ //if page value grater than 2 then add new li tag with 1 value
//         liTag += `<li class="numb" onclick="element (totalPages,1)"><span>1</span></li>`
//         if (page > 3){ //if page value is grater than 3 then add new li tag with (...)
//             liTag += `<li class="dots"><span>...</span></li>`
//         }
//     }
//
//     //how many pages or li show before the current li
//     if (page == totalPages){ //if page value os equal to totalPages the substract by -2 to the beforePages value
//         beforePages = beforePages - 2
//     }else if (page == totalPages - 1){ //else if page value os equal to totalPages by -1 the substract by -1 to the beforePages value
//         beforePages = beforePages -1
//     }
//
//     //how many pages or li show after the current li
//     if (page == 1){//if page value os equal to 1 then add by +2 to the afterPages value
//         afterPages = afterPages + 2
//     }else if (page == 2){ //else if page value os equal to 2 then add by +1 to the afterPages value
//         beforePages = beforePages + 1
//     }
//
//
//     for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
//         if (pageLength > totalPages){
//             continue
//         }
//         if (pageLength == 0){ // if pageLength is equal to 0 then add +1 to the pageLength value
//             pageLength = pageLength + 1
//         }
//         if (page == pageLength){ //if page value is equal to pageLength then assign the active string in the activeLi variable
//             activeLi = "active"
//         }else { //else leave empty to the activeLi variable
//             activeLi = ""
//         }
//         liTag += `<li class="numb ${activeLi}" onclick="element (totalPages,${pageLength})"><span>${pageLength}</span></li>`
//     }
//
//     if (page < totalPages - 1){ //if page value grater than totalPages by -1 then show the last li or page which is 20
//         if (page < totalPages - 2){ //if page value grater than totalPages by -2 then show the last (...) before last page
//             liTag += `<li class="dots"><span>...</span></li>`
//         }
//         liTag += `<li class="numb" onclick="element (totalPages,${totalPages})"><span>${totalPages}</span></li>`
//     }
//
//     if (page < totalPages){ //if page value is less than totalPages value then add new li which is next button
//         liTag += `<li class="btn next" onclick="element(totalPages,${page + 1})"><span>Next<i class="fa-solid fa-chevron-right"></i></span></li>`
//     }
//     ulTag.innerHTML = liTag
// }
// element(totalPages,5) //calling function with passing values