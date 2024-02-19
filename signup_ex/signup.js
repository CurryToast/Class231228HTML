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

const formatDate = (vdate) => {
    const year = vdate.getFullYear();
    const month = (vdate.getMonth() + 1).toString().padStart(2, '0');
    const date = vdate.getDate().toString().padStart(2, '0');

    return [year, month, date].join('-');
};

document.forms[0].birthday.max = formatDate(new Date());

const openConfirm = () => {
    return confirm('회원가입 하시겠습니까?');
};