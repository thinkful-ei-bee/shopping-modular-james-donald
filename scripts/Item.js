const Item = (function() {
    let goo = {validateName, create};
    return goo;
} ());

function validateName(name) {
    if (typeof name === "undefined") {
        throw new TypeError('Name does not exist'); 
    }
}

const create = ({name}) => ({
    id() {
        cuid();
    },
    name,
    checked: 'false'
})

