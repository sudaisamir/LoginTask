function reveal() {
    let input = document.getElementById('pass')
    if (input.type === 'password') {
        input.type = "text"
    } else {
        input.type = "password"
    }
}
let input0 = document.getElementById('form')
input0.style.display='flex';
input0.style.alignItems='center';
input0.style.justifyContent='center';

let inputl = document.getElementById('email') 
    inputl.style.width= '200px';
    inputl.style.height= '20px'
    inputl.style.backgroundColor='aqua';
    inputl.style.Color='black';

let input2 = document.getElementById('pass') 
    input2.style.width= '200px';
    input2.style.backgroundColor='aqua';
    input2.style.height= '20px'
    input2.style.Color='black';