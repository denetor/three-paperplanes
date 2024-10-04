// import { TestScene } from '../../scenes/test.scene'
//
// export class DesignerPerspective {
//     scene: TestScene | null = null;
//
//     topView: HTMLDivElement | null = null;
//     sideView: HTMLDivElement | null = null;
//     frontView: HTMLDivElement | null = null;
//     perspectiveView: HTMLDivElement | null = null;
//
//
//     constructor() {
//         this.appendDomElements();
//     }
//
//
//     public setScene(scene: TestScene) {
//         this.scene = scene;
//     }
//
//
//     public run() {
//         if (this.scene) {
//             this.scene.animate();
//         }
//     }
//
//
//     protected appendDomElements() {
//         const canvas = document.createElement("canvas");
//         canvas.setAttribute("id", "c");
//
//         const container = document.createElement("div");
//         container.setAttribute("class", "split-container");
//
//         this.frontView = document.createElement("div");
//         this.frontView.setAttribute("id", "front");
//         this.frontView.setAttribute("class", "split-quadrant");
//         this.frontView.setAttribute("tabindex", "1");
//         this.perspectiveView = document.createElement("div");
//         this.perspectiveView.setAttribute("id", "perspective");
//         this.perspectiveView.setAttribute("class", "split-quadrant");
//         this.perspectiveView.setAttribute("tabindex", "2");
//         this.topView = document.createElement("div");
//         this.topView.setAttribute("id", "top");
//         this.topView.setAttribute("class", "split-quadrant");
//         this.topView.setAttribute("tabindex", "3");
//         this.sideView = document.createElement("div");
//         this.sideView.setAttribute("id", "side");
//         this.sideView.setAttribute("class", "split-quadrant");
//         this.sideView.setAttribute("tabindex", "4");
//
//         container.appendChild(this.frontView);
//         container.appendChild(this.perspectiveView);
//         container.appendChild(this.topView);
//         container.appendChild(this.sideView);
//         canvas.appendChild(container);
//         document.body.appendChild(canvas);
//
//         // this.topView = document.querySelector('#top') as HTMLDivElement;
//     }
//
//     protected appendDomElements_delme() {
//         const container = document.createElement("div");
//         const canvases = {
//             front: document.createElement("canvas"),
//             perspective: document.createElement("canvas"),
//             top: document.createElement("canvas"),
//             side: document.createElement("canvas"),
//         };
//         // front view
//         canvases.front.setAttribute("id", "c-front");
//         canvases.front.setAttribute("style", "display: inline-block; background-color: #ccffcc");
//         canvases.front.width = window.innerWidth / 2;
//         canvases.front.height = window.innerHeight / 2;
//         container.appendChild(canvases.front);
//         // perspective view
//         canvases.perspective.setAttribute("id", "c-perspective");
//         canvases.perspective.setAttribute("style", "display: inline-block; background-color: #000000");
//         canvases.perspective.width = window.innerWidth / 2;
//         canvases.perspective.height = window.innerHeight / 2;
//         container.appendChild(canvases.perspective);
//         // top view
//         canvases.top.setAttribute("id", "c-top");
//         canvases.top.setAttribute("style", "display: inline-block; background-color: #cccccc");
//         canvases.top.width = window.innerWidth / 2;
//         canvases.top.height = window.innerHeight / 2;
//         container.appendChild(canvases.top);
//         // side view
//         canvases.side.setAttribute("id", "c-side");
//         canvases.side.setAttribute("style", "display: inline-block; background-color: #ccccff");
//         canvases.side.width = window.innerWidth / 2;
//         canvases.side.height = window.innerHeight / 2;
//         container.appendChild(canvases.side);
//
//         document.body.appendChild(container);
//     }
//
// }
