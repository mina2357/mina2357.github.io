const githubUsername = "codeartisan-dev";

async function fetchGitHubData() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`);
    const user = await response.json();

    document.getElementById("gh-avatar").src = user.avatar_url;
    document.getElementById("gh-name").textContent = user.name || user.login;
    document.getElementById("gh-bio").textContent = user.bio || "Developer on GitHub";
    document.getElementById("gh-repos").textContent = `Public Repos: ${user.public_repos}`;
    document.getElementById("gh-followers").textContent = `Followers: ${user.followers}`;
  } catch (err) {
    console.error("GitHub API error:", err);
  }
}

window.onload = fetchGitHubData;
