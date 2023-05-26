import { defineStore } from "pinia";
import router from "../router";


export const useDepStore = defineStore("depStore", {

    state: () => ({
            admin: false,
            teso: false,
            manten: false,
            segu: false,
            home: true,
            gere: false,
            change: false,
            content: false,
            turno1: false,
            turno2: false,
            new: false,
            act_t: false,
            actividad: {},
            ficha:{},
            monto: "",
            fecha:"",
            fact_crea:false,
            person: {
                nombre: "",
                apellido: "",
                cedula: "",
                rif: "",
                telefono: ""
            },
            trab: {
                departamento: "",
                banco: "",
                cuenta: "",
                
            },
            act: {
                nombre_act: "",
                fecha: "",
                descripcion: "",
                
            },
            propi: {
                apartamento: "",
                edificioo: "",
                
                
            },
            servicio:"",
            persona: {},
            propietarios: [],
            propietario: {},
            trabajador: {},
            trabajadores: {},
            actividades: {},
            fichas: {},
            factura:{},
            facturas:{},
            insumos: {},
            insumo:{},
            cantidad: 0,
            ordenes_insumo:{},
            orden_insumo:{},
            comprobante:{},
            tipo1:false,
            tipo2:false,
            tipo3:false,
            orden:{
                tipo:"",
                destino:"",
                banco:"",
                titular:"",
                monto:"",
                cod_insumo:"",
                cantidad:"",
                servicio:""
            }



            
              }

    ),
    persist: {
        paths: ['trabajadores','propietarios','actividades','fichas','facturas','ordenes_insumo','insumos'],
    },

    actions: {


        async filtrado(id) {
            this.act_t = true
        
             var array =  this.actividades
        
      
            this.actividades = [] 

            array.forEach(actividad => {

                        if(id == actividad.trabajador_id){
                             
                             this.actividades.push(actividad)
                             console.log(actividad)

                        }

                            });

            router.push('/act_info')


    
                

        

           
        },

        async filtrado_fact(id) {
            //this.act_t = true
            //this.get_facturas()
         console.log("filtrado",id)
         this.factura = {}
         this.propietario = {}
         this.persona = {}
         this.content = true
         this.fact_crea = false

         var array =  this.facturas
       
      
         this.facturas = [] 
      

            array.forEach(factura => {
                            console.log(this.facturas)
                        if(id == factura.propietario_id){
                             
                             this.facturas.push(factura)
                             console.log(factura)
                             //console.log(actividad)

                        }

                            });

            router.push('/cobros_factura')


    
            
           
         },

        async get_persona() {
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/persona", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.person = result
                        console.log(this.person)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },


        async get_ordenes_insumo() {
            this.conten = false
                this.orden_insumo = {}
                this.ordenes_insumo = {}
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/orden/insumo_ord", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.ordenes_insumo = result
                        
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_ordenes_admin() {
            this.conten = false
                this.orden_insumo = {}
                this.ordenes_insumo = {}
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/orden/orden_admin", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.ordenes_insumo = result
                        this.comprobante = {}
                        
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

         async get_ordenes_pagos() {
                this.conten = false
                this.orden_insumo = {}
                this.ordenes_insumo = {}
                
                try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/orden/orden_pagos", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.ordenes_insumo = result
                        this.comprobante = {}
                        
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },



        async get_facturas() {
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/factura", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.facturas = result

                        this.facturas.forEach(factura => {

                            var fecha = new Date(factura.fecha)

                        var year = fecha.getFullYear()
                        var month = ('0'+(fecha.getMonth()+1)).slice(-2)
                        var day = ('0'+ fecha.getDate()).slice(-2)

                        factura.fecha = year + '-' + month + '-' + day 

                                

                            });
                        
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

       
        async get_fichas() {
            this.content=false
            this.actividad = {}
                        this.persona = {}
                        this.trabajador = {}
                        this.propietario= {}
                        this.ficha={}



            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/ficha", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.fichas = result
                        console.log(this.fichas)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },


        async get_insumos() {
            this.content=false
            this.actividad = {}
            this.persona = {}
            this.trabajador = {}
            this.propietario= {}
            this.ficha={}



            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/insumo", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.insumos = result
                        console.log(this.insumos)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_insumos_soli() {
            



            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/insumo/solicitado", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.insumos = result
                        console.log(this.insumos)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },
        completar(){
            console.log("completando")
            if(this.tipo1){
                this.orden.tipo = "Insumo"
                this.orden.cod_insumo = this.insumo.id
                this.orden.cantidad = this.insumo.cantidad
                this.orden.servicio = null
                
            }

             

            if(this.tipo2){
                this.orden.tipo = "Servicio"
                this.orden.cod_insumo = null
                this.orden.cantidad = null
                this.orden.servicio = this.servicio
            }

            if(this.tipo3){
                this.orden.tipo = "Trabajador"
                this.orden.cod_insumo = null
                this.orden.cantidad = null
                this.orden.servicio = null
                this.orden.titular = this.trabajador.persona.nombre + this.trabajador.persona.apellido
                this.orden.destino= this.trabajador.num_cuen
                this.orden.banco=this.trabajador.nom_banc


                
            }



            console.log(this.orden)


        },



        async get_propietarios() {
            this.content=false
            this.actividad = {}
                        this.persona = {}
                        this.trabajador = {}
                        this.propietario= {}
                        

                this.new = false


            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/propietarios", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.propietarios = result
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_trabajadores() {
            this.content=false
            this.actividad = {}
                        this.persona = {}
                        this.trabajador = {}
                        this.propietario= {}
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/trabajadores", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.trabajadores = result
                
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_actividades() {
            this.content=false
            this.actividad = {}
                        this.persona = {}
                        this.trabajador = {}
                        this.propietario= {}


            try {
               
                

                var requestOptions = {
                    method: 'GET',
                };

                fetch("http://localhost:8765/actividad", requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.actividades = result
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_by_factura(id) {
            console.log("entrando a get_by_factura")
            console.log(id)
            this.factura = {}
            this.content = true
            this.fact_crea = false
            //this.get_facturas()
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/factura/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.factura = result
                        var fecha = new Date(this.factura.fecha)

                        var year = fecha.getFullYear()
                        var month = ('0'+(fecha.getMonth()+1)).slice(-2)
                        var day = ('0'+ fecha.getDate()).slice(-2)

                        this.factura.fecha = year + '-' + month + '-' + day 

                        this.get_by_propietario(result.propietario_id)
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_by_orden(id) {
            console.log("entrando a get_by_factura")
            console.log(id)
            this.factura = {}
            this.content = true
            this.fact_crea = false
            this.orden_insumo ={}
            //this.get_facturas()
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/orden/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.orden_insumo= result
                        var fecha = new Date(this.orden_insumo.fecha)

                        var year = fecha.getFullYear()
                        var month = ('0'+(fecha.getMonth()+1)).slice(-2)
                        var day = ('0'+ fecha.getDate()).slice(-2)

                        this.orden_insumo.fecha = year + '-' + month + '-' + day 

                        if(this.orden_insumo.status == 'Procesada'){
                            this.get_comprobante_by_orden(result.id)
                        }

                        console.log(this.orden_insumo)
                        console.log(this.orden_insumo.codigo)
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },
       

        async get_by_comprobante(id) {
            console.log("entrando a ficha")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/comprobante/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.comprobante = result
                        
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },



        async get_comprobante_by_orden(id) {
            console.log("entrando a ficha")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/comprobante/byorden/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.comprobante = result[0]
                        
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_by_ficha(id) {
            console.log("entrando a ficha")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/ficha/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.ficha = result
                        this.get_by_trabajador(result.trabajador_id)
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_by_insumo(id) {
            console.log("entrando a ficha")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/insumo/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.insumo = result
                        
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },


        async get_by_actividad(id) {
            console.log("entrando")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/actividad/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.actividad = result
                        this.get_by_trabajador(result.trabajador_id)
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },


        async get_by_trabajador(id) {
            console.log("entrando")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/trabajadores/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.trabajador = result
                        this.persona = result.persona
                        this.content = true
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async get_by_propietario(id) {
            console.log("entrando pro")
            console.log(id)
              this.new = false
              this.change = false 
            this.get_facturas()
            try {
               
                

                var requestOptions = {
                    method: 'GET',
                    
                };

                fetch('http://localhost:8765/propietarios/view/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.propietario = result
                        this.persona = result.persona
                        this.content = true
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },




        async new_persona(tipo) {
            console.log("entrando")
            
           
            
            try {

                
                var raw = {
                        "id": this.person.cedula,
                        "nombre": this.person.nombre,
                        "apellido": this.person.apellido,
                        "cedula": this.person.cedula,
                        "rif": this.person.rif,
                        "telefono": this.person.telefono,


                    }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/persona/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        
                        if (result.status == "success"){
                            if(tipo == 1){
                                this.new_trabajador(result.id);
                            }
                            if(tipo == 2){
                                this.new_propietario(result.id);
                            }


                        }

                        if (result.status == "existe"){
                            
                            alert(" Ya existe una persona registrada como propietario/trabajador con el mismo numero de cedula");
                            


                        } 

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async new_factura(id) {
            console.log("entrando")
            
            try {

                
                var raw = {
                        "propietario_id": id,
                        "monto": this.monto,
                        "status": "Sin Verificar",
                    }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/factura/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)

                        this.get_by_factura(result.factura.id) 
                        this.fact_crea = true 

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },



    async new_comprobante(id) {
            console.log("entrando")
            
            try {

                
                var raw = {
                        "orden_id": id,
                        "status": "Archivado",
                    }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/comprobante/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)

                        this.get_by_comprobante(result.id) 
                        alert("Comprobante archivado")
                        this.change_status_orden(id,"Procesada")

                        
                         

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

    async new_trabajador(id) {
            console.log("entrando new")
            console.log(id)
            
            
            
            console.log(id)
                try {

                
                var raw = {
                        "persona_id": id,
                        "departamento": this.trab.departamento,
                        "nom_banc": this.trab.banco,
                        "num_cuen": this.trab.cuenta,
                                       }

                             console.log(raw)          

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/trabajadores/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_trabajadores()
                        router.push("/rh")
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
            
            
            
            
           
        },



        async new_propietario(id) {
            console.log("entrando new")
            console.log(id)
            console.log(this.propi.apartamento)
            console.log(this.propi.edificio)
            
            id = id + ''
            
                try {

                
                var raw = {
                        "persona_id": id,
                        "edificio": this.propi.edificio,
                        "apartamento": this.propi.apartamento,
                        
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                    console.log(raw)

                fetch('http://localhost:8765/propietarios/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_propietarios()
                        //router.push("/gerencia")
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
            
            
            
            
           
        },

        async new_orden() {
            
            
           
            
                try {

                
                var raw = {
                        "tipo": this.orden.tipo,
                        "banco": this.orden.banco,
                        "destino": this.orden.destino,
                        "titular": this.orden.titular,
                        "monto": this.orden.monto,
                        "codigo": this.orden.cod_insumo,
                        "cantidad": this.orden.cantidad,
                        "servicio": this.orden.servicio,
                        "status": "Pendiente"
                        
                                       }



                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/orden/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        alert("orden creada")
                        router.push("/orden")
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
            
            
            
            
           
        },

        
        async asig_ficha(id) {
                     let turno = ""

                     if(this.turno1){
                        turno = "Mañana"
                     }

                     if(this.turno2){
                        turno = "Tarde"
                     }   

                     console.log(turno)
                     console.log(id)
                     
                 try {

                
                    var raw = {
                        "turno": turno,
                        "trabajador_id": id,
                        "fecha": this.fecha,
                        
                        
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                 fetch('http://localhost:8765/ficha/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_fichas()
                        
                        alert('Turno Asignado')
                        //router.push("/gerencia")
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }

        },









        async new_actividad(id) {
                        
                     
                try {

                
                var raw = {
                        "nombre_act": this.act.nombre_act,
                        "trabajador_id": id,
                        "fecha": this.act.fecha,
                        "descripcion": this.act.descripcion,
                        
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/actividad/add', requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_actividades()
                        
                        alert('Actividad Asignada')
                        //router.push("/gerencia")
                        
                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
             } finally {

                // this.loginUser(email, password)

            }           
        },


        async edit_trabajador() {
            console.log("entrando")

            var id = this.trabajador.id + ''
            
            try {

                
                var raw = {
                        "id": id,
                        "departamento": this.trabajador.departamento,
                        "nom_banc": this.trabajador.nom_banc,
                        "num_cuen": this.trabajador.num_cuen,
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };
                        console.log(raw)

                fetch('http://localhost:8765/trabajadores/edit/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_trabajadores()
                        this.change = false
                        
                        

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async control_ficha(id) {
            console.log("entrando control ficha")
            console.log(id)
            
            try {

                
                var raw = {
                        "id": id,
                        "entrada": this.ficha.entrada,
                        "salida": this.ficha.salida,
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/ficha/edit/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_fichas()
                        
                        
                        

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async retirar(cantidad,id,operacion) {
            console.log("entrando control ficha")
            var cant = 0

            if(operacion == 1){
                console.log("retirando")
                console.log(cantidad)
                cant = this.insumo.cantidad - cantidad
                if(cant == 0){
                    this.insumo.status = "Agotado"
                }


            }

            if(operacion == 2){

                this.get_by_insumo(id)
                console.log("agreganso")
                console.log(cantidad)
                cant = this.insumo.cantidad - cant + cant
                this.insumo.status = "Stock"

            }

            if(operacion == 3){
                console.log("solicitando")
                console.log(cantidad)
                cant = cantidad
                this.insumo.status = "Solicitado"

            }

            

            

            if(cant >= 0){

            
            try {

                
                var raw = {
                        "id": id,
                        "cantidad": cant,
                        "status": this.insumo.status,

                        
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/insumo/edit/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_insumos()
                        this.get_by_insumo(id)
                        if(operacion == 1){
                            
                            alert("insumos retirados")
                            
                             }
                        if(operacion == 2){
                        this.delete_orden(this.orden_insumo.id)
                        alert("insumos agregados")
                        router.push('/insumos')
                             }

                        if(operacion == 3){
                        
                        alert("insumos solicitado")

                             }
                        
                        
                        

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }


            }else{

                alert("Cantidad insuficiente")
            }

            this.cantidad = 0
            cant = 0

           
        },

        async edit_propietario() {
            console.log("entrando")
            console.log(this.propietario.id)
            
            try {

                
                var raw = {
                        "id": this.propietario.id,
                        "edificio": this.propietario.edificio,
                        "apartamento": this.propietario.apartamento,
                        
                                       }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/propietarios/edit/'+ this.propietario.id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_propietarios()
                        this.get_by_propietario(result.id)
                        this.change = false
                        
                        

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async edit_persona(tipo) {
            console.log("entrando")
            
            try {

                
                var raw = {
                        "id": this.persona.id,
                        "nombre": this.persona.nombre,
                        "apellido": this.persona.apellido,
                        "cedula": this.persona.cedula,
                        "rif": this.persona.rif,
                        "telefono": this.persona.telefono,


                    }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/persona/edit/'+ this.persona.id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        
                        if (result.status == "success"){
                            if(tipo == 1){
                                this.edit_trabajador();
                            }
                            if(tipo == 2){
                                this.edit_propietario();
                            }


                        } 

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },



         async change_status_orden(id,status) {
            console.log("entrando")
            
            try {

                
                var raw = {
                        "id": id,
                        "status": status,
                    

                    }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/orden/edit/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)

                        if(status == 'Completada'){
                            this.get_ordenes_admin()
                        }

                        if(status == 'Procesada'){
                            this.get_ordenes_pagos()
                        }
                        

                        
                       

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async edit_factura(id) {
            console.log("entrando")
            
            try {

                
                var raw = {
                        "id": id,
                        "status": "Archivada",
                    

                    }

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify(raw),
                        

                    };

                fetch('http://localhost:8765/factura/edit/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_facturas()
                        this.get_by_factura(id)
                        alert("Factura Modificada")
                        
                       

                        
                        
                         
                       //console.log(this.result)
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },





        async delete_persona(id) {
            console.log("entrando pro")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'DELETE',
                    
                };

                fetch('http://localhost:8765/persona/delete/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },




                async delete_orden(id) {
            console.log("entrando pro")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'POST',
                    
                };

                fetch('http://localhost:8765/orden/delete/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.get_ordenes_insumo()
                        
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },


        async delete_trabajador(id) {
            console.log("entrando delete")
            console.log(id)

            


            try {
               
                

                var requestOptions = {
                    method: 'POST',
                    
                };

                fetch('http://localhost:8765/trabajadores/delete/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.trabajador = {}
                        this.persona = {}

                        console.log(this.persona.id)

                        this.get_trabajadores()

                        
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },



        async delete_propietario(id) {
            console.log("entrando delete")
            console.log(id)




            try {
               
                

                var requestOptions = {
                    method: 'POST',
                    
                };

                fetch('http://localhost:8765/propietarios/delete/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.propietario = {}
                        this.persona = {}

                        console.log(this.persona.id)

                        this.get_propietarios()

                        
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async delete_actividad(id) {
            console.log("entrando delete")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'POST',
                    
                };

                fetch('http://localhost:8765/actividad/delete/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.propietario = {}
                        this.persona = {}
                        this.actividad = {}
                        this.trabajador = {}

                        console.log(this.persona.id)

                        this.get_actividades()

                        
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

        async delete_factura(id) {
            console.log("entrando delete")
            console.log(id)
            try {
               
                

                var requestOptions = {
                    method: 'POST',
                    
                };

                fetch('http://localhost:8765/factura/delete/'+id, requestOptions)
                    .then(response => response.json())
                    .then(result => { 
                        console.log(result)
                        this.factura = {}

                        

                        this.get_facturas()

                        
                        
                        
                         
                       
                        

                    })
                    .catch(error => console.log('error', error));


            } catch (error) {
                console.log(error);
            } finally {

                // this.loginUser(email, password)

            }
           
        },

    





    },

});