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

    const validarDatos = (e) => {
        e.preventDefault();

        const { nombre, correo, edad, cargo, telefono } = formData;
        const validacionDatos = !nombre || !correo || !edad || !cargo || !telefono;

        if (validacionDatos) {
            setError({
                error: true,
                msg: '¡Completa todos los campos!',
                color: 'danger',
            });
        } else {
            setData(formData);
            setError({
                error: true,
                msg: '¡Colaborador agregado exitosamente!',
                color: 'success',
            });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Form className="formulario mt-4" onSubmit={(e) => validarDatos(e)}>
            <Form.Group className='mb-3'>
                <input
                    type='text'
                    name='nombre'
                    className='form-control'
                    placeholder='Nombre'
                    onChange={handleChange}
                    value={formData.nombre}
                />
            </Form.Group>
            <Form.Group className='mb-3 mt-2'>
                <input
                    type='email'
                    name='correo'
                    className='form-control'
                    placeholder='Correo'
                    onChange={handleChange}
                    value={formData.correo}
                />
            </Form.Group>
            <Form.Group className='mb-3 mt-2'>
                <input
                    type='number'
                    name='edad'
                    className='form-control'
                    placeholder='Edad'
                    onChange={handleChange}
                    value={formData.edad || ''}
                />
            </Form.Group>
            <Form.Group className='mb-3 mt-2'>
                <input
                    type='text'
                    name='cargo'
                    className='form-control'
                    placeholder='Cargo'
                    onChange={handleChange}
                    value={formData.cargo}
                />
            </Form.Group>
            <Form.Group className='mb-3 mt-2'>
                <input
                    type='number'
                    name='telefono'
                    className='form-control'
                    placeholder='Teléfono'
                    onChange={handleChange}
                    value={formData.telefono || ''}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Ingresar Colaborador
            </Button>
        </Form>
    )
}

export default Formulario;
