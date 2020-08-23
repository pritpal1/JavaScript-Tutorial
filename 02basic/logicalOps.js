// &&-And operator-both sides need to be true
// ||-OR operator-one side need to be true
let isVerified =true
let isLoggedIn= true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting msg to USER')
    console.log('Grant access to course')
} else if(isVerified || isGuest) {
    console.log('allow free preview')
}
else{
    console.log('Plz contact ADMIN')
}
