const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');


const names = [
  'Tom Hanks',
  'Meryl Streep',
  'Denzel Washington',
  'Scarlett Johansson',
  'Leonardo DiCaprio',
  'Jennifer Lawrence',
  'Chris Hemsworth',
  'Emma Stone',
  'Robert Downey Jr.',
  'Natalie Portman',
];

const thoughts = [
  'This is a great day!',
  'Loving the new movie!',
  'Had a wonderful time with friends.',
  'Feeling blessed and grateful.',
  'Can’t wait for the weekend!',
  'Working hard or hardly working?',
  'Enjoying the little things in life.',
  'Cherishing every moment.',
  'Life is beautiful!',
  'Stay positive and happy.',
];

const reactions = [
  'Awesome!',
  'Great to hear!',
  'So happy for you!',
  'That’s amazing!',
  'Well done!',
  'Keep it up!',
  'Fantastic!',
  'Incredible!',
  'Wow!',
  'Impressive!',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = (usedNames) => {
  let name;
  do {
    name = getRandomArrItem(names);
  } while (usedNames.has(name));
  usedNames.add(name);
  return name;
};

const getRandomThoughts = (int, usedNames) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomName(usedNames),
      reactions: getRandomReactions(3, usedNames),
    });
  }
  return results;
};

const getRandomReactions = (int, usedNames) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomName(usedNames),
    });
  }
  return results;
};

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create a set to track used names
  const usedNames = new Set();

  // Create empty array to hold the users
  const users = [];

  // Loop 10 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    const username = getRandomName(usedNames);
    const email = `${username.split(' ')[0]}@email.com`;
    const thoughts = [];
    const friends = [];

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(getRandomThoughts(10, usedNames));

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});