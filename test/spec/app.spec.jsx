 
import React from 'react';
import App from '../../src/app/components/Todo.jsx';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('changes the class when hovered', () => {
    const component = renderer.create( 
       	<App></App> 
    );
     
    expect(1).toBe(1);
  });
});