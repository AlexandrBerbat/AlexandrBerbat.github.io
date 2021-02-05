module.exports = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 1,
            maxLength: 100,
            pattern: `^[A-Za-z]+$`
        },
        surname: {
            type: "string",
            minLength: 1,
            maxLength: 100,
            pattern: `^[A-Za-z]+$`
        },
        login: {
            type: "string",
            minLength: 1,
            maxLength: 100
        },
        passw: {
            type: "string",
            minLength: 3
        }
    },
}