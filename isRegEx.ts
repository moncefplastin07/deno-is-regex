const isRegEx = (input: any): boolean => {
  // check if the input is RegExp instance return true
  if (Object.prototype.toString.call(input) === "[object RegExp]") {
    return true;
  }

  // check if the input is not string
  if (!(typeof input === "string")) {
    return false;
  }

  // try to build new RegExp instance with the input
  try {
    return new Function(`
            "use strict";
            try {
                new RegExp(${input});
                return true;
            } catch (e) {
                return false;
            }
        `)();
  } catch (e) {
    return false;
  }
};

export { isRegEx };
