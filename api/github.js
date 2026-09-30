// Vercel Serverless Function: /api/github
// Securely proxies GitHub API requests using process.env.GITHUB_TOKEN

export default async function handler(req, res) {
  // Set CORS and Cache-Control headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const username = 'shanmukap019-png';
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    'User-Agent': 'ShanmukaPriya-Portfolio-App'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    // 1. Fetch User Profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    const userData = userRes.ok ? await userRes.json() : null;

    // 2. Fetch Recent Repositories sorted by pushed date
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=8`, { headers });
    const reposData = reposRes.ok ? await reposRes.json() : [];

    // Calculate total stars
    const totalStars = reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);

    // 3. Fetch GraphQL Contributions (if token is available)
    let totalContributions = 25;
    let recentCommits = [];

    if (token) {
      try {
        const gqlQuery = {
          query: `query($u: String!) {
            user(login: $u) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
              repositories(first: 6, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
                nodes {
                  name
                  description
                  pushedAt
                  stargazerCount
                  forkCount
                  primaryLanguage { name color }
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        message
                        committedDate
                      }
                    }
                  }
                }
              }
            }
          }`,
          variables: { u: username }
        };

        const gqlRes = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            ...headers,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(gqlQuery)
        });

        if (gqlRes.ok) {
          const gqlData = await gqlRes.json();
          if (gqlData.data && gqlData.data.user) {
            totalContributions = gqlData.data.user.contributionsCollection.contributionCalendar.totalContributions;
            recentCommits = gqlData.data.user.repositories.nodes.map(n => ({
              name: n.name,
              pushedAt: n.pushedAt,
              language: n.primaryLanguage ? n.primaryLanguage.name : null,
              latestCommit: n.defaultBranchRef && n.defaultBranchRef.target ? n.defaultBranchRef.target.message.split('\n')[0] : null
            }));
          }
        }
      } catch (gqlErr) {
        console.error('GraphQL fetch error:', gqlErr);
      }
    }

    // 4. Fetch Recent Events
    const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=6`, { headers });
    const eventsData = eventsRes.ok ? await eventsRes.json() : [];

    return res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      user: {
        login: username,
        name: userData ? userData.name : 'Shanmuka Priya Katta',
        public_repos: userData ? userData.public_repos : reposData.length,
        followers: userData ? userData.followers : 0,
        total_stars: totalStars,
        avatar_url: userData ? userData.avatar_url : `https://github.com/${username}.png`
      },
      totalContributions,
      recentRepos: reposData.map(r => ({
        id: r.id,
        name: r.name,
        full_name: r.full_name,
        description: r.description,
        html_url: r.html_url,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        pushed_at: r.pushed_at,
        updated_at: r.updated_at
      })),
      recentCommits,
      events: eventsData.map(e => ({
        id: e.id,
        type: e.type,
        repo: e.repo ? e.repo.name : null,
        created_at: e.created_at,
        payload: e.payload
      }))
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
