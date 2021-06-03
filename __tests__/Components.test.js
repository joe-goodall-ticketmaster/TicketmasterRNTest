/**
 * @format
 */

// __tests__/App.js
import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals';
import Spinner from '../App/commons/Spinner';
import Taps from '../App/commons/Taps';
import RegisterEvent from '../App/register/form/registerEvent';
import EvenMainScreen from '../App/event/index';

describe('Checking if components working.', () => {
  test('RegisterEvent component render correctly', () => {
    const tree = renderer.create(<RegisterEvent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Spinner component render correctly', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Taps component render correctly', () => {
    const tree = renderer.create(<Taps />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('EvenMainScreen component render correctly', () => {
    const tree = renderer.create(<EvenMainScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
