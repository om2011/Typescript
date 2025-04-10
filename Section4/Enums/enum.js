var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
var docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Java 8 in Action' }
};
var docTwo = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'Java 8 in Action' }
};
console.log(docOne);
console.log(docTwo);
