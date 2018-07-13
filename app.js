const rearg = (fn, indexes) => (...args) =>
  fn(
    ...args.reduce(
      (acc, val, i) => (
        (acc[indexes.indexOf(i)] = val), acc),
      Array.from({ length: indexes.length })
    )
  );

  var rearged = rearg(
    function(a, b, c) {
      return [a, b, c];
    },
    [2, 0, 1]
  );
  rearged('b', 'c', 'a'); // ['a', 'b', 'c']