terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.10"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_token
}

resource "vercel_project" "nextjs" {
  name      = "terraform-portfolio"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "VathanakSol/portfolio"
  }

  root_directory    = null
  build_command     = "npm run build"
  install_command   = "npm install"
  output_directory  = ".next"
}

resource "vercel_deployment" "initial" {
  project_id = vercel_project.nextjs.id
  ref        = "dev" # Change this if using a different branch
  production = true
}

output "deployment_url" {
  value = vercel_deployment.initial.url
}