// db.js

const contentDB = {
  videos: [
    { id: 1, title: 'Lesson 1: Early Civilizations Video', url: 'https://youtu.be/wX6J0Gd2EC8?si=ipM_gpyziIkK7INp' },
    { id: 2, title: 'Lesson 2: Ancient Trade Video', url: 'https://youtu.be/Kepp9g9Ccqk?si=n1ILdUhAxfIHqzXU' }
  ],
  liveSessions: [
    { id: 1, title: 'Lesson 1: Live Discussion', url: 'http://meet.google.com/shn-vwsx-fng' },
    { id: 2, title: 'Lesson 2: Interactive Session', url: 'http://meet.google.com/shn-vwsx-fng' }
  ]
};

// Function to get content (videos or live sessions)
function getContent(type) {
  return contentDB[type];
}
