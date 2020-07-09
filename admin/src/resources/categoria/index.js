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

//////////////////////////////////////

/*const PropiedadFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="codigo" alwaysOn />
        <ReferenceInput label="Categoria" source="CategoriaId" reference="Categorias" allowEmpty>
            <SelectInput optionText="nombre" />
        </ReferenceInput>
    </Filter>
);*/

export const CategoriaList = (props) => {
    return (
        <List {...props} title="Lista de Categorias">
            <Datagrid>
                <TextField source="nombre" label="Nombre"/>
                <BooleanField source="raiz" label="Categoría raíz"></BooleanField>
                <ReferenceField label="Categoria padre" source="categoriaId" reference="categorias">
                    <TextField optionText="nombre" />
                </ReferenceField>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export const CategoriaCreate = (props) => {
    return (
        <Create {...props} title="Crear Categoria" >
            <SimpleForm variant="standard">
                <TextInput source="nombre" label="Nombre"/>
                <ReferenceInput label="Categoria" source="categoriaId" reference="categorias">
                    <SelectInput optionText="nombre" />
                </ReferenceInput>
                <ImageInput options={{ onDrop: onFileSelected }} source="foto" label="Imagen de perfil" accept="image/*" placeholder={<p>Suelte la imagen</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <RichTextInput source="descripcion" label="Descripcion" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />

                <BooleanInput label="Categoría raíz" source="raiz"/>
            </SimpleForm>
        </Create>
    )
}

export const CategoriaEdit = (props) => {
    console.log(props);
    return (
        <Edit {...props} title="Editar Categoria" >
            <SimpleForm>
                <TextField source="nombre" label="Nombre"/>
                <ReferenceInput label="Categoria" source="categoriaId" reference="categorias">
                    <SelectInput optionText="nombre" />
                </ReferenceInput>

                <RichTextInput source="descripcion" label="Descripcion" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
                
                <MyImageField fotoKey="foto"/>


                <BooleanInput label="Categoría raíz" source="raiz"/>
            </SimpleForm>
        </Edit>
    )
}
