resource "aws_iam_user" "github_user" {
  name = "github-user"
}

resource "aws_iam_access_key" "github_access_key" {
  user = aws_iam_user.github_user.name
}
