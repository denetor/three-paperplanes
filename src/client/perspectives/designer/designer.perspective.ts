export class DesignerPerspective {

    constructor() {
        this.appendDomElements();
    }

    protected appendDomElements() {
        const container = document.createElement("div");
        const canvases = {
            front: document.createElement("canvas"),
            perspective: document.createElement("canvas"),
            top: document.createElement("canvas"),
            side: document.createElement("canvas"),
        };
        // front view
        canvases.front.setAttribute("id", "c-front");
        canvases.front.setAttribute("style", "display: inline-block; background-color: #ccffcc");
        canvases.front.width = window.innerWidth / 2;
        canvases.front.height = window.innerHeight / 2;
        container.appendChild(canvases.front);
        // perspective view
        canvases.perspective.setAttribute("id", "c-perspective");
        canvases.perspective.setAttribute("style", "display: inline-block; background-color: #000000");
        canvases.perspective.width = window.innerWidth / 2;
        canvases.perspective.height = window.innerHeight / 2;
        container.appendChild(canvases.perspective);
        // top view
        canvases.top.setAttribute("id", "c-top");
        canvases.top.setAttribute("style", "display: inline-block; background-color: #cccccc");
        canvases.top.width = window.innerWidth / 2;
        canvases.top.height = window.innerHeight / 2;
        container.appendChild(canvases.top);
        // side view
        canvases.side.setAttribute("id", "c-side");
        canvases.side.setAttribute("style", "display: inline-block; background-color: #ccccff");
        canvases.side.width = window.innerWidth / 2;
        canvases.side.height = window.innerHeight / 2;
        container.appendChild(canvases.side);

        document.body.appendChild(container);
    }

}
