/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResponsiveDatePickers from './index';

test("Date picker component", () => {
    const wrapper = render(<ResponsiveDatePickers label="08/22" date={new Date()} />);
    expect(wrapper).toBeTruthy;
})