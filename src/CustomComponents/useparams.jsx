export function newParams(objects, id) {
    return objects.find(object => id.toString() === object.id.toString());
}