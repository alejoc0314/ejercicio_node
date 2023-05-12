const express = require('express');
const app = express();
const path  = require('path');
const hbs = require('hbs');


const port = 8080;

// Definición carpeta documentos estáticos
app.use(express.static('public'));

// Configuración motor de plantillas
app.set('views', path.join(__dirname + '/public/views'));

app.set('view engine', 'hbs');

// Definición ruta de documentos parciales
hbs.registerPartials(__dirname + '/public/views/partials');

app.listen(port, () => {
    console.log('listening on port ' + port);
});

// Página de inicio

app.get('/', (req, res) => {
    res.render('home', { 
        titulo : 'Home', 
        sesion : true,
        user_name : 'Alejandro Cañas'
    });
})

// Página de Roles

app.get('/roles', (req, res) => {

    const roles = [
    { 
        id_rol: 1, 
        nombre_rol: 'Administrador',  
        estado_rol: 'Activo'
    },{ 
        id_rol: 1, 
        nombre_rol: 'Secretario',   
        estado_rol: 'Activo'
    },{ 
        id_rol: 1, 
        nombre_rol: 'Vendedor',  
        estado_rol: 'Activo'
    }];
    res.render('roles', { 
        titulo : 'CosmeTIC | Roles',
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Roles',
        lista_roles : roles
    });
})

// Página de Pedidos

app.get('/pedidos', (req, res) => {

    const pedidos = [
        { 
            id_pedido: 1,
            num_pedido: 1, 
            cliente: 'Variedades la negra',  
            empleado: 'Cristian Urrego', 
            fecha_pedido: '14/03/2023', 
            fecha_entrega: '15/03/2023', 
            tipo_pago: 'Crédito', 
            total_pedido: 250000, 
            estado_pedido: 'Entregado'
        },{ 
            id_pedido: 2,
            num_pedido: 2, 
            cliente: 'Makro',  
            empleado: 'Marcela Morales', 
            fecha_pedido: '09/05/2023', 
            fecha_entrega: '', 
            tipo_pago: 'Crédito', 
            total_pedido: 450000, 
            estado_pedido: 'Por entregar'
        },{ 
            id_pedido: 3,
            num_pedido: 3, 
            cliente: 'Papelería Colores',  
            empleado: 'Alejandro Cañas', 
            fecha_pedido: '10/05/2023', 
            fecha_entrega: '10/05/2023', 
            tipo_pago: 'Contado', 
            total_pedido: 100000, 
            estado_pedido: 'Entregado'
        }];
    res.render('pedidos', { 
        titulo : 'CosmeTIC | Pedidos', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Pedidos',
        lista_pedidos : pedidos
    });
})

// Página de Ventas

app.get('/ventas', (req, res) => {

    const ventas = [
        {   
            id_venta: 1,
            id_pedido: 1,
            num_pedido: 1, 
            cliente: 'Variedades la negra',  
            empleado: 'Cristian Urrego', 
            fecha_venta: '15/03/2023', 
            tipo_pago: 'Crédito', 
            total_venta: 250000, 
            estado_venta: 'Por pagar'
        },{   
            id_venta: 2,
            id_pedido: 2,
            num_pedido: 2, 
            cliente: 'MAKRO',  
            empleado: 'Marcela Morales', 
            fecha_venta: '10/05/2023', 
            tipo_pago: 'Crédito', 
            total_venta: 450000, 
            estado_venta: 'Por pagar'
        },{   
            id_venta: 3,
            id_pedido: 3,
            num_pedido: 3   , 
            cliente: 'Papeleria Colores',  
            empleado: 'Alejandro Cañas', 
            fecha_venta: '10/05/2023', 
            tipo_pago: 'Contado', 
            total_venta: 100000, 
            estado_venta: 'Pagado'
        }];
    res.render('ventas', { 
        titulo : 'CosmeTIC | Ventas', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Ventas',
        lista_ventas : ventas
    });
})

app.get('/registroPedidos', (req, res) => {

    res.render('registroPedidos', { 
        titulo : 'CosmeTIC | Nuevo Pedido', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Registrar Pedido',
    });
})

app.get('/registroRoles', (req, res) => {

    res.render('registroRoles', { 
        titulo : 'CosmeTIC | Nuevo Rol', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Pedidos',
    });
})