let categories = [
  {
    title: 'Baseball',
    description: 'Baseball'
  },
  {
    title: 'Football',
    description: 'Football'
  },
  {
    title: 'Hockey',
    description: 'Hockey'
  }
];

function getCategory() {
  return categories;
};

function addCategory(category) {
  categories.push(category);
}

exports.getCategory = getCategory;
exports.addCategory = addCategory;
