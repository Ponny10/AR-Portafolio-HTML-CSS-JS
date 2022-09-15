/* Imports librarys */ 
 
 /* Functions navbar */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('active', window.scrollY > 0);
});

/* Toggler navbar */
$('.navbar-nav>li>a').on('click', () => {
    $('.navbar-collapse').collapse('hide');
});

/* Method submit email */
const form = document.querySelector('#formSendEmail');

form.addEventListener('submit', (e) => handlerSubmit(e));

const handlerSubmit = async (e) => {

    e.preventDefault();

    let isValidName = false;
    let isValidEmail = false;
    let isValidSubject = false;
    let isValidDescription = false;

    const name = form['name'].value;
    const email = form['email'].value;
    const subject = form['subject'].value;
    const description = form['description'].value;

    if (description !== '') {
        if (description.length < 3) {
            Swal.fire('Campo inválido', 'Ingrese una descripción válida.', 'error' );
        }else{isValidDescription = true}
    } else {
        Swal.fire('Campo inválido', 'Ingrese una descripción.', 'error' );
    }

    if (subject !== '') {
        if (subject.length < 3) {
            Swal.fire('Campo inválido', 'Ingrese un asunto válido.', 'error' );
        }else{isValidSubject = true}
    } else {
        Swal.fire('Campo inválido', 'Ingrese el asunto de su mensaje.', 'error' );
    }

    if (email !== '') {
        if (email.length < 3) {
            Swal.fire('Campo inválido', 'Ingrese un correo electrónico válido.', 'error' );
        }else{isValidEmail = true}
    } else {
        Swal.fire('Campo inválido', 'Ingrese un correo electrónico.', 'error' );
    }

    if (name !== '') {
        if (name.length < 3) {
            Swal.fire('Campo inválido', '', 'error' );
        }else{isValidName = true}
    } else {
        Swal.fire('Campo inválido', 'Ingresa un nombre.', 'error');
    }

    if(isValidName && isValidEmail && isValidSubject && isValidDescription){
        Swal.fire('Enviando mensaje', 'Espere un momento...', 'warning');
        Swal.showLoading();
        const formData = new FormData(e.target);
        const response = await fetch('https://formspree.io/f/xwkzlkya', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        });
        if (response.ok) {
            form.reset();
            Swal.close();
            Swal.fire({
                title: 'Mensaje enviado',
                text: 'Gracias por contactarnos, en breve le responderemos.',
                icon: 'success',
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Mensaje no enviado, intente contactarse por medio de las redes sociales.',
                icon: 'error',
            });
        }
        console.log(isValidName, isValidEmail, isValidSubject, isValidDescription);
    }else {
        console.log('Algo anda mal.');
    };
};

/* States Styles Dark - White */
