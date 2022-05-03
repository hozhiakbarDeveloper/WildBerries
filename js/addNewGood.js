const add = document.getElementById('add')
const baseURL = 'https://pbasics.pythonanywhere.com/products/create/'

const inputTitle = document.querySelector('.inputTitle')
const inputDescrip = document.querySelector('.inputDescrip')
const inputImgURL = document.querySelector('.inputImgURL')
const category = document.querySelector('.category')

add.addEventListener('click', e => {
    e.preventDefault()

    fetch(baseURL, {
        method: 'POST',
        header: {
            'Content-type': 'addlication/json'
        },
        body: JSON.stringify({
            title: inputTitle.value,
            description: inputDescrip.value,
            price: inputPrice.value,
            image: null,
            image_url: inputImgURL.value,
        })
    })
    .then(res => res.json())
    .then(res => {
      resetValue(inputs)
    })
    .catch(err => console.log(err))
})


function resetValue (item) {
    item.forEach(el => el.value = '')
}