import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ setData, setError }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const agregarColaborador = () => {
        const { nombre, correo, edad, cargo, telefono } = formData;

        if (!nombre || !correo || !edad || !cargo || !telefono) {
            setError({
                error: true,
                msg: 'Completa todos los campos!',
                color: 'danger',
            });
            return;
        }

        const nuevoColaborador = {
            id: Math.floor(Math.random() * 1000),
            nombre,
            correo,
            edad: parseInt(edad),
            cargo,
            telefono: parseInt(telefono)
        };

        setData(prevData => [...prevData, nuevoColaborador]);

        setFormData({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });

        setError({
            error: true,
            msg: 'Colaborador agregado exitosamente!',
            color: 'success',
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Form className="formulario mt-4">
            <Form.Group controlId="formNombre">
                <Form.Control
                    type='text'
                    name='nombre'
                    placeholder='Nombre'
                    onChange={handleChange}
                    value={formData.nombre}
                />
            </Form.Group>
            <Form.Group controlId="formCorreo">
                <Form.Control
                    type='email'
                    name='correo'
                    placeholder='Correo'
                    onChange={handleChange}
                    value={formData.correo}
                />
            </Form.Group>
            <Form.Group controlId="formEdad">
                <Form.Control
                    type='number'
                    name='edad'
                    placeholder='Edad'
                    onChange={handleChange}
                    value={formData.edad}
                />
            </Form.Group>
            <Form.Group controlId="formCargo">
                <Form.Control
                    type='text'
                    name='cargo'
                    placeholder='Cargo'
                    onChange={handleChange}
                    value={formData.cargo}
                />
            </Form.Group>
            <Form.Group controlId="formTelefono">
                <Form.Control
                    type='number'
                    name='telefono'
                    placeholder='Teléfono'
                    onChange={handleChange}
                    value={formData.telefono}
                />
            </Form.Group>
            <Button variant="primary" onClick={agregarColaborador}>Agregar Colaborador</Button>
        </Form>
    );
};

export default Formulario;
