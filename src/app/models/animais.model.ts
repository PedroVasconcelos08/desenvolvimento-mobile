export class Animais {
    public id: number;
    public foto: string;
    public especie: string;
    public genero: string;
    public raca: string;
    public endereco: string;
    public motivo: string;

    constructor()
    constructor(id?: number, 
                foto?: string,
                especie?: string, 
                genero?: string, 
                raca?: string, 
                endereco?:string,
                motivo?:string) {

        this.id = id? id : 0;
        this.foto = foto? foto: '';
        this.especie = especie? especie: '';
        this.genero = genero? genero: '';
        this.raca = raca? raca: '';
        this.endereco = endereco? endereco:'';
        this.motivo = motivo? motivo:'';
    }
    
}