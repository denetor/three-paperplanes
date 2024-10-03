export class ThirdPersonPerspective {

    constructor() {
        this.appendDomElements();
    }

    protected appendDomElements() {
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "c");
        canvas.setAttribute("style", 'background-color: #cccccc');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
    }
}