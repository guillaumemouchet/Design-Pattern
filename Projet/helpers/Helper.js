class Helper
{
    static createElement(tag, classesNames)
    {
        const element = document.createElement(tag);

        if(classesNames) classesNames.split(' ').map(className =>  element.classList.add(className));

        return element;
    }

    static getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    static redirect(path)
    {
        window.location.href = window.location.pathname + "?route=" + path;
    }

    static sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}