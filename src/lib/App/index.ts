import { CanvasCore } from './Implementation/CanvasCore';
import { ThreeCore } from './Implementation/ThreeCore';
export class App {
    constructor() {
        new CanvasCore('SandBox');
        new ThreeCore('SandBox');
        console.log('Sandbox starter!');
    }
}