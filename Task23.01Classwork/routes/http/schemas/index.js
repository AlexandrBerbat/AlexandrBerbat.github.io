module.exports = {
    type: "object",
    properties: {
        foo: {
            type: "string",
            max: 55,
            pattern: "^[0-9]+$"
        },
        bar: {
            type: "string",
            maxLength: 250,
            minLength: 2
        },
        three: {
            type: "string",
            maxLength: 3,
            pattern: "^[0-9]+$"
        },
    },
}