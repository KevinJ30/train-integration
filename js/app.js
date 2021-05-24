(function() {
    const button_inforamtion = document.getElementById('js-button-infomration');
    const informations_element = document.getElementById('js-information-bloc');
    
    const onClickButtonInformation = (event) => {
        event.preventDefault();
        informations_element.classList.toggle('visible');
    }

    button_inforamtion.addEventListener('click', onClickButtonInformation);

})()