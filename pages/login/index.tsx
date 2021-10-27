import { Button } from 'antd';
import React from 'react';
import style from '../../styles/new.module.css';


const Index = () => {

    return (
        <div className={style.wrapper}>
            <Button type="primary" ghost>
                Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
                Dashed
            </Button>
            <Button type="primary" danger ghost>
                Danger
            </Button>
        </div>
    );
};

export default Index;
