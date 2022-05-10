const React = require('react');

function Def (html) {
    return(
        <html lang="en">
        <head>
            <title>{html.title || 'Def'}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
        <body>
            <div className = "container">
                {html.children}
            </div>
        </body>
        </html>
    )
};

module.exports = Def;