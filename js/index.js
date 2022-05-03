// const $options = document.querySelector('#selectCategory')
// const $category = document.querySelector('.category')
// const $goods = document.querySelector('.goods')
// const $container = document.querySelector('.container')
// const $basketAlert = document.querySelector('.basketAlert')
// const $add_container = document.querySelector('.add_container')
// const $add_button = document.querySelector('.add_button')
// const $file = document.querySelector('.file')

// const $baseURL = 'https://pbasics.pythonanywhere.com/products'

// $options.addEventListener('change', e => {
//     database(`?category=${e.target.value}`)
// })


// function cardTamplete(image, title, description, price, id) {
//     return `
//         <div class="box">
//             <img src="${image}" alt="">
//             <div class="cardBody">
//                 <h1 class="title">${title}</h1>
//                 <div class="text">
//                     <p class="description">${description}</p>
//                     <p class="price"><span>$</span> ${price}</p>
//                 </div>
//             </div>
//             <button class="basket_button" onclick="basketButton(${id})">В корзину</button>
//         </div>
//     `
// }

// function database(category = '') {
//     $goods.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
//     fetch(`${$baseURL}/${category}`, {
//         headers: {
//             'Content-type': 'application/json'
//         }

//     })
//         .then(res => res.json())
//         .then(res => {
//             const temp = res.map(({image, title, description, price, id}) => cardTamplete(image, title, description, price, id)).join('')
//             $goods.innerHTML = temp
//         })
//         .catch(err => {
//             console.log(err)
//             $goods.innerHTML = `<h1 style="text-align: center">Что-то пошло не так!</h1>`
//         })
// }
// database()

// function alertBasket(item) {
//     item.classList.add('alert')
//     setTimeout(() => {
//         item.classList.remove('alert')
//     }, 2000);
// }

// // ================localStorage================

// // function basketButton(id) {
// //     const goods = JSON.parse(localStorage.getItem('goods'))
// //     localStorage.setItem('goods', JSON.stringify([...goods, id]))
// //     console.log(goods)
    
// //     alertBasket($basketAlert)
// // }
// // window.addEventListener('load', () => {
// //     if (!localStorage.getItem('goods')) {
// //         localStorage.setItem('goods', JSON.stringify([]))
// //     }
// // })
// //================================================




// $add_button.addEventListener('click', e => {

//     // fetch(`${$baseURL}/create/`, {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-type':'application/json',
//     //     },
//     //     body: JSON.stringify({
//     //         title: '123456',
//     //         description: '123456',
//     //         price: 1500,
//     //         image: 'https://image.shutterstock.com/image-vector/vector-line-icon-img-260nw-2050481222.jpg',
//     //         category: 1,
//     //     })
//     // })
//     // .then(res => res.json())
//     // .then(res => console.log(res))
//     // .catch(err => {
//     //     console.log(err)
//     // })
// })