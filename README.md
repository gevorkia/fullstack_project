# MyTrails

[Live Site] (https://mytrails-app.herokuapp.com/)

## About Me

MyTrails, an allTrails clone, is an application that allows users to find detailed information about parks and trails, view photos and reviews, and contribute reviews of trails they've completed. A park page includes general information about the park including photos, descriptions, a button to map directions to the park, and a list of top trails in the area.
A trail page includes detailed information such as the difficulty, length, elevation gain, route type, and tag identifiers to quickly share trail features with users. Users will be able to read reviews as well as create, edit, and delete their own reviews.

![Splash Page](./images/mytrails_splash.png?raw=true)

## Technology 
MyTrails was created using Ruby on Rails and a POSTgreSQL database on the backend. React and CSS are used for the frontend in conjuction with Redux for state management. Photos are stored in AWS S3. OpenMapBox is utilized for park and trail mapping. 

## Features

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

