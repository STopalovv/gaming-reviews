exports.handler = async (event, context) => {
    const reviews = [
        {title: "Assassin's Creed", character: "Altaïr Ibn-La'Ahad"},
        {title: "Assassin's Creed 2", character: "Ezio Auditore de Firenze"},
        {title: "Assassin's Creed: Brotherhood", character: "Ezio Auditore de Firenze"},
        {title: "Assassin's Creed: Revelations", character: "Ezio Auditore de Firenze"}
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(reviews)
        }
    } 
    return {
        statusCode: 401,
        body: JSON.stringify({mssg: "Unauthorized access!"})
    }
}