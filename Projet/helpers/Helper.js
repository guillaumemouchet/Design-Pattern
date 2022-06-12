class Helper
{
    /**
     * Create an HTML element
     * @param {*} tag 
     * @param {*} classesNames 
     * @returns 
     */
    static createElement(tag, classesNames)
    {
        const element = document.createElement(tag);

        if(classesNames) classesNames.split(' ').map(className =>  element.classList.add(className));

        return element;
    }

    /**
     * Get a DOM element
     * @param {*} selector 
     * @returns 
     */
    static getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    /**
     * Redirect to an URL
     * @param {*} path 
     */
    static redirect(path)
    {
        window.location.href = window.location.pathname + "?route=" + path;
    }

    /**
     * Sleep
     * @param {*} ms 
     * @returns 
     */
    static sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Remove the first matching item in an array
     * @param {*} arr 
     * @param {*} value 
     * @returns 
     */
    static removeItemInArrayOnce(arr, value)
    {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
}