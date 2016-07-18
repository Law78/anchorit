This is an utility for use anchor link with React Router.

#How to install

npm install --save anchorits

#How to use

In your app.jsx:

```
// destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var {anchorit} = require('anchorit');


function onUpdate () {s
  anchorit();
}
/*
```

In your link:
```
<Link to={{ pathname: '', query: { anchor: 'YOURANCHORLINK' } }} className="YOUROPTIONALCSSCLASS">Go To Link</Link>
```
