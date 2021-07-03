const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const {
    data: {
      allContentfulRecipes: { nodes: recipes },
    },
  } = await graphql(`
    query GetRecipes {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  console.log("##############");
  console.log(recipes);
  console.log("##############");

  const tags = [];

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (Array.prototype.indexOf("tag") < 0) {
        tags.push(tag);
      }
    });
  });
  console.log(tags);
  tags.forEach(tag => {
    const slugTag = slugify(tag, { lower: true });
    createPage({
      path: `/tags/${slugTag}`,
      component: path.resolve(`src/templates/tag-template.js`),
      context: {
        tag,
      },
    });
  });
};
