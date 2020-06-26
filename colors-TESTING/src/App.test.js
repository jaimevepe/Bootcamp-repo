import React from 'react';
import App, {colors, randNum, randColor} from './App';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// it("renders without crashing", () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.debug())
//   const appComponent = wrapper.find('.App')
//   console.log(appComponent.debug())
//   const appComponent2 = wrapper.find('[data-test="app-component"]')
//   console.log(appComponent2.debug())
//  });


 describe('Background state of color', () => {

  it('has an initial state for the background of purple', () => {

    const wrapper = shallow(<App  />);
   const initialBackgroundColorState = wrapper
   .find('[data-test="app-component"]')
   .prop('style');
   console.log(initialBackgroundColorState)
   expect(initialBackgroundColorState).toEqual({"backgroundColor": "purple"});

   });

 });

 describe('Color array', () => {

  it('array does not have less than 3 colors', () => {
    throw Error();
   });

  it('does array have red, green, blue', () => {
    throw Error();
   });

 });

 describe('Button', () => {

  it('does a button exist', () => {
    const wrapper = shallow(<App  />);
    const button = wrapper.find('button')
    expect(button.length).toBe(1)
   });
  
   it('Does button, when clicked trigger an event', () => {
    const wrapper = shallow(<App  />);
    const button = wrapper.find('button')
    button.simulate('click')
    wrapper.update() //updates state
    const updatedBackgroundColorState = wrapper
    .find('[data-test="app-component"]')
    .prop('style');
    expect(updatedBackgroundColorState).not.toEqual({"backgroundColor": "purple"});
   });
 });

 describe('Random color generator', () => {

  it('function that randomizes color', () => {
    expect(randNum).toBeTruthy()
  });

   it('Picks a number greater than or equal 0 AND less the lenght of the color array', () => {
    expect(randNum()).toBeGreaterThanOrEqual(0)
    expect(randNum()).toBeLessThan(colors.length)

   });
 });