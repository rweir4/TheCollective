# README

## The Collective

The Collective is inspired by Pinterest, using the idea of collecting images so that you can save and share them with those you follow or that follow you.

<center><img src="app/assets/images/collective_Logo.png" align="middle" width="150px" height="150px"/>

<br>
<br>

<img src="https://img.shields.io/badge/Ruby%20Version-2.3.1-red.svg" />  <img src="https://img.shields.io/badge/NPM%20Version-3.10.10-blue.svg"/>  <img src="https://img.shields.io/badge/Rails%20Version-%205.1.5-green.svg" /></center><br>

<h2>Getting Started</h2>

Run bundle exec rails db:setup, bundle exec rails db:seed, and npm install.

There is a demo login for a seeded account.

<img src="/app/assets/images/login_demo.gif"/>

<h2>Code Samples</h2>

Implementing the upload of images for items took the use of the Paperclip gem. You can upload via file or url. The information is stored using the formData class which is sent off in an AJAX post request.

There is also a search for users. Not yet predictive, but that will be added in the future. Users that are seeded are:
<ul>
  <li>rweir11 - DEMO</li>
  <li>rweir12</li>
  <li>rweir13</li>
</ul>

  ```
  const formData = new FormData();

  formData.append("item[description]", this.state.description);
  formData.append("item[image]", this.state.imageFile);
  formData.append("item[collection_id]", this.state.collection_id);
  if (this.props.formType !== 'create') {
    formData.append("item[itemId]", this.props.item.id);
  }

  if (this.props.loaded) {
    this.props.submitAction(formData).then(() => {
       this.props.closeModal();
    });
  }
  ```

Accounting for automatic refresh, aka upon change state was another difficulty that was solved by sending formatting my json with adequate user information to which my reducers could add the appropriate information. This methodology was used for collections and items.

Follows has been implemented so that only the items saved by a followed person will appear in the home feed.

  ```
  case RECEIVE_FOLLOW:
    return merge({}, state,
      {[action.follower_id.follows]:
       state[action.follower_id].follows.push(action.followee_id)
      },
      {[action.followee_id.followers]:
        state[action.followee_id].followers.push(action.follower_id)
      });
    ```

The feed is populated by using jbuilder to format the json for the follows' and current user's items, as well as all other backend data.

<h2>Future Features</h2>

<ul>
  <li>Predictive Search</li>
  <li>Explore</li>
  <li>Notifications</li>
  <li>Messaging</li>
</ul>
