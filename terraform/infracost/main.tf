provider "vercel" {
  api_token = var.vercel_token  
}

resource "vercel_project" "web_app" {
  name      = "production-web-app"
  framework = "nextjs"
}

resource "vercel_deployment" "main" {
  project_id  = vercel_project.web_app.id
  production  = true
  files       = {
    "pages/index.js" = file("${path.module}/pages/index.js")
  }
}