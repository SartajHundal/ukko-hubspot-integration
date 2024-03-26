resource "null_resource" "clone_repo" {
 provisioner "local-exec" {
    command = "git clone https://${var.github_token}@github.com/${var.github_username}/${var.repo_name}.git"
 }
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
