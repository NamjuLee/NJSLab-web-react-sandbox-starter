import React, { Component } from 'react';
import { App } from '../lib/app';
export class SandBox extends Component {
  app: App;

  componentDidMount() {
    this.app = new App();
  }

  public render() {
    return (
      <div
        id="SandBox"
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      >
        React Typescript SandBox Starter!
      </div>
    );
  }
}
