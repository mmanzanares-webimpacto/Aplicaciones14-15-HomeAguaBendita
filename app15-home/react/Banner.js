import React, { Component } from 'react';
import {Col} from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';

export default class Banner extends Component {
    
    render(){
        const { img, 
                texto, 
                subtitulo, 
                link,
            } = this.props

        return(
            <Col sm={{size: 'auto'}} className={"mt4 pa3 flex justify-center"}>
                <a href={link} className="no-underline tc">                  
                    <img src={img}></img>
                    <h2 className={classnames(styles.subtitulo, "tc ma0")}>{subtitulo}</h2>
                    <span className={classnames(styles.texto)}>{texto}</span>                  
                </a>
            </Col>
        );
    }
}