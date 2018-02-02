import { compose, difference, equals, length, map, sort, split, toLower } from 'ramda'

const isDifferentArrangement = (foo, bar) => {
  const [baz, qux] = map(convertToCharList, [foo, bar]);

  return isSame(baz, qux) && isSame(qux, baz);
}

const isSame = compose(equals(0), length, difference);

const makeLowercaseList = compose(split(''), toLower);

const convertToCharList = foo => [...new Set(foo |> makeLowercaseList)] |> sort(diff);

const diff = (a, b) => a - b;
