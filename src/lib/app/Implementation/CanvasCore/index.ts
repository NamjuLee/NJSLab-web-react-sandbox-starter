
export class CanvasCore {
    canvas: HTMLCanvasElement;
    host: HTMLElement;;
    ctx: CanvasRenderingContext2D;
    t: number = 0.0;

    pos: number[][] = [];
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
                this.InitApp();
            }
        }
    }
    InitApp(){
        this.EventBind();
        this.Loop();
        this.Init();
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
    Init(){
        for(let i = 0; i < 100; ++i){
            const origin = Math.random() * this.canvas.height;
            this.pos.push([Math.random() * this.canvas.width, origin, origin, Math.random()] );
        }
    }
    Loop(){
        requestAnimationFrame(() => { this.Loop(); });
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        for(let i = 0; i < this.pos.length; ++i){
            this.pos[i][1] += this.pos[i][3]*7;
            if(this.pos[i][1] > this.ctx.canvas.height) { this.pos[i][1] = 0; }
            this.ctx.fillStyle = '#ff0000';
            this.ctx.beginPath();
            this.ctx.arc(this.pos[i][0] , this.pos[i][1], 10, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.fill();
        }


        this.t += 0.01;
    }
}