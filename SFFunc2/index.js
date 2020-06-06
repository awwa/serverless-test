exports.handler = async (event, context, callback) => {
    console.log(event.Comment);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello Func2'),
    };
    if (!event.Comment) {
        var e = new Error('Func2 error');
        callback(e, 'Func2 error');
    }
    return response;
};

