export function orderArrayByEnum(array: any): any {
  const response = array.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  return response;
}

export function orderArrayByName(array: any): any {
  const response = array.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });

  return response;
}

export function orderArrayByDisplayValue(array: any): any {
  const response = array.sort(function (a, b) {
    if (a.displayValue > b.displayValue) {
      return 1;
    } else if (a.displayValue < b.displayValue) {
      return -1;
    } else {
      return 0;
    }
  });

  return response;
}

export function orderArrayOfArray(array: any): any {
  const response = array.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return 0;
    }
  });

  return response;
}
