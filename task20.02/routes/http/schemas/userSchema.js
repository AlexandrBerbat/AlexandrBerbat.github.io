module.exports = {
    type: "object",
    properties: {
        os: {
            type: "string",
            minLength: 1,
            maxLength: 200,
        },
        browser: {
            type: "string",
            minLength: 1,
            maxLength: 100,
        },
        ip: {
            type: "string",
            minLength: 1,
            maxLength: 100,
            pattern: `^[0-9 .]+$`
        }
    },
}