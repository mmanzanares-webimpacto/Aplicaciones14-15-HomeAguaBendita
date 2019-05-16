import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Hashtags from './Hashtags';
import styles from './styles.css';
import classnames from 'classnames';

//const DEFAULT_MAX_ITEMS = 3;

export default class App14 extends Component {
    static defaultProps= {       
        titulo: "titulo",
        texto: [],
        // maxItems: DEFAULT_MAX_ITEMS
    }
        
    
    // static uiSchema = {
    //     banners: {
    //       items: {
    //         images: {
    //           'ui:widget': 'image-uploader',
    //         },
    //       }
    //     }
    // }

    static getSchema = (props) => {
        return {
            title: 'Hashtags Home',
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
                texto: {
                    minItems: 1,
                    title: 'Hashtags',
                    type: 'array',
                    items: {
                        title: 'Hashtag',
                        type: 'object',
                        properties: {                        
                            subtitulo: {
                                title: 'Hashtag',
                                type: 'string',
                                default: 'Título del hashtag'
                            },
                            link: {
                                title: 'Link',
                                type: 'string',
                                default: 'Link del hashtag'
                            }
                        },                    
                    },
                },
            },
        }
    }
    
    render(){
        const {
            texto,
            titulo
        } = this.props
        return(
            <Grid className="mt5">
                <Row>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    <Col sm={2} className={classnames(styles.titulo, "tc f4")}>{titulo}</Col>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    {texto.map((d, i) => 
                        <Hashtags subtitulo={d.subtitulo} link={d.link} /> 
                    )}   
                </Row>
            </Grid>           
        );
    }
}