const baseUrl = 'https://pbasics.pythonanywhere.com/users/register/'
const $nameInput = document.getElementById('nameInput')
const $passInput = document.getElementById('passInput')
const $register = document.getElementById('register')
const $auth = document.getElementById('auth')
const $errors = document.querySelector('.errors')


$register.addEventListener('click', e => {
    e.preventDefault()
    getUsers($nameInput.value, $passInput.value)
})

function getUsers(userName, userPass) {
    $register.disabled = true
    $auth.disabled = true
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            username:userName,
            password:userPass,
        })
    })
    .then(auth => auth.json())
    .then(res => {
        console.log(res)
        if (!res.id) {
            const err = res.username.map(item => {
                return `<span>${item}</span>`
            }).join('')

            $errors.innerHTML = err
            reset()
        } 
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        $register.disabled = false
        $auth.disabled = false
    })

    reset()
}


function reset(){
    $nameInput.value = ''
    $passInput.value = ''
}