# MyTrails

MyTrails, an AllTrails clone, is an application that allows users to find detailed information about parks and trails, view photos and reviews, and contribute reviews of trails they've completed. A park page includes general information about the park including photos, descriptions, a button to map directions to the park, and a list of top trails in the area.

A trail page includes detailed information such as the difficulty, length, elevation gain, route type, and tag identifiers to quickly share trail features with users. Users will be able to read reviews as well as create, edit, and delete their own reviews.

### Live: [MyTrails](https://mytrails-app.herokuapp.com/)

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

## Code Snippets

### Search Suggestions Component

I created a separate component for search suggestions that renders a list when the user interacts with the search bar. An event handler is used to set a new state with the user's input values which are further used to filter search suggestions. The id within the HTML input element is also changed in the new state, allowing CSS styling to display the search suggestion elements only when the state has updated.


```js
  //Home Page Component

  <form
    className="input-holder"
    onFocus={this.handleFocus}
    onBlur={this.handleBlur}
  >
    <div className="magnifying-glass">
      <img
        alt="logo"
        src="https://cdn-assets.alltrails.com/assets/icons/search-gray-086ffadf121a7eb1f0487dcd1d7279b4.svg"
      />
    </div>
    <input
      className="home-search-bar"
      type="text"
      placeholder="Enter a park or trail name"
      autoComplete="off"
      aria-label="text search input"
      onChange={this.setSearchText}
      onClick={this.setSearchText}
    />
    <div className="search-suggestions">
      <div className="suggestions-list-wrapper" id={this.state.id}>
        <SearchSuggestions
          searchText={this.state.searchText}
        />
      </div>
    </div>
    <button className="search-button">Search</button>
  </form>
```

I encountered a bug that would not allow me to use the built-in onBlur while simultaneously linking to the link connected to the list item. The onBlur was overriding the onFocus. To remedy this, I used jQuery to extract the path from the relatedTarget and push that path into the history.

```js

setSearchText(e) {
    e.preventDefault();
    this.setState({
      searchText: e.target.value,
      id: "display-search-list",
    });
  };

  handleFocus(e) {
    e.preventDefault();
    if (this.state.focus) return;
    this.setState({ focus: true });
    this.setSearchText(e);
  }

  handleBlur(e) {
    e.preventDefault();
    if (!this.state.focus) return;
    if (e.relatedTarget) {
      const path = e.relatedTarget.getAttribute("href")
      this.props.history.push(path);
    } else {
      this.setState({ focus: false });
      this.removeSearchText(e);
    }
  }
```


### Review Form 

Users can select tags associated with trail conditions when creating a review. If they change their mind while completing the review or want to edit the form, unselecting the tag allows for that slice of state to re-render seamlessly. Dynamic CSS classes that indicate tag selection, or therelackof, illustrate the change for the user.

In render:

```js
  const trailConditionsTags = (
    <>
      {this.props.trailConditions.map((trailConditions) => (
        <span
          key={trailConditions.id}
          onClick={this.handleTagSelection}
          className={
            this.state.tag_ids.includes(trailConditions.name)
              ? "review-form-tag-selected"
              : "review-form-tag"
          }
        >
          {trailConditions.name}
        </span>
      ))}
    </>
  );
```

Event handler:

```js
  handleTagSelection(e) {
    e.preventDefault();

    const newTagName = e.target.textContent;

    if (!this.state.tag_ids.includes(newTagName)) {
      this.setState({
        tag_ids: [...this.state.tag_ids, newTagName],
      });
    } else {
      const filtered = this.state.tag_ids.filter(tagName => tagName !== newTagName)

      this.setState({
        tag_ids: filtered
      })
    }
  }
```

