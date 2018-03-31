const issuesURL = 'https://api.github.com/repos/urizaraj/javascript-fetch-lab/issues'

function getIssues() {
  const url = issuesURL
  const init = {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }

  fetch(url, init)
    .then(res => res.json())
    .then(res => showIssues(res))
}

function showIssues(json) {
  const issues = $('#issues')
  json.forEach(issue => {
    const html = `<p>${issue.title}<br>${issue.body}</p>`
    issues.append(html)
  });
}

function createIssue() {
  const title = document.getElementById('title')
  const body = document.getElementById('body')

  const postData = {
    title: title.value,
    body: body.value
  }

  const init = {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }

  const url = `https://api.github.com/repos/urizaraj/javascript-fetch-lab/issues`

  fetch(url, init)
    .then(res => res.json())
    .then(res => getIssues())
}

function showResults(json) {}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const base = 'https://api.github.com/repos'
  const url = `${base}/${repo}/forks`

  const init = {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }

  fetch(url, init)
    .then(res => res.json())
    .then(res => showForkedRepo(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function showForkedRepo(res) {
  results = $('#results')
  link = $('#link')
  repName = $('#repName')

  repName.text(res.full_name)
  link.attr('href', res.html_url)
  link.text('Link')
}
