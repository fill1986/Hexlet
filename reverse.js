reverse=(str) => {
  let lastIndex = str.length - 1;
  // BEGIN (write your solution here)
  const iter = (index, acc) => {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, `${str[index]}${acc}`);
  };
  // END
  return iter(0, '');
};


console.log(reverse('Test'));