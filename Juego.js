class Sudoku{

    constructor (nombre,vidas){    
        this.nombre = nombre;
        this.vidas = vidas; 
        this.puntaje;
        this.numeroIngresado;
        this.columnasY;
        this.filasX;
        this.tablero = [            
            [7,8,5,1,9,2,4,3,6],
            [1,3,9,4,5,6,8,7,2],
            [4,2,6,7,3,8,5,1,9],
            [6,5,8,3,4,9,7,2,1],
            [9,1,4,2,7,5,3,6,8],
            [3,7,2,8,6,1,9,4,5],
            [8,6,7,5,1,3,2,9,4],
            [5,9,3,6,2,4,1,8,7],
            [2,4,1,9,8,7,6,5,0]
    
            //Tablero para Jugar Bien
    /*      [7,8,0,1,0,2,4,3,6],
            [1,0,9,4,5,6,0,7,2],
            [0,2,6,7,3,8,0,1,9],
            [0,5,0,0,0,9,7,2,1],
            [0,1,4,0,7,5,3,6,8],
            [3,7,2,8,6,1,9,0,0],
            [8,0,7,5,1,3,2,0,4],
            [5,0,3,0,0,0,1,0,0],
            [2,0,1,9,0,7,0,5,3] */
            ];
        
        this.tableroGanador = [            
            [7,8,5,1,9,2,4,3,6],
            [1,3,9,4,5,6,8,7,2],
            [4,2,6,7,3,8,5,1,9],
            [6,5,8,3,4,9,7,2,1],
            [9,1,4,2,7,5,3,6,8],
            [3,7,2,8,6,1,9,4,5],
            [8,6,7,5,1,3,2,9,4],
            [5,9,3,6,2,4,1,8,7],
            [2,4,1,9,8,7,6,5,3]
        ];
    }

    imprimirTablero(){
        console.log("Este es tu tablero"+ this.nombre);
        console.table(this.tablero);
    }

    
    comprobarExistencia(){
        //Verificar si ya existe un Numero en donde quieres Ingresar el Numero 
        for(let i = 1; i <=9; i++){
            if(this.tablero[this.filasX][this.columnasY]== i){
            console.log("El numero ya existe en la posicion: " + this.filasX + "," + this.comlumnasY)
            verificarExistencia = false; 

            }
        }   
    }
            
    tirar(){
        do {
            this.imprimirTablero();
            let verificarExistencia = true;
            let verificar = true;
            this.suma = 0;
            this.numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 9"));
            this.filasX = prompt("Ingrese la fila que desea ingresar el numero");
            this.columnasY = prompt("Ingrese la columna que desea ingresar el numero");
            this.comprobarExistencia();
            if(verificarExistencia == true){ 
                //Verificar que sea la respuesta Correcta
                for(let i = 0; i < 9; i++){
                    if(this.numeroIngresado == this.tableroGanador[this.filasX][this.columnasY]){
                        verificar = false;
                    }
                }
                //Si es verdadero la respuesta es Incorrecta pero si es un falso la respuesta es Correcta.
                if(verificar == true){
                    this.vidas--;
                    console.log("Respuesta Incorrecta, !!Pierdes una vida!! Vidas restantes: " + this.vidas);
                }else{
                    console.log("Respuesta Correcta");
                    this.tablero[this.filasX][this.columnasY] = this.numeroIngresado;
                }

                //Comprobar si ya Gano
                for(let i = 0; i < 9; i++){
                    for(let j = 0; j < 9; j++){
                        this.suma += this.tablero[i][j];
                    }
                }

                if(this.vidas == 0){
                    console.log("Perdiste");
                }else if(this.suma == 405){
                    console.log("Ganaste");
                    console.table(this.tablero);
                }
            }    
        } while (this.suma != 405 && this.vidas != 0);
    }

}