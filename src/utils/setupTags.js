const setupTags = recipes => {
  const tagsObj = {};
  console.log("Hello from utils");
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // console.log("tag is", tag);
      if (tag in tagsObj) {
        tagsObj[tag].push(recipe.title);
      } else {
        tagsObj[tag] = [recipe.title];
      }
    });
  });

  return tagsObj;
};

export default setupTags;
