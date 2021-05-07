export function filterObjectUndefined(object:  any):  any {
    Object.keys(object).forEach((key:  string) => object[key] === undefined && delete object[key]);
    return object;
}
