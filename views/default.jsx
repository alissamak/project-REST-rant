const React = require('react');

function Def (html) {
    return(
        <html lang="en">
        <head>
            <title>{html.title || 'Def'}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="/css/style.css"></link>
            <link rel="shortcut icon" type="image/jpg" href="/public/images/cookie_favicon.ico"></link>
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/places">Places</a>
                    </li>
                    <li>
                        <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
            <div className = "container">
                {html.children}
            </div>
        </body>
        </html>
    )
};

module.exports = Def;