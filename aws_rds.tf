resource "aws_db_instance" "example" {
  instance_class = "db.t2.micro"
  engine         = "mysql"
  username       = var.db_username
  password       = var.db_password
  allocated_storage = 20
}
