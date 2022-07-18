
import React, { CSSProperties, useState } from 'react';
import {  PulseLoader } from 'react-spinners';
import { useAPI } from '../Context/apiContext';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const PreLoader = () => {
    const { isLoading } = useAPI();
     let [color, setColor] = useState("#2196f3");
    return (
       <div className="loading">
        <PulseLoader color={color} loading={isLoading} cssOverride={override} size={50} />
    </div>
    );
};

export default PreLoader;
