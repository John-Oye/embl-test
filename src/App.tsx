import {FC} from 'react';
import APIContextProvider from './components/Context/apiContext';
import './App.css';
import  MyResponsiveHeatMap  from './components/MyResponsiveHeatMap';
import Header from './components/common/Header';
import ExpressionSelector from './components/common/ExpressionSelector';




const App: FC =()=> {
 
  return (
      <APIContextProvider>
      <div>
            <Header />
            <ExpressionSelector />
            <MyResponsiveHeatMap  />
               
      </div>
    </APIContextProvider>
  );
}

export default App;



