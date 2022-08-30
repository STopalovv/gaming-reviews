exports.handler = async () => {
    console.log('function ran');

    const data = {name: 'Ezio', age: 32, country: 'Italy'}

    //return response to the browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}