export type LocalGithubUser = {
  login: string,
  avatar: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter: string | null,
  repos: number,
  followers: number,
  following: number,
  created: string,
  url: string,
}

export type GithubUser = {
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter_username: string | null,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string,
  html_url: string
}

export type GithubError = {
  message: string,
  documentation_url: string,
}
