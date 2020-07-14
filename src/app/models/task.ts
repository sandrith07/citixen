export class Task {
    nombre: string;
    descripcion: string;
    responsable: string;
    estado: boolean;
    prioridad: prioridad;
    
    constructor() {
        this.nombre = '';
        this.descripcion = '';
        this.responsable = '';
        this.estado = false;
        this.prioridad = "baja";
    }
}

export type prioridad = "alta" | "media" | "baja";
