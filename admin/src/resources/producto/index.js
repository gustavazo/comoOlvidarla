import React from 'react';
import axios from 'axios';
import conf from '../../conf';

import RichTextInput from 'ra-input-rich-text';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    DateTimeField,
    BooleanField,
    RichTextField,
    ChoiceField,
    ReferenceField,
    Filter
} from 'react-admin';

import {
    ShowButton,
    EditButton,
    Edit,
    SimpleForm,
    DateInput,
    DisabledInput,
    AutocompleteInput,
    TextInput,
    ReferenceInput,
    SelectInput,
    NumberInput,
    BooleanInput,
    ArrayInput,
    SimpleFormIterator,
    ImageInput,
    ImageField
} from 'react-admin';
import {
    Create,
    SaveButton,
    Toolbar,
    required
} from 'react-admin';
import {
    Show,
    SimpleShowLayout
} from 'react-admin';

import MyImageField from '../../imageField';

//import RichTextInput from 'ra-input-rich-text';

const onFileSelected = async e => {
    console.log('file', e)
    const formData = new FormData();

    formData.append('image', e[0]);

    try {
        const upload = await axios.post(`${conf.CONTAINER_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('upload success', upload);

    } catch (error) {
        console.log('error', error);
    }
}

const onFilesSelected = async e => {
    console.log('files', e)

    try {
        const result = await Promise.all(
            e.map(async file => {
                const formData = new FormData;

                formData.append('file', file);

                return await axios.post(`${conf.CONTAINER_URL}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            })
        );

        console.log('FINAL', result);
    } catch (error) {
        console.log('error', error);
    }
}

// const Productoilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Nombre" source="nom" alwaysOn />
//         <ReferenceInput label="contacto" source="contactoId" reference="contactos" allowEmpty>
//             <SelectInput optionText="nombre" />
//         </ReferenceInput>
//     </Filter>
// );

export const ProductoList = (props) => {
    return (
        <List {...props} title="Lista de Productos">
            <Datagrid>
                <TextField source="nombre" label="Nombre"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export const ProductoCreate = (props) => {
    return (
        <Create {...props} title="Crear Producto" >
            <SimpleForm variant="standard">
                <TextInput source="nombre" label="Nombre" />
                
                <RichTextInput source="descripcion" label="Descripcion" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
                
                {/*<TextInput source="descripcion" label="Descripcion" />*/}
                <TextInput source="precio" label="Precio" />
                <ReferenceInput label="Categoria" source="categoriaId" reference="categorias">
                    <SelectInput optionText="nombre" />
                </ReferenceInput>
            </SimpleForm>
    </Create>
    )
}

export const ProductoEdit = (props) => {
    return (
        <Edit {...props} title="Editar Producto">
            <SimpleForm>
                <TextInput source="nombre" label="Nombre" />
                
                <RichTextInput source="descripcion" label="Descripcion" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />

                
                {/*<TextInput source="descripcion" label="Descripcion" />*/}
                <TextInput source="precio" label="Precio" />
                <ReferenceInput label="Categoria" source="categoriaId" reference="categorias">
                    <SelectInput optionText="nombre" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}
