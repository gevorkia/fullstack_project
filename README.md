# MyTrails

MyTrails, an AllTrails clone, is an application that allows users to find detailed information about parks and trails, view photos and reviews, and contribute reviews of trails they've completed. A park page includes general information about the park including photos, descriptions, a button to map directions to the park, and a list of top trails in the area.

A trail page includes detailed information such as the difficulty, length, elevation gain, route type, and tag identifiers to quickly share trail features with users. Users will be able to read reviews as well as create, edit, and delete their own reviews.

### Live site: [MyTrails](https://mytrails-app.herokuapp.com/)

![Splash Page](./images/mytrails_splash.png?raw=true)

## Technology 
MyTrails was created using Ruby on Rails and a POSTgreSQL database on the backend. React and CSS are used for the frontend in conjuction with Redux for state management. Photos are stored in AWS S3. OpenMapBox is utilized for park and trail mapping. 

### Technologies: 
- Front end
  - React
  - Redux 
  - HTML
  - SCSS
  - OpenMapBox API
- Back end
  - Ruby on Rails 
  - PostgreSQL
  - JBuilder
  - AWS S3 (photo storage)

 
## Features: 

### User Authentication

![Alt Text](./images/user_auth.png?raw=true)

* Users can log in or sign up to start using the different features.
* Users can skip signing up by clicking on the demo user - they will be redirected to the demo user's dashboard.

### Search Bar

![Alt Text](./images/search_bar.png?raw=true)

* On the splash page, users can search for parks or trails that will take them to the respective item's show page. Each park and trail page also has a search bar at top.

### Park Page

![Alt Text](./images/park.png?raw=true)

* Users can view information about the park in the form of photos, average and total ratings, summary & description, pinned trails on the park map, access directions from their location, general info, and a list of top trails . 

### Trail Page 

![Alt Text](./images/trail.png?raw=true)

* Users can view the trail's difficulty, average ratings, access directions, length, elevation gain, route type, tag identifiers, summary & description, as well as reviews. The trail is pinned in a map on the sidebar above a list of nearby trails located within the park. 

### Reviews (CRUD)

* On a trail page, users can add reviews by clicking on the "write review" button which will open up a modal. Within the modal, users can enter a rating, the review, the type of activity, date, and select tags for trail conditions. Upon posting the review, it will join the other reviews on the page in chronological order.

![Alt Text](./images/review.png?raw=true)

* Users can edit their own review by clicking on the edit text underneath it. A modal pre-filled with their review information will pop up to allow for editing.

* Users can delete a review by clicking on the delete text underneath their review.


### Search Suggestions Component

I created a separate component for search suggestions that renders a list when the user interacts with the search bar. An event handler is used to set a new state with the user's input values which are further used to filter search suggestions. The id within the HTML input element is also changed in the new state, allowing CSS styling to display the search suggestion elements only when the state has updated.

```js
Home Page Component

setSearchText(e) {
    return e => this.setState({
      searchText: e.target.value,
      id: "display-search-list"
    });
  }

// in render function
    <input
        className="home-search-bar"
        type="text"
        placeholder="Enter a park or trail name"
        autoComplete="off"
        aria-label="text search input"
        onChange={this.setSearchText()}
    />
    <div className="search-suggestions">
        <div className="suggestions-list-wrapper" id={this.state.id}>
        <SearchSuggestions searchText={this.state.searchText} />
        </div>
    </div>
```

### Secondary Nav Component

Users can search for parks or trails in the search bar on the splash page and within the secondary navigation bar that is displayed elsewhere on the site but not the splash page. To keep code concise, I broke down the navigation search bar into a separate component (secondary navigation). Props were passed through from the parent component.

