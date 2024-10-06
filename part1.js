// part1.js

// When the student clicks the "Videos" button
document.getElementById("videos-btn").addEventListener("click", function () {
  const videos = getContent("videos");
  const contentDiv = document.getElementById("content");

  // Clear previous content
  contentDiv.innerHTML = "";

  // Display video links dynamically
  videos.forEach(video => {
    const videoLink = document.createElement('div');
    videoLink.innerHTML = `
      <h3>${video.title}</h3>
      <iframe width="560" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    contentDiv.appendChild(videoLink);
  });
});

// When the student clicks the "Live Sessions" button
document.getElementById("live-sessions-btn").addEventListener("click", function () {
  const liveSessions = getContent("liveSessions");
  const contentDiv = document.getElementById("content");

  // Clear previous content
  contentDiv.innerHTML = "";

  // Display live session links dynamically
  liveSessions.forEach(session => {
    const sessionLink = document.createElement('div');
    sessionLink.innerHTML = `
      <h3>${session.title}</h3>
      <a href="${session.url}" target="_blank">Join Live Session</a>
    `;
    contentDiv.appendChild(sessionLink);
  });
});
