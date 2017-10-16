import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import TextureCard from './components/texture-card';


ReactDOM.render((
  <div className="container">
    <Card>
      hello world
    </Card>
    <TextureCard>
      hello world
    </TextureCard>
    <Card>
      <button className="btn btn-primary">Bootstrap button</button>
    </Card>
    <div className="card">
      <div className="card-body">
        <button className="btn btn-success">Bootstrap button</button>
      </div>
    </div>
  </div>
), document.getElementById('root'));
