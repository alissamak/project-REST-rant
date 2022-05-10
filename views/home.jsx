const React = require('react');
const Def = require('./default');

function home (){
    return(
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/breakfast.jpg" alt="Breakfast Spread"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@brookelark">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/breakfast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
    )
}

module.exports = home;