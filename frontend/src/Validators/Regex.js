const testEmail = (value) => {
   const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
   return emailPattern.test(value)
}

const testPassword = (value) =>{
   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/g;
   return passwordPattern.test(value)
}

const testPhoneNumber = (value) =>{
   const PhoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/g
   return PhoneNumberPattern.test(value)
}

export default {
    testEmail,
    testPassword,
    testPhoneNumber
}