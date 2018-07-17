// @flow

import createLinkedList from '.';

const items = [{}, {}, {}];
const [item1, item2, item3] = items;

const first = createLinkedList(items);

test('first item', () => {
  expect(first.value).toBe(item1);
});

test('second item', () => {
  expect(first.next().value).toBe(item2);
});

test('second item again', () => {
  expect(first.next().value).toBe(item2);
});

test('third item', () => {
  expect(first.next().next().value).toBe(item3);
});
