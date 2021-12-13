let categories = [
  {
    title: 'Baseball',
    description: 'Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding.'
  },
  {
    title: 'Football',
    description: 'American football, referred to simply as football in the United States and Canada and also known as gridiron, is a team sport played by two teams of eleven players on a rectangular field with goalposts at each end.'
  },
  {
    title: 'Hockey',
    description: 'Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent\'s goal using a hockey stick.'
  }
];

function getCategories() {
  return categories;
}

function addCategory(category) {
  categories.push(category);
}

function getCategoryById(id) {
  if (id >= categories.length) return null;
  return categories[id];
}

function updateCategory(category, id) {
  categories[id] = category;
}

function deleteCategory(id) {
  categories.splice(id, 1);
}

exports.getCategories = getCategories;
exports.addCategory = addCategory;
exports.getCategoryById = getCategoryById;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
