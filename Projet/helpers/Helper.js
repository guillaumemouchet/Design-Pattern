class Helper
{
    static createElement(tag, className)
    {
        const element = document.createElement(tag);

        if(className) element.classList.add(className);

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
}