export const getProfile = `
query getProfile($username: String!){
  profile(username: $username){
    firstName
    lastName
    gravatar
  }
}`;

export const getStreams = `
query getStreams($type:String,$hasParent:Boolean)
{
  streams(streamType: $type, hasParent:$hasParent)
  {
    name
    slug
    type
  }
}`;

export const getStreamProgress = `
query getStreamProgress($slug: String!, $username: String!, $token: String!)
{
  streamProgress(slug: $slug, username: $username, token: $token)
  {
    progress
    tasksCompleted
  	tasksPending
  }
}`;

export const getTasks = `
query getTasks($stream: String, $maxPoints: Int, $minPoints: Int, $maxDifficulty: Int, $minDifficulty: Int )
{
  tasks(
    stream: $stream,
    maxPoints: $maxPoints,
    minPoints: $minPoints, 
    maxDifficulty: $maxDifficulty, 
    minDifficulty: $minDifficulty
  )
  {
    id
    title
    points
    difficulty 
    
  }
}`;

export const getTaskProgress = `
query getTaskProgress($id: Int!,$username: String!,$token: String!)
{
  taskProgress(id:$id,username:$username,token:$token)
  {
    status
  	start
    submission
    isComplete
    assigner
    assignTime
  }
}`;
