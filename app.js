const switchElement=document.querySelector('.switch');
switchElement.addEventListener('click',()=>{
document.body.classList.toggle('light')});

const $form=document.querySelector('#form');
const $buttonMailto=document.querySelector('#boton');
$form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const form=new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:AyrtonAranibar@hotmail.com?subject=nombre: ${form.get('fname')}  correo: ${form.get('femail')}&body=${form.get('fmessage')}`)
    $buttonMailto.click();
    alert("Se ha abierto su correo, por favor, envíelo");
}
