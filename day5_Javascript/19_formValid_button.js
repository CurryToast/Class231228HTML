const save = () => {
    const name = document.querySelector('input[name="name"]');
    const age = document.querySelector('input[name="age"]');
    const hobbies = document.querySelectorAll('input[name="hobby"]:checked');

    let isValid = true;
    let regex = /^[a-zA-Z가-힣]{2,5}$/; // 정규식

    const [nameDiv, ageDiv] = document.querySelectorAll('li > div');
    const fieldset = document.querySelector('fieldset');

    if (name.value == '') {
        nameDiv.setAttribute('class', 'error');
        nameDiv.setAttribute('data-msg', '이름을 입력하세요.');
        isValid = false;
    } else if (!regex.test(name.value)) {
        nameDiv.setAttribute('class', 'error');
        nameDiv.setAttribute('data-msg', '숫자나 기호를 포함하지 않는 2~5글자 사이의 이름을 입력하세요.');
        isValid = false;
    } else {
        nameDiv.removeAttribute('class');
        nameDiv.removeAttribute('data-msg');
    }
    
    if (age.value == '') {
        alert('나이를 입력하세요');
        ageDiv.setAttribute('class', 'error');
        ageDiv.setAttribute('data-msg', '나이를 입력하세요');
        isValid = false;
    } else if (age.value < 20 || age.value > 100) {       //유효값 위배되는 조건식
        ageDiv.setAttribute('class', 'error');
        ageDiv.setAttribute('data-msg', '나이 유효값(20~100)이 아닙니다.');
        isValid = false;
    } else {
        ageDiv.removeAttribute('class');
        ageDiv.removeAttribute('data-msg');
    }
    
    if (hobbies.length == 0) {
        fieldset.setAttribute('class', 'error');
        fieldset.setAttribute('data-msg', '취미를 최소 1개 선택하세요.');
        document.getElementById('swimming').focus();
        isValid = false;
    } else {
        fieldset.removeAttribute('class');
        fieldset.removeAttribute('data-msg');
    }

    const errorDoms = document.querySelectorAll('.error > input');
    if (!isValid && !!errorDoms.length) {
        errorDoms[0].focus();
    }

    if (isValid) {
        const hobbArr = []
        hobbies.forEach(ele => {
            hobbArr.push(ele.value);
        })

        if (confirm(`${name.value}님(${age.value})이 선택한 취미는 ${hobbArr.join(',')} 입니다. 저장하시겠습니까?`)) {
            document.forms[0].submit();
        }
    }
}