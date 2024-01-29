import React from 'react';
import Table from 'react-bootstrap/Table';

const Lista = ({ data, dataFilter, setData, setDataFilter }) => {
    const deleteUsuario = (id) => {
        const newData = data.filter(usuario => usuario.id !== id);
        setData(newData);
        setDataFilter(newData);
    };
    const usuarios = dataFilter.map(usuario => (
        <tr className='align-middle' key={usuario.id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.edad}</td>
            <td>{usuario.cargo}</td>
            <td>{usuario.telefono}</td>
            <td>
                <button
                    className='btn btn-danger'
                    onClick={() => deleteUsuario(usuario.id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    ));

    return (
        <Table 
        variant='success' 
        className='table table-striped'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {usuarios}
            </tbody>
        </Table>
    );
};

export default Lista;
