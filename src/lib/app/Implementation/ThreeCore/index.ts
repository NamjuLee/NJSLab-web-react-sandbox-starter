import * as THREE from 'three';

export class ThreeCore {
    canvas: HTMLCanvasElement;
    host: HTMLElement;;
    ctx: CanvasRenderingContext2D;
    t: number = 0.0;

    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;

    boxMeshes: THREE.Mesh[] = [];

    constructor(id: string){
        this.InitCanvas(id);
    }
    InitCanvas(id: string){
        const host = document.getElementById(id);
        if (host){ this.host = host; }
        
        this.scene = new THREE.Scene();
        this.scene.background =  new THREE.Color(230, 230, 230);
        this.scene.castShadow = true;

        this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 5000 );
        this.camera.position.set( 0, 0, 250 );
        
        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        ambientLight.castShadow = true;
        this.scene.add( ambientLight );

        var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        pointLight.castShadow = true;
        this.scene.add( pointLight );
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(this.host.clientWidth / this.host.clientHeight);
        this.renderer.domElement.id = 'Three';
        this.renderer.setSize(this.host.clientWidth, this.host.clientHeight);
        this.host.appendChild(this.renderer.domElement);
        this.Init();
    }
    Init(){

        for(let i = 0; i < 100; ++i){
            const boxGeo = new THREE.BoxGeometry(10, 10, 10);
            const boxMesh =new THREE.Mesh(boxGeo);
            boxMesh.position.x = 50 - (Math.random() * 100); // new THREE.Vector3(50 - (Math.random() * 100), 50 - (Math.random() * 100), 50 - (Math.random() * 100));
            boxMesh.position.y = 50 - (Math.random() * 100);
            boxMesh.position.z = 50 - (Math.random() * 100);
            boxMesh.castShadow = true;
            boxMesh['value'] = Math.random();
            this.scene.add(boxMesh);
            this.boxMeshes.push(boxMesh);
        }
        this.EventBind();
        this.Loop();
    }
    EventBind(){
        this.renderer.domElement.onmousedown = (e: MouseEvent) => this.MouseDown(e);
        this.renderer.domElement.onmouseup = (e: MouseEvent) => this.MouseUp(e);
        this.renderer.domElement.onmousemove = (e: MouseEvent) => this.MouseMove(e);
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
        this.renderer.render(this.scene, this.camera);
  
        for(let i = 0; i < 100; ++i){
            this.boxMeshes[i].rotateX(this.boxMeshes[i]['value'] * 0.01);
            this.boxMeshes[i].rotateY(this.boxMeshes[i]['value'] * 0.05);
            this.boxMeshes[i].rotateZ(this.boxMeshes[i]['value'] * 0.09);
            // this.boxMesh[i].rotateY(0.06);
            // this.boxMesh[i].rotateZ(0.08);
        }
        this.t += 0.01;
    }
}