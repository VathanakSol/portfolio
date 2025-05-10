locals {
  env_file_path = "${path.module}/.env" 
  
  env_vars = fileexists(local.env_file_path) ? {
    for tuple in regexall("^([^#][A-Za-z0-9_]+)=(.*)$", file(local.env_file_path)) :
    trimspace(tuple[0]) => trimspace(tuple[1])
    if length(tuple) == 2 && !startswith(tuple[0], "#")
  } : {}
}