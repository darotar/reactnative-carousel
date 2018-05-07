import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import Title from './';

const title = renderer.create(<Title>Заголовок</Title>);
const treeTitle = title.toTree();

describe('<Title />', () => {
  it('renders without crashing', () => {
    expect(title.toJSON()).toBeTruthy();
  });

  it('contains text from props.title', () => {
    const { value, children } = treeTitle.props;
    const text = title.root.findByType(Text).props.children;

    expect(text === children || text === value).toBe(true);
  });
});
