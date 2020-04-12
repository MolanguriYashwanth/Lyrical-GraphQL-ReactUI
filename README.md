# Lyrical-GraphQL


mutation AddSong($title:String){
addSong(title:$title){
  id,
  title
}
}

query variable:
{
  "title":"New Title With Qery Variable"
}

For Navigation in React component we can use withRouter and pass history to child components
We can also use hashHistory to navigate throw components