exports.handler = async (event, context, callback) => {
    console.log(event.Comment);
    const response = {
        Comment: true
    };
    if (!event.Comment) {
        var e = new Error('hoge');
        callback(e, "error");
    }
    return response;
};

