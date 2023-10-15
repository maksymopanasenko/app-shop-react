import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { describe, expect, test } from "vitest";
import configureStore from 'redux-mock-store'; // Install using 'npm install redux-mock-store'
import FavButton from './FavButton'; // Path to your FavButton component

const mockStore = configureStore([]);

describe('FavButton snapshot test', () => {
    test('renders correctly with empty favorites', () => {
        const store = mockStore({
        favorites: {
            favorites: [] 
        }
        });

        const component = renderer.create(
        <Provider store={store}>
            <FavButton card={{ article: 'example-article' }} />
        </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with item in favorites store', () => {
        const store = mockStore({
        favorites: {
            favorites: [{ article: 'example-article' }]
        }
        });

        const component = renderer.create(
        <Provider store={store}>
            <FavButton card={{ article: 'example-article' }} />
        </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});