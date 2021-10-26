import { Button } from 'antd';
import React from 'react';
// import './index.less';


const Index = () => {

    return (
        <div className="site-button-ghost-wrapper">
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
