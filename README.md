**[Web Development Glossary Search](https://hackathon-mongodb-devto.vercel.app/)** is a web application that I created with the objective of taking part in the [MongoDB Atlas Hackathon](https://dev.to/devteam/announcing-the-mongodb-atlas-hackathon-on-dev-4b6m) hosted by the DEV.to community.

The app makes use of several MongoDB features:
- Search indexing for auto-complete and normal searches using MongoDB Atlas.
- Serverless functions that are called to perform the actual auto-complete and search features using MongoDB Realm.
- The capacity to do a fuzzy search, querying the data for the top 10 closest matches to the search term.

In this project, I also implemented a _save to favourites_ functionality using `localStorage`, and React pagination to browse through the multiple documents returned by MongoDB.

The app was developed using:
- [React]() for the front end with the following packages:
  - [`realm-web`](https://www.npmjs.com/package/realm-web): for the MongoDB connectivity and Realm access
  - [`html-react-parser`](https://www.npmjs.com/package/html-react-parser): for parsing the data contained in the documents
  - [`react-paginate`](https://github.com/AdeleD/react-paginate): to paginate the documents returned by MongoDB
- [Next.js](https://nextjs.org/) for the back end
- [Heroicons](https://heroicons.com/) for the icons
- [TailwindCSS](https://tailwindcss.com/) for the styling

---

👉 Watch it live here: https://hackathon-mongodb-devto.vercel.app/

---

The project is basically a glossary search app. The user can search a web development related term and save it as a favourite.

![Application tour](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kfe8u14k4kmlnbfjlywz.gif)

On the start page, the app will present a list with all the terms that are present on the MongoDB database. As there are quite a lot of them, they are paginated.

Once the user starts searching for a particular term, the search field will offer auto-complete options after the third character is entered in the input field. This is accomplished by calling a serverless function on MongoDB Realm.

![Serverless function for auto-complete](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/puorouc9b6bgyrgpoirf.png)

This is the code for the function:
```javascript
exports = function (arg) {
    let collection = context.services.get("mongodb-atlas").db("hackathon_db").collection("web_glossary");

    let pipeline = [
        {
            $search: {
                index: "autoCompleteDefinitions",
                "autocomplete": {
                    "query": arg,
                    "path": "title",
                    "tokenOrder": "sequential"
                }
            }
        },
        {
            $limit: 10
        },
        {
            $project: {
                // "_id": 0
                "title": 1
            }
        }];

    return collection.aggregate(pipeline);
};
```
What this function does is to build a pipeline that searches the auto-complete index (defined in MongoDB Atlas) for query matches, limits those matches to 10, and returns the title of the matching documents. As a result, a dropdown list is shown when the user searches for a term, and the user can select one of them to see its definition:

![Drop down](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/426u1r9q8rcazhbpm2tt.png)

Here is a demo of this functionality in action:

![Auto-complete in action](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b53368mgpwnb64b3gdap.gif)

The user can also type a term on the search field and press `Enter` or click on the `Search` button. This will call another serverless function defined in MongoDB Realm that will deliver the first 10 matches that are similar to the query sent by the user.

![Fuzzy matching](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6kdgn4y8wuxt42s1419u.png)

This allows for fuzzy matching terms. For example, the user can enter `javoscrpt`, and MongoDB will return documents that are a close match to that term, such as `JavaScript`. This is a really awesome functionality! MongoDB will also return a `score` indicating how close to the query term is the returned result.

![Scores](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4v5ejfct0qxvn9z8181f.png)

Here is a demo of this functionality in action:

<img width="100%" style="width:100%" src="https://media.giphy.com/media/KjPMwLfo9jkVQKqfvF/giphy.gif">

In case you are wondering, this is the code for this serverless function:
```javascript
exports = function (arg) {
    let collection = context.services.get("mongodb-atlas").db("hackathon_db").collection("web_glossary");
    let pipeline = [
        {
            '$search': {
                'index': 'searchDefinitions',
                'text': {
                    'query': arg,
                    'path': {
                        'wildcard': '*'
                    },
                    'fuzzy': {}
                }
            }
        },
        {
            $project: {
                title: 1,
                excerpt: 1,
                score: { $meta: "searchScore" }
            }
        },
        {
            $limit: 10
        }
    ];

    return collection.aggregate(pipeline);
};
```
I wanted to keep this app simple enough to focus on the MongoDB aspect of it, so if you think it's quite bare-bones, that's the reason why. That's also the reason behind the data (the definitions) not being polished enough.
