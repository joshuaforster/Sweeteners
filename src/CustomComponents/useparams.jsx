
export function newParams(objects, id) {
    return objects.find(object => JSON.parse(id) === object.id);
}

