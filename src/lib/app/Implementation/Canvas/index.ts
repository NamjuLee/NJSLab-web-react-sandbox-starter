
export class Canvas {
    canvas: HTMLCanvasElement;
    host: HTMLElement;;
    ctx: CanvasRenderingContext2D;
    t: number = 0.0;
    constructor(id: string){
        this.InitCanvas(id);
    }
    InitCanvas(id: string){
        const canvas = document.createElement('canvas');
        const host = document.getElementById(id);
        if (host){
            host.appendChild(canvas);
            this.host = host;
        }
        if (canvas) {
            this.canvas = canvas;
            this.canvas.width = this.host.clientWidth;
            this.canvas.height = this.host.clientHeight;
            const ctx = this.canvas.getContext('2d');
            if (ctx) {
                this.ctx = ctx;
                this.Init();
            }
        }
    }
    Init(){
        this.EventBind();
        this.Loop();
    }
    EventBind(){
        this.canvas.onmousedown = (e: MouseEvent) => this.MouseDown(e);
        this.canvas.onmouseup = (e: MouseEvent) => this.MouseUp(e);
        this.canvas.onmousemove = (e: MouseEvent) => this.MouseMove(e);
    }
    MouseDown(e: MouseEvent){
        console.log(e);
    }
    MouseUp(e: MouseEvent){
        console.log(e);
    }
    MouseMove(e: MouseEvent){
        console.log(e);
    }
    Loop(){
        requestAnimationFrame(() => { this.Loop(); });
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // this.ctx.fillStyle = '#ff0000';
        // this.ctx.beginPath();
        // this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.ctx.closePath();
        // this.ctx.fill();

        const x = this.ctx.canvas.width * 0.5;
        let y = this.t * 300;
        if(this.ctx.canvas.height < y) { this.t = 0; }
        this.ctx.fillStyle = '#ff0000';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();

        this.t += 0.01;
    }
}