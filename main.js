const LinksSocialMedia = {
  github: 'pedrssouza',
  youtube: 'UCH3FwXP9bGqPQvy62-zVc1g',
  instagram: 'pedrssouza',
  facebook: 'pedrosouza16.96',
  twitter: 'pedrssouza18'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImagem.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()
