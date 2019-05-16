import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Banner from './Banner';
import styles from './styles.css';
import classnames from 'classnames';

// const DEFAULT_MAX_ITEMS = 3;

export default class App15 extends Component {
    static defaultProps = {
        titulo: "titulo",
        images: [],
        texto: "texto"
        // maxItems: DEFAULT_MAX_ITEMS
    }


    static uiSchema = {
        banners: {
            items: {
                images: {
                    'ui:widget': 'image-uploader',
                },
            }
        }
    }

    static getSchema = (props) => {
        return {
            title: 'Info Home',
            type: 'object',
            properties: {
                titulo: {
                    title: 'Título',
                    type: 'string',
                    default: 'Título del bloque'
                },
                // maxItems: {
                //     title: 'Máximo de imágenes por fila',
                //     type: 'number',
                //     default: Banners.defaultProps.maxItems
                // },
                images: {
                    minItems: 1,
                    title: 'Items',
                    type: 'array',
                    items: {
                        title: 'Item',
                        type: 'object',
                        properties: {
                            subtitulo: {
                                title: 'Subtítulo',
                                type: 'string',
                                default: 'Título inferior de la imagen'
                            },
                            image: {
                                default: '',
                                title: 'Imagen',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            texto: {
                                title: 'Texto de la imagen',
                                type: 'string',
                                default: 'Texto de la imagen'
                            },
                            link: {
                                title: 'Link',
                                type: 'string',
                                default: 'Link del producto'
                            }
                        },
                    },
                },
            },
        }
    }

    render() {
        const {
            images,
            titulo,
            texto
        } = this.props
        return ( 
            <Grid className="mt7" >
                <Row>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    <Col sm={2} className={classnames(styles.titulo, "tc f4")}>{titulo}</Col> 
                    <Col sm={5} className={styles.hr}><hr></hr></Col> 
                    
                    {images.map((d, i) =>
                        <Banner img={d.image} texto={d.texto} subtitulo={d.subtitulo} link={d.link} /> 
                    )} 
                </Row> 
            </Grid>           
        );
    }
}