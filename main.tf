resource "null_resource" "clone_repo" {
  provisioner "local-exec" {
    command = "git clone https://${var.github_token}@github.com/${var.github_username}/${var.repo_name}.git"
  }
}

resource "aws_iam_user" "github_user" {
  name = "github-user"
}

resource "aws_iam_access_key" "github_access_key" {
  user = aws_iam_user.github_user.name
}

resource "github_oauth_app" "example" {
  name         = "example-app"
  callback_url = "http://example.com/callback"
}

resource "aws_db_instance" "example" {
  instance_class     = "db.t2.micro"
  engine             = "mysql"
  username           = var.db_username
  password           = var.db_password
  allocated_storage  = 20
}

variable "github_token" {
  description = "GitHub personal access token"
  type        = string
}

variable "github_username" {
  description = "GitHub username"
  type        = string
}

variable "repo_name" {
  description = "Name of the GitHub repository to clone"
  type        = string
}

variable "db_username" {
  description = "Database username"
  type        = string
}

variable "db_password" {
  description = "Database password"
  type        = string
}
