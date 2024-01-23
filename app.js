
document.getElementById('form1').addEventListener('submit', function (event) {

    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Email:', email);
    console.log('Number:', num);
    document.getElementById('form-details').innerHTML = `FirstName: ${fname}<br> LastName: ${lname}<br>
    Email: ${email}<br>Mobile: ${num}`;

});