const nameRegex = /^[a-zA-Z가-힣]{2,5}$/;
const idRegex =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$/;
const pwRegex =  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/;

const regexTest = (el, regex) => {
    if (!regex.test(el.value)) {
        el.setAttribute('class', 'error');
    } else {
        el.removeAttribute('class');
    }
};

document.forms[0].name.addEventListener('change', (e) => {
    regexTest(e.target, nameRegex);
});

document.forms[0].id.addEventListener('change', (e) => {
    regexTest(e.target, idRegex);
});

document.forms[0].password.addEventListener('change', (e) => {
    regexTest(e.target, pwRegex);
});

const openConfirm = () => {
    return confirm('회원가입 하시겠습니까?');
};