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

    window.addEventListener('resize', () => {
        const window_size_x = window.innerWidth;

        if(window_size_x > 900) {
            button_sidebar.parentNode.classList.add('visible');
            sidebar_element.classList.add('visible');
            content_element.classList.add('visible');
        }
        else {
            button_sidebar.parentNode.classList.remove('visible');
            sidebar_element.classList.remove('visible');
            content_element.classList.remove('visible');
        }
    })
})()