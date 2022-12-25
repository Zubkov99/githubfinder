import {GithubUser, LocalGithubUser} from "../types";

export const extractLocalUser = (user:GithubUser):LocalGithubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  location: user.location,
  blog: user.blog,
  bio: user.bio,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
  url: user.html_url,
})
