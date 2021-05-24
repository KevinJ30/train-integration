(function() {
    const button_inforamtion = document.getElementById('js-button-infomration');
    const informations_element = document.getElementById('js-information-bloc');
    const button_sidebar = document.getElementById('js-button-navigation');
    const sidebar_element = document.getElementById('js-sidebar-element');
    const content_element = document.getElementById('js-content-element');

    const onClickButtonInformation = (event) => {
        event.preventDefault();
        informations_element.classList.toggle('visible');
    }

    const onClickButtonSidebar = (event) => {
        event.preventDefault();

        button_sidebar.parentNode.classList.toggle('visible');
        sidebar_element.classList.toggle('visible');
        content_element.classList.toggle('visible');
    }

    button_inforamtion.addEventListener('click', onClickButtonInformation);
    button_sidebar.addEventListener('click', onClickButtonSidebar);
})()