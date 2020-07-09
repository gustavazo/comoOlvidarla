import React from 'react';
import axios from 'axios';
import conf from '../../conf';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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



export const NovedadList = (props) => {
    return (
        <List {...props} title="Lista de Novedades">
            <Datagrid>
                <TextField source="titulo" label="Título"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export const NovedadCreate = (props) => {
    return (
        <Create {...props} title="Crear Novedad" >
            <SimpleForm variant="standard" defaultValue={{fecha: new Date()}}>
                <TextInput source="titulo" label="Título" />
                <ImageInput options={{ onDrop: onFileSelected }} source="foto" label="Imagen de perfil" accept="image/*" placeholder={<p>Suelte la imagen</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <RichTextInput source="descripcion" label="Descripcion" toolbar={[ ['bold', 'font', 'align', 'size', 'color', 'header', 'italic', 'underline', 'link'] ]} />
            </SimpleForm>
    </Create>
    )
}

export const NovedadEdit = (props) => {
    return (
        <Edit {...props} title="Editar Novedad">
            <SimpleForm>
                <TextField source="fecha" label="Fecha" />

                <TextInput source="titulo" label="Título" />
                
                <RichTextInput source="descripcion" label="Descripcion" toolbar={[ ['bold', 'font', 'align', 'size', 'color', 'header', 'italic', 'underline', 'link'] ]} />

                <MyImageField fotoKey="foto"/>
                
            </SimpleForm>
        </Edit>
    )
}
